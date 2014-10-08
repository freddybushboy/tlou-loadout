<?php

require 'Slim/Slim.php';

$app = new Slim();

$app->get('/users', 'getUsers');
$app->get('/reddit-login', 'redditLogin');
$app->post('/users', 'addUser');

$app->get('/users/:id', 'getUser');
$app->get('/users/search/:query', 'findByName');

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

function getUsers() {
  $sql = "select * FROM users ORDER BY id";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);
    $users = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($users);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function getUser($id) {
  $sql = "SELECT * FROM users WHERE id=:id";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->bindParam("id", $id);
    $stmt->execute();
    $user = $stmt->fetchObject();
    $db = null;
    echo json_encode($user);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function addUser() {
  error_log('addUser\n', 3, '/var/tmp/php.log');
  $request = Slim::getInstance()->request();
  $user = json_decode($request->getBody());
  $sql = "INSERT INTO users (firstname, lastname, email, company) VALUES (:firstname, :lastname, :email, :company)";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->bindParam("firstname", $user->firstname);
    $stmt->bindParam("lastname", $user->lastname);
    $stmt->bindParam("email", $user->email);
    $stmt->bindParam("company", $user->company);
    $stmt->execute();
    $user->id = $db->lastInsertId();
    $db = null;
    echo json_encode($user);
  } catch(PDOException $e) {
    error_log($e->getMessage(), 3, '/var/tmp/php.log');
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}


?>
