angular.module('loadoutApp')
  .service('SkillService', function () {
    this.skills = {
      'small': [
        {
          'id': 'revolver',
          'name': 'Revolver',
          'levels': [
            {
              'description': 'Deals a solid punch with good accuracy when still.',
              'cost': 0,
              'code': '01'
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 5,
          'accuracy': 6,
          'more': [
            {
              'label': 'Body Damage',
              'value': '35%'
            },
            {
              'label': 'Head Damage',
              'value': '70%'
            },
            {
              'label': 'Destroy Armour',
              'value': '2 shots'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        },
        {
          'id': '9mm',
          'name': '9mm Pistol',
          'levels': [
            {
              'description': 'A light handgun with a high rate of fire and ample ammunition.',
              'cost': 0,
              'code': '02'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 2,
              'code': '03'
            }
          ],
          'rate': 7,
          'reload': 6,
          'damage': 2,
          'accuracy': 4,
          'more': [
            {
              'label': 'Body Damage',
              'value': '20%'
            },
            {
              'label': 'Head Damage',
              'value': '60%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'shorty',
          'name': 'Shorty',
          'levels': [
            {
              'description': 'A wide spread and downs enemies is teo shots up close.',
              'cost': 1,
              'code': '04'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 3,
              'code': '05'
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 6,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '60%'
            },
            {
              'label': 'Head Damage',
              'value': '80%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            },
            {
              'label': '',
              'value': '* The Shorty, Shotgun, and Launcher are subject to "effective distance" and have damage estimates.'
            }
          ]
        },
        {
          'id': 'enforcer',
          'name': 'Enforcer',
          'levels': [
            {
              'description': 'A versatile pistol with great range and accuracy.',
              'cost': 1,
              'code': '06'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 3,
              'code': '07'
            }
          ],
          'rate': 6,
          'reload': 6,
          'damage': 4,
          'accuracy': 7,
          'more': [
            {
              'label': 'Body Damage',
              'value': '25%'
            },
            {
              'label': 'Head Damage',
              'value': '55%'
            },
            {
              'label': 'Destroy Armour',
              'value': '2 shots'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        }
      ],
      'large': [
        {
          'id': 'nothing',
          'name': 'No Large Firearm',
          'levels': [
            {
              'description': '',
              'cost': 0,
              'code': '08'
            }
          ]
        },
        {
          'id': 'semi',
          'name': 'Semi-Auto Rifle',
          'levels': [
            {
              'description': 'A reliable mid-range killer.',
              'cost': 2,
              'code': '09'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 4,
              'code': '10'
            }
          ],
          'rate': 5,
          'reload': 4,
          'damage': 5,
          'accuracy': 7,
          'more': [
            {
              'label': 'Body Damage',
              'value': '34%'
            },
            {
              'label': 'Head Damage',
              'value': '75%'
            },
            {
              'label': 'Destroy Armour',
              'value': '2 shots'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        },
        {
          'id': 'full',
          'name': 'Full-Auto Rifle',
          'levels': [
            {
              'description': 'A fully automatic all purpose rifle.',
              'cost': 2,
              'code': '11'
            }
          ],
          'rate': 4,
          'reload': 4,
          'damage': 2,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '20%'
            },
            {
              'label': 'Head Damage',
              'value': '50%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'burst',
          'name': 'Burst Rifle',
          'levels': [
            {
              'description': 'A short range monster with three shots per burst.',
              'cost': 2,
              'code': '12'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 4,
              'code': '13'
            }
          ],
          'rate': 6,
          'reload': 4,
          'damage': 3,
          'accuracy': 4,
          'more': [
            {
              'label': 'Body Damage',
              'value': '22%'
            },
            {
              'label': 'Head Damage',
              'value': '80%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'hunting',
          'name': 'Hunting Rifle',
          'levels': [
            {
              'description': 'Two shots to down and pinpoint accurate at range.',
              'cost': 2,
              'code': '14'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 4,
              'code': '15'
            }
          ],
          'rate': 2,
          'reload': 2,
          'damage': 8,
          'accuracy': 9,
          'more': [
            {
              'label': 'Body Damage',
              'value': '60%'
            },
            {
              'label': 'Head Damage',
              'value': '100%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            }
          ]
        },
        {
          'id': 'bow',
          'name': 'Bow',
          'levels': [
            {
              'description': 'A silent killer. You won\'t show up on the enemy minimap when firing.',
              'cost': 3,
              'code': '16'
            },
          ],
          'rate': 3,
          'reload': 4,
          'damage': 6,
          'accuracy': 7,
          'more': [
            {
              'label': 'Body Damage',
              'value': '60%'
            },
            {
              'label': 'Head Damage',
              'value': '100%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            }
          ]
        },
        {
          'id': 'scoped-semi',
          'name': 'Scoped Semi-Auto',
          'levels': [
            {
              'description': 'Scoped version of the Semi-Auto Rifle.',
              'cost': 2,
              'code': '85'
            },
            {
              'description': 'Scoped version of the Semi-Auto Rifle.',
              'cost': 4,
              'code': '86'
            }
          ],
          'rate': 5,
          'reload': 4,
          'damage': 5,
          'accuracy': 8,
          'more': [
            {
              'label': 'Body Damage',
              'value': '34%'
            },
            {
              'label': 'Head Damage',
              'value': '75%'
            },
            {
              'label': 'Destroy Armour',
              'value': '2 shots'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        },
        {
          'id': 'scoped-full',
          'name': 'Scoped Full-Auto',
          'levels': [
            {
              'description': 'Scoped version of the Full-Auto Rifle.',
              'cost': 2,
              'code': '87'
            }
          ],
          'rate': 4,
          'reload': 4,
          'damage': 2,
          'accuracy': 6,
          'more': [
            {
              'label': 'Body Damage',
              'value': '20%'
            },
            {
              'label': 'Head Damage',
              'value': '50%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'scoped-burst',
          'name': 'Scoped Burst Rifle',
          'levels': [
            {
              'description': 'Scoped version of the Burst Rifle.',
              'cost': 2,
              'code': '88'
            },
            {
              'description': 'Scoped version of the Burst Rifle.',
              'cost': 4,
              'code': '89'
            }
          ],
          'rate': 6,
          'reload': 4,
          'damage': 3,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '22%'
            },
            {
              'label': 'Head Damage',
              'value': '80%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'variable',
          'name': 'Variable Rifle',
          'levels': [
            {
              'description': 'Fast and accurate rifle that downs in four shots. Press X while aiming to use the variable scope zoom!',
              'cost': 2,
              'code': '90'
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing.',
              'cost': 4,
              'code': '91'
            }
          ],
          'rate': 6,
          'reload': 4,
          'damage': 4,
          'accuracy': 8,
          'more': [
            {
              'label': 'Body Damage',
              'value': '31%'
            },
            {
              'label': 'Head Damage',
              'value': '60%'
            },
            {
              'label': 'Destroy Armour',
              'value': '2 shots'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        }
      ],
      'skill' : [
        {
          'id': 'nothing',
          'name': 'Nothing',
          'levels': [
            {
              'description': '',
              'cost': 0,
              'code': '17'
            }
          ]
        },
        {
          'id': 'paz',
          'name': 'Pistol Auto-zoom',
          'levels': [
            {
              'description': 'Zoom in while aiming a 9mm, Revolver or Enforcer.',
              'cost': 1,
              'code': '18'
            },
            {
              'description': 'Zoom in further while aiming a 9mm, Revolver or Enforcer.',
              'cost': 2,
              'code': '19'
            }
          ],
        },
        {
          'id': 'ee',
          'name': 'Explosion Expert',
          'levels': [
            {
              'description': 'Grenade Launcher and bomb radius is increased by 20%. Molotov radius is increased by 10%.',
              'cost': 1,
              'code': '20'
            },
            {
              'description': 'Grenade Launcher and bomb radius is increased by 40%. Molotov radius is increased by 20%.',
              'cost': 3,
              'code': '21'
            }
          ],
        },
        {
          'id': 'reviver',
          'name': 'Reviver',
          'levels': [
            {
              'description': 'Revive fallen teammates 30% faster and with 20 more health.',
              'cost': 1,
              'code': '22'
            },
            {
              'description': 'Revive fallen teammates 45% faster and with 25 more health and get 25% more parts from revives.',
              'cost': 3,
              'code': '23'
            },
            {
              'description': 'Revive fallen teammates 55% faster and with 30 more health and get 50% more parts from revives.',
              'cost': 4,
              'code': '24'
            }
          ],
        },
        {
          'id': 'brawler',
          'name': 'Brawler',
          'levels': [
            {
              'description': 'Craft modded weapons in half the time and gain 10 health back with each melee hit.',
              'cost': 2,
              'code': '25'
            },
            {
              'description': 'Craft modded weapons in half the time, they have an additional hit and gain 10 health back with each melee hit.',
              'cost': 3,
              'code': '26'
            }
          ],
        },
        {
          'id': 'covert',
          'name': 'Covert Training',
          'levels': [
            {
              'description': 'Start with a shiv on each spawn.',
              'cost': 2,
              'code': '27'
            },
            {
              'description': 'You won\'t show up on the enemy\'s listen mode when crouch walking and start with a shiv on each spawn.',
              'cost': 4,
              'code': '28'
            },
            {
              'description': 'You can\'t be marked, won\'t show up on the enemy\'s listen mode when crouch walking and start with a shiv on each spawn.',
              'cost': 5,
              'code': '29'
            }
          ],
        },
        {
          'id': 'sharp',
          'name': 'Sharp Ears',
          'levels': [
            {
              'description': 'The listen mode meter regenerates 15% faster and you can stay in listen mode 20% longer.',
              'cost': 1,
              'code': '30'
            },
            {
              'description': 'The listen mode meter regenerates 30% faster and you can stay in listen mode 20% longer.',
              'cost': 2,
              'code': '31'
            },
            {
              'description': 'Move quickly while in listen mode, enter listen mode more quickly, the meter regenerates 35% faster and you can stay in listen mode 30% longer.',
              'cost': 3,
              'code': '32'
            }
          ],
        },
        {
          'id': 'strategist',
          'name': 'Strategist',
          'levels': [
            {
              'description': 'Know when you\'ve been marked.',
              'cost': 1,
              'code': '33'
            },
            {
              'description': 'Know when you\'ve been marked and see nearby enemies on the radar.',
              'cost': 4,
              'code': '34'
            },
            {
              'description': 'Know when you\'ve been marked, see nearby enemies on the radar and can choose an ally to respawn on. You will be able to respawn several seconds early.',
              'cost': 5,
              'code': '35'
            }
          ],
        },
        {
          'id': 'hawk',
          'name': 'Hawk-eyed',
          'levels': [
            {
              'description': 'Marks last 3 seconds longer. Aim at an enemy and click R3 to mark.',
              'cost': 2,
              'code': '36'
            },
            {
              'description': 'Marks last 3 seconds longer and marked enemies glow. Aim at an enemy and click R3 to mark.',
              'cost': 3,
              'code': '37'
            },
            {
              'description': 'Marks last 3 seconds longer, marked enemies glow and enemies within a short distance of your target are also marked. Aim at an enemy and click R3 to mark.',
              'cost': 4,
              'code': '38'
            }
          ],
        },
        {
          'id': 'crafter',
          'name': 'Crafter',
          'levels': [
            {
              'description': 'Craft 75% faster.',
              'cost': 2,
              'code': '39'
            },
            {
              'description': 'Craft 75% faster and for every 3 items you craft you will reveive a giftbox. Equip this giftbox using UP and you can give it to an ally. They will reveive a random item.',
              'cost': 4,
              'code': '40'
            },
            {
              'description': 'Craft 75% faster and for every 2 items you craft you will reveive a giftbox. Equip this giftbox using UP and you can give it to an ally. They will reveive a random item.',
              'cost': 6,
              'code': '41'
            }
          ],
        },
        {
          'id': 'fat',
          'name': 'First Aid Training',
          'levels': [
            {
              'description': 'Use health kits 75% faster.',
              'cost': 2,
              'code': '42'
            },
            {
              'description': 'Use health kits 75% faster and can heal injured teammates. When looking at an injured teammate you can hold X to slowly heal them, 10 health every 2 seconds.',
              'cost': 4,
              'code': '43'
            },
            {
              'description': 'Use health kits 75% faster and can heal injured teammates. When looking at an injured teammate you can hold X to slowly heal them, 20 health every 2 seconds.',
              'cost': 6,
              'code': '44'
            }
          ],
        },
        {
          'id': 'ss',
          'name': 'Sharpshooter',
          'levels': [
            {
              'description': 'Scope sway reduced by 25% and damage wobble reduced by 20%.',
              'cost': 2,
              'code': '45'
            },
            {
              'description': 'Scope sway reduced by 37% and damage wobble reduced by 35%. Get 15 health back for each headshot.',
              'cost': 4,
              'code': '46'
            },
            {
              'description': 'Scope sway reduced by 50% and damage wobble reduced by 65%. Get 25 health back for each headshot.',
              'cost': 5,
              'code': '47'
            }
          ],
        },
        {
          'id': 'marathon',
          'name': 'Marathon Runner',
          'levels': [
            {
              'description': 'Sprint for 15% longer and sprint regenerates 15% faster.',
              'cost': 1,
              'code': '48'
            },
            {
              'description': 'Sprint for 30% longer and sprint regenerates 30% faster.',
              'cost': 3,
              'code': '49'
            }
          ],
        },
        {
          'id': 'collector',
          'name': 'Collector',
          'levels': [
            {
              'description': 'Increases the number of parts you earn by 10%. Note: does not apply to gifting or healing teammates.',
              'cost': 3,
              'code': '50'
            },
            {
              'description': 'Increases the number of parts you earn by 20%. Note: does not apply to gifting or healing teammates.',
              'cost': 5,
              'code': '52'
            },
          ],
        },
        {
          'id': 'executioner',
          'name': 'Executioner',
          'levels': [
            {
              'description': 'Earn double the parts for shiv kills.',
              'cost': 1,
              'code': '53'
            },
            {
              'description': 'Earn 50% more parts for special executions, get an extra shiv use every time you craft a shiv and earn double the parts for shiv kills.',
              'cost': 3,
              'code': '54'
            },
            {
              'description': 'Get 2 extra shiv uses every time you craft a shiv and earn double the parts for shiv kills, special executions and interrogations.',
              'cost': 4,
              'code': '55'
            }
          ],
        },
        {
          'id': 'scavenger',
          'name': 'Scavenger',
          'levels': [
            {
              'description': 'Enemies drop 50% more ammo',
              'cost': 2,
              'code': '56'
            },
            {
              'description': 'Automatically pick up ammo from kills and enemies drop double the ammo.',
              'cost': 4,
              'code': '57'
            },
            {
              'description': 'Enemies sometime drop a random crafting item and always drop double ammo. Automatically pick up ammo and supplies from kills.',
              'cost': 5,
              'code': '58'
            }
          ],
        },
        {
          'id': 'damage',
          'name': 'Damage Marker',
          'levels': [
            {
              'description': 'Any damage dealt marks the target who receives the damage.',
              'cost': 2,
              'code': '59'
            },
            {
              'description': 'Earn double the parts for marking enemies and any damage dealt marks the target who receives the damage.',
              'cost': 4,
              'code': '60'
            }
          ],
        },
        {
          'id': 'awareness',
          'name': 'Awareness',
          'levels': [
            {
              'description': 'Enemy nametags remain on screen for 5 seconds when you take damage.',
              'cost': 1,
              'code': '61'
            },
            {
              'description': 'Enemy nametags appear at twice the normal distance and remain on screen when you take damage for 10 seconds.',
              'cost': 3,
              'code': '62'
            }
          ],
        },
        {
          'id': 'fortitude',
          'name': 'Fortitude',
          'levels': [
            {
              'description': 'Bleed out time is increased by 25%, slightly increased downed crawling speed and earn 25 parts after healing more than half health.',
              'cost': 1,
              'code': '63'
            },
            {
              'description': 'Start with an extra health pack, earn 50 parts for healing more than half health and carry an extra health pack. Bleed out time is increased by 50% and downed health is increased along with much faster downed crawling speed.',
              'cost': 3,
              'code': '64'
            }
          ],
        },
        {
          'id': 'gunslinger',
          'name': 'Gunslinger',
          'levels': [
            {
              'description': 'Pistol ammo is increased by 50% at spawn (this does not stack with weapon upgrades).',
              'cost': 2,
              'code': '66'
            },
            {
              'description': 'Pistol ammo is doubled at spawn (this does not stack with weapon upgrades).',
              'cost': 4,
              'code': '67'
            }
          ],
        },
        {
          'id': 'bomb',
          'name': 'Bomb Expert',
          'levels': [
            {
              'description': 'Smoke bombs have a very short fuse.',
              'cost': 2,
              'code': '69'
            },
            {
              'description': 'Placed bombs, thrown smoke bombs and thrown bombs have an even shorter fuse.',
              'cost': 3,
              'code': '70'
            },
            {
              'description': 'You are immune to the stun of your own smoke bomb. Placed bombs, thrown smoke bombs and thrown bombs have a very short fuse.',
              'cost': 5,
              'code': '71'
            },
          ],
        },
        {
          'id': 'agility',
          'name': 'Agility',
          'levels': [
            {
              'description': 'Crouch walk very quickly.',
              'cost': 2,
              'code': '72'
            },
            {
              'description': 'You are nearly impossible to hear when moving. Walk, climb and crouch walk very quickly.',
              'cost': 4,
              'code': '73'
            }
          ],
        }
      ],
      'purchase': [
        {
          'id': 'nothing',
          'name': 'No Purchasable',
          'levels': [
            {
              'description': '',
              'cost': 0,
              'code': '75'
            }
          ]
        },
        {
          'id': 'double',
          'name': 'Double Barrel',
          'levels': [
            {
              'description': 'A bargain priced shotgun that downs enemies with two shots at close range.',
              'cost': 1,
              'code': '76'
            }
          ],
          'rate': 4,
          'reload': 4,
          'damage': 6,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '60%'
            },
            {
              'label': 'Head Damage',
              'value': '60%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            }
          ]
        },
        {
          'id': 'diablo',
          'name': 'El Diablo',
          'levels': [
            {
              'description': 'Come with a scope. Press X while aiming to zoom in.',
              'cost': 3,
              'code': '77'
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 6,
          'accuracy': 8,
          'more': [
            {
              'label': 'Body Damage',
              'value': '60%'
            },
            {
              'label': 'Head Damage',
              'value': '100%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            }
          ]
        },
        {
          'id': 'assult',
          'name': 'Assault Rifle',
          'levels': [
            {
              'description': 'A military grade rifle with a high rate of fire.',
              'cost': 3,
              'code': '78'
            }
          ],
          'rate': 8,
          'reload': 4,
          'damage': 3,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '20%'
            },
            {
              'label': 'Head Damage',
              'value': '60%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'shotgun',
          'name': 'Shotgun',
          'levels': [
            {
              'description': 'A close range bruiser.',
              'cost': 3,
              'code': '79'
            }
          ],
          'rate': 5,
          'reload': 3,
          'damage': 8,
          'accuracy': 5,
          'more': [
            {
              'label': 'Body Damage',
              'value': '100%'
            },
            {
              'label': 'Head Damage',
              'value': '100%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            },
            {
              'label': '',
              'value': '* The Shorty, Shotgun, and Launcher are subject to "effective distance" and have damage estimates.'
            }
          ]
        },
        {
          'id': 'sniper',
          'name': 'Military Sniper',
          'levels': [
            {
              'description': 'A semi-automatic sniper rifle. Press X when aiming to enter the second level of zoom.',
              'cost': 3,
              'code': '80'
            }
          ],
          'rate': 6,
          'reload': 3,
          'damage': 10,
          'accuracy': 9,
          'more': [
            {
              'label': 'Body Damage',
              'value': '70%'
            },
            {
              'label': 'Head Damage',
              'value': '100%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shot'
            },
            {
              'label': 'Execution',
              'value': '1 shot'
            }
          ]
        },
        {
          'id': 'flamethrower',
          'name': 'Flamethrower',
          'levels': [
            {
              'description': 'Burn down your enemies at close range.',
              'cost': 2,
              'code': '81'
            }
          ],
          'rate': 9,
          'reload': 3,
          'damage': 2,
          'accuracy': 4
        },
        {
          'id': 'machete',
          'name': 'Machete',
          'levels': [
            {
              'description': 'A fast and dangerous melee weapon.',
              'cost': 3,
              'code': '82'
            }
          ],
          'more': [
            {
              'label': 'Body Damage',
              'value': '34%'
            },
            {
              'label': 'Execution',
              'value': '2 shots'
            }
          ]
        },
        {
          'id': 'spectre',
          'name': 'Spectre',
          'levels': [
            {
              'description': 'A silenced fully automatic weapon that kills from the shadows.',
              'cost': 3,
              'code': '83'
            }
          ],
          'rate': 10,
          'reload': 6,
          'damage': 1,
          'accuracy': 4,
          'more': [
            {
              'label': 'Body Damage',
              'value': '18%'
            },
            {
              'label': 'Head Damage',
              'value': '68%'
            },
            {
              'label': 'Destroy Armour',
              'value': '3 shots'
            },
            {
              'label': 'Execution',
              'value': '3 shots'
            }
          ]
        },
        {
          'id': 'launcher',
          'name': 'Launcher',
          'levels': [
            {
              'description': 'Area of effect weapon that downs an enemy in 2 shots.',
              'cost': 4,
              'code': '84'
            }
          ],
          'rate': 1,
          'reload': 1,
          'damage': 5,
          'accuracy': 7,
          'more': [
            {
              'label': 'Body Damage',
              'value': '358%'
            },
            {
              'label': 'Head Damage',
              'value': '58%'
            },
            {
              'label': 'Destroy Armour',
              'value': '1 shots'
            },
            {
              'label': 'Execution',
              'value': '1 shots'
            },
            {
              'label': '',
              'value': '* The Shorty, Shotgun, and Launcher are subject to "effective distance" and have damage estimates.'
            }
          ]
        }
      ]
    }
  });
