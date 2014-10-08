<?php

require 'Slim/Slim.php';

$app = new Slim();

$app->get('/loadouts/:uid', 'getLoadouts');
$app->post('/loadout/add', 'addLoadout');
$app->get('/reddit-login', 'redditLogin');

$app->run();

function redditLogin() {

  if (isset($_GET["error"])) {
    echo("<pre>OAuth Error: " . $_GET["error"]."\n");
    echo('<a href="index.php">Retry</a></pre>');
    die;
  }

  $authorizeUrl = 'https://ssl.reddit.com/api/v1/authorize';
  $accessTokenUrl = 'https://ssl.reddit.com/api/v1/access_token';
  $clientId = 'PPeT3OOg04h1Jg';
  $clientSecret = 'tAPVju4bKK3uqFtZfFXGhJ1kXoE';
  $userAgent = 'ChangeMeClient/0.1 by FreddyBushBoy';

  $redirectUrl = "http://tlou-loadout.local/api/reddit-login";

  require("OAuth2/Client.php");
  require("OAuth2/GrantType/IGrantType.php");
  require("OAuth2/GrantType/AuthorizationCode.php");

  $client = new OAuth2\Client($clientId, $clientSecret, OAuth2\Client::AUTH_TYPE_AUTHORIZATION_BASIC);
  $client->setCurlOption(CURLOPT_USERAGENT,$userAgent);

  if (!isset($_GET["code"])) {
    $authUrl = $client->getAuthenticationUrl($authorizeUrl, $redirectUrl, array("scope" => "identity", "state" => "tlou-loadout"));
    header("Location: ".$authUrl);
    die("Redirect");
  }
  else {
    $params = array("code" => $_GET["code"], "redirect_uri" => $redirectUrl);
    $response = $client->getAccessToken($accessTokenUrl, "authorization_code", $params);

    $accessTokenResult = $response["result"];
    $client->setAccessToken($accessTokenResult["access_token"]);
    $client->setAccessTokenType(OAuth2\Client::ACCESS_TOKEN_BEARER);

    $response = $client->fetch("https://oauth.reddit.com/api/v1/me.json");

    echo json_encode($response['result']);
  }
}

function getConnection() {
  $dbhost="127.0.0.1";
  $dbuser="root";
  $dbpass="root";
  $dbname="tlou_loadout";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}

function getLoadouts($uid) {
  $sql = "SELECT * FROM loadouts WHERE uid=:uid ORDER BY id";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->bindParam("uid", $uid);
    $stmt->execute();
    $loadouts = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($loadouts);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function addLoadout() {
  $request = Slim::getInstance()->request();
  $loadout = json_decode($request->getBody());
  $sql = "INSERT INTO loadouts (`id`, `uid`, `key`, `name`) VALUES (NULL, :uid, :key, :name)";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->bindParam("uid", $loadout->uid);
    $stmt->bindParam("key", $loadout->key);
    $stmt->bindParam("name", $loadout->name);
    $stmt->execute();
    $db = null;
    echo json_encode($loadout);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

?>
