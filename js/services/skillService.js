'use strict';

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
              'cost': 0
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 5,
          'accuracy': 6
        },
        {
          'id': '9mm',
          'name': '9mm Pistol',
          'levels': [
            {
              'description': 'A light handgun with a high rate of fire and ample ammunition.',
              'cost': 0
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 2
            }
          ],
          'rate': 7,
          'reload': 6,
          'damage': 2,
          'accuracy': 4
        },
        {
          'id': 'shorty',
          'name': 'Shorty',
          'levels': [
            {
              'description': 'A wide spread and downs enemies is teo shots up close.',
              'cost': 1
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 3
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 6,
          'accuracy': 5
        },
        {
          'id': 'enforcer',
          'name': 'Enforcer',
          'levels': [
            {
              'description': 'A versatile pistol with great range and accuracy.',
              'cost': 1
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 3
            }
          ],
          'rate': 6,
          'reload': 6,
          'damage': 4,
          'accuracy': 7
        }
      ],
      'large': [
        {
          'id': 'nothing',
          'name': 'No Large Firearm',
          'levels': [
            {
              'description': '',
              'cost': 0
            }
          ]
        },
        {
          'id': 'semi',
          'name': 'Semi-Auto Rifle',
          'levels': [
            {
              'description': 'A reliable mid-range killer.',
              'cost': 2
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 4
            }
          ],
          'rate': 5,
          'reload': 4,
          'damage': 5,
          'accuracy': 7
        },
        {
          'id': 'full',
          'name': 'Full-Auto Rifle',
          'levels': [
            {
              'description': 'A fully automatic all purpose rifle.',
              'cost': 2
            }
          ],
          'rate': 4,
          'reload': 4,
          'damage': 2,
          'accuracy': 5
        },
        {
          'id': 'burst',
          'name': 'Burst Rifle',
          'levels': [
            {
              'description': 'A short range monster with three shots per burst.',
              'cost': 2
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 4
            }
          ],
          'rate': 6,
          'reload': 4,
          'damage': 3,
          'accuracy': 4
        },
        {
          'id': 'hunting',
          'name': 'Hunting Rifle',
          'levels': [
            {
              'description': 'Two shots to down and pinpoint accurate at range.',
              'cost': 2
            },
            {
              'description': 'Don\'t show up on the enemy minimap when firing..',
              'cost': 4
            }
          ],
          'rate': 2,
          'reload': 2,
          'damage': 8,
          'accuracy': 9
        },
        {
          'id': 'bow',
          'name': 'Bow',
          'levels': [
            {
              'description': 'A silent killer. You won\'t show up on the enemy minimap when firing.',
              'cost': 3
            },
          ],
          'rate': 3,
          'reload': 4,
          'damage': 6,
          'accuracy': 7
        }
      ],
      'skill' : [
        {
          'id': 'nothing',
          'name': 'Nothing',
          'levels': [
            {
              'description': '',
              'cost': 0
            }
          ]
        },
        {
          'id': 'paz',
          'name': 'Pistol Auto-zoom',
          'levels': [
            {
              'description': 'Zoom in while aiming a 9mm, Revolver or Enforcer.',
              'cost': 1
            },
            {
              'description': 'Zoom in further while aiming a 9mm, Revolver or Enforcer.',
              'cost': 2
            }
          ],
        },
        {
          'id': 'ee',
          'name': 'Explosion Expert',
          'levels': [
            {
              'description': 'Grenade Launcher and bomb radius is increased by 20%. Molotov radius is increased by 10%.',
              'cost': 1
            },
            {
              'description': 'Grenade Launcher and bomb radius is increased by 40%. Molotov radius is increased by 20%.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'reviver',
          'name': 'Reviver',
          'levels': [
            {
              'description': 'Revive fallen teammates 30% faster and with 20 more health.',
              'cost': 1
            },
            {
              'description': 'Revive fallen teammates 45% faster and with 25 more health and get 25% more parts from revives.',
              'cost': 3
            },
            {
              'description': 'Revive fallen teammates 55% faster and with 30 more health and get 50% more parts from revives.',
              'cost': 4
            }
          ],
        },
        {
          'id': 'brawler',
          'name': 'Brawler',
          'levels': [
            {
              'description': 'Craft modded weapons in half the time and gain 10 health back with each melee hit.',
              'cost': 2
            },
            {
              'description': 'Craft modded weapons in half the time, they have an additional hit and gain 10 health back with each melee hit.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'covert',
          'name': 'Covert Training',
          'levels': [
            {
              'description': 'Start with a shiv on each spawn.',
              'cost': 2
            },
            {
              'description': 'You won\'t show up on the enemy\'s minimap when crouch walking and start with a shiv on each spawn.',
              'cost': 4
            },
            {
              'description': 'You can\'t be marked, won\'t show up on the enemy\'s minimap when crouch walking and start with a shiv on each spawn.',
              'cost': 5
            }
          ],
        },
        {
          'id': 'sharp',
          'name': 'Sharp Ears',
          'levels': [
            {
              'description': 'The listen mode meter regenerates 15% faster and you can stay in listen mode 20% longer.',
              'cost': 1
            },
            {
              'description': 'The listen mode meter regenerates 30% faster and you can stay in listen mode 20% longer.',
              'cost': 2
            },
            {
              'description': 'Move quickly while in listen mode, enter listen mode more quickly, the meter regenerates 35% faster and you can stay in listen mode 30% longer.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'strategist',
          'name': 'Strategist',
          'levels': [
            {
              'description': 'Know when you\'ve been marked.',
              'cost': 1
            },
            {
              'description': 'Know when you\'ve been marked and see nearby enemies on the radar.',
              'cost': 4
            },
            {
              'description': 'Know when you\'ve been marked, see nearby enemies on the radar and can choose an ally to respawn on. You will be able to respawn several seconds early.',
              'cost': 5
            }
          ],
        },
        {
          'id': 'hawk',
          'name': 'Hawk-eyed',
          'levels': [
            {
              'description': 'Marks last 3 seconds longer. Aim at an enemy and click R3 to mark.',
              'cost': 2
            },
            {
              'description': 'Marks last 3 seconds longer and marked enemies glow. Aim at an enemy and click R3 to mark.',
              'cost': 3
            },
            {
              'description': 'Marks last 3 seconds longer, marked enemies glow and enemies within a short distance of your target are also marked. Aim at an enemy and click R3 to mark.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'crafter',
          'name': 'Crafter',
          'levels': [
            {
              'description': 'Craft 75% faster.',
              'cost': 2
            },
            {
              'description': 'Craft 75% faster and for every 3 items you craft you will reveive a giftbox. Equip this giftbox using UP and you can give it to an ally. They will reveive a random item.',
              'cost': 4
            },
            {
              'description': 'Craft 75% faster and for every 2 items you craft you will reveive a giftbox. Equip this giftbox using UP and you can give it to an ally. They will reveive a random item.',
              'cost': 6
            }
          ],
        },
        {
          'id': 'fat',
          'name': 'First Aid Training',
          'levels': [
            {
              'description': 'Use health kits 75% faster.',
              'cost': 2
            },
            {
              'description': 'Use health kits 75% faster and can heal injured teammates. WHen looking at an injured teammate you can hold X to slowly heal them, 10 health every 2 seconds.',
              'cost': 4
            },
            {
              'description': 'Use health kits 75% faster and can heal injured teammates. WHen looking at an injured teammate you can hold X to slowly heal them, 20 health every 2 seconds.',
              'cost': 6
            }
          ],
        },
        {
          'id': 'ss',
          'name': 'Sharpshooter',
          'levels': [
            {
              'description': 'Scope sway reduced by 25% and damage wobble reduced by 20%.',
              'cost': 2
            },
            {
              'description': 'Scope sway reduced by 37% and damage wobble reduced by 35%. Get 15 health back for each headshot.',
              'cost': 4
            },
            {
              'description': 'Scope sway reduced by 50% and damage wobble reduced by 65%. Get 25 health back for each headshot.',
              'cost': 5
            }
          ],
        },
        {
          'id': 'marathon',
          'name': 'Marathon Runner',
          'levels': [
            {
              'description': 'Sprint for 15% longer and sprint regenerates 15% faster.',
              'cost': 1
            },
            {
              'description': 'Sprint for 30% longer and sprint regenerates 30% faster.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'collector',
          'name': 'Collector',
          'levels': [
            {
              'description': 'Increases the number of parts you earn by 10%. Note: does not apply to gifting or healing teammates.',
              'cost': 3
            },
            {
              'description': 'Increases the number of parts you earn by 20%. Note: does not apply to gifting or healing teammates.',
              'cost': 5
            },
          ],
        },
        {
          'id': 'executioner',
          'name': 'Executioner',
          'levels': [
            {
              'description': 'Earn double the parts for shiv kills.',
              'cost': 1
            },
            {
              'description': 'Earn 50% more parts for special executions, get an extra shiv use every time you craft a shiv and earn double the parts for shiv kills.',
              'cost': 3
            },
            {
              'description': 'Get 2 extra shiv uses every time you craft a shiv and earn double the parts for shiv kills, special executions and interrogations.',
              'cost': 4
            }
          ],
        },
        {
          'id': 'scavenger',
          'name': 'Scavenger',
          'levels': [
            {
              'description': 'Enemies drop 50% more ammo',
              'cost': 3
            },
            {
              'description': 'Automatically pick up ammo from kills and enemies drop double the ammo.',
              'cost': 4
            },
            {
              'description': 'Enemies sometime drop a random crafting item and always drop double ammo. Automatically pick up ammo and supplies from kills.',
              'cost': 5
            }
          ],
        },
        {
          'id': 'damage',
          'name': 'Damage Marker',
          'levels': [
            {
              'description': 'Any damage dealt marks the target who receives the damage.',
              'cost': 3
            },
            {
              'description': 'Earn double the parts for marking enemies and any damage dealt marks the target who receives the damage.',
              'cost': 4
            }
          ],
        },
        {
          'id': 'awareness',
          'name': 'Awareness',
          'levels': [
            {
              'description': 'Enemy nametags remain on screen for 5 seconds when you take damage.',
              'cost': 1
            },
            {
              'description': 'Enemy nametags appear at twice the normal distance and remain on screen when you take damage for 10 seconds.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'fortitude',
          'name': 'Fortitude',
          'levels': [
            {
              'description': 'Bleed out time is increased by 25% and slightly increase downed crawling speed.',
              'cost': 1
            },
            {
              'description': 'Earn 25 parts after healing more than half health and carry an extra health pack. Downed health is increased and bleed out time is increased by 35% along with even faster downed crawling speed.',
              'cost': 2
            },
            {
              'description': 'Start with an extra health pack, earn 50 parts for healing more than half health and carry an extra health pack. Bleed out time is increased by 50% and downed health is increased along with much faster downed crawling speed.',
              'cost': 3
            }
          ],
        },
        {
          'id': 'gunslinger',
          'name': 'Gunslinger',
          'levels': [
            {
              'description': 'Pistol ammo is increased by 30% at spawn (this does not stack with weapon upgrades).',
              'cost': 2
            },
            {
              'description': 'Pistol ammo is increased by 70% at spawn (this does not stack with weapon upgrades).',
              'cost': 3
            },
            {
              'description': 'Pistol ammo is doubled at spawn (this does not stack with weapon upgrades).',
              'cost': 4
            }
          ],
        },
        {
          'id': 'bomb',
          'name': 'Bomb Expert',
          'levels': [
            {
              'description': 'Smoke bombs and bombs have a slightly shorter fuse when thrown.',
              'cost': 2
            },
            {
              'description': 'Placed bombs, thrown smoke bombs and thrown bombs have an even shorter fuse.',
              'cost': 3
            },
            {
              'description': 'You are immune to the stun of your own smoke bomb. Placed bombs, thrown smoke bombs and thrown bombs have a very short fuse.',
              'cost': 5
            },
          ],
        },
        {
          'id': 'agility',
          'name': 'Agility',
          'levels': [
            {
              'description': 'Crouch walk and climb slighty faster.',
              'cost': 2
            },
            {
              'description': 'Walk, climb and crouch walk even faster.',
              'cost': 3
            },
            {
              'description': 'You are nearly impossible to hear when moving. Walk, climb and crouch walk very quickly.',
              'cost': 4
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
              'cost': 0
            }
          ]
        },
        {
          'id': 'double',
          'name': 'Double Barrel',
          'levels': [
            {
              'description': 'A bargain priced shotgun that downs enemies with two shots at close range.',
              'cost': 1
            }
          ],
          'rate': 4,
          'reload': 4,
          'damage': 6,
          'accuracy': 5
        },
        {
          'id': 'diablo',
          'name': 'El Diablo',
          'levels': [
            {
              'description': 'Come with a scope. Press X while aiming to zoom in.',
              'cost': 3
            }
          ],
          'rate': 4,
          'reload': 3,
          'damage': 6,
          'accuracy': 8
        },
        {
          'id': 'assult',
          'name': 'Assult Rifle',
          'levels': [
            {
              'description': 'A military grade rifle with a high rate of fire.',
              'cost': 3
            }
          ],
          'rate': 8,
          'reload': 4,
          'damage': 3,
          'accuracy': 5
        },
        {
          'id': 'shotgun',
          'name': 'Shotgun',
          'levels': [
            {
              'description': 'A close range bruiser.',
              'cost': 3
            }
          ],
          'rate': 5,
          'reload': 3,
          'damage': 8,
          'accuracy': 5
        },
        {
          'id': 'sniper',
          'name': 'Military Sniper',
          'levels': [
            {
              'description': 'A semi-automatic sniper rifle. Press X when aiming to enter the second level of zoom.',
              'cost': 3
            }
          ],
          'rate': 6,
          'reload': 3,
          'damage': 10,
          'accuracy': 9
        },
        {
          'id': 'flamethrower',
          'name': 'Flamethrower',
          'levels': [
            {
              'description': 'Burn down your enemies at close range.',
              'cost': 2
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
              'cost': 3
            }
          ]
        },
        {
          'id': 'spectre',
          'name': 'Spectre',
          'levels': [
            {
              'description': 'A silenced fully automatic weapon that kills from the shadows.',
              'cost': 3
            }
          ],
          'rate': 10,
          'reload': 6,
          'damage': 1,
          'accuracy': 4
        },
        {
          'id': 'launcher',
          'name': 'Launcher',
          'levels': [
            {
              'description': 'Area of effect weapon that downs an enemy in 2 shots.',
              'cost': 4
            }
          ],
          'rate': 1,
          'reload': 1,
          'damage': 5,
          'accuracy': 7
        }
      ]
    }
  });
