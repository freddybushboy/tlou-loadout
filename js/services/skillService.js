'use strict';

angular.module('loadoutApp')
  .service('SkillService', function () {
    this.skills = {
      'small': [
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
          'id': 'revolver',
          'name': 'Revolver',
          'levels': [
            {
              'description': '',
              'cost': 0
            }
          ],
          'rate': 5,
          'reload': 4,
          'damage': 5,
          'accuracy': 7
        }
      ],
      'large': [
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
          'id': 'semi',
          'name': 'Semi-Auto Rifle',
          'levels': [
            {
              'description': '',
              'cost': 2
            },
            {
              'description': 'Don\'t shot up on the enemy minimap when firing.',
              'cost': 4
            }
          ],
          'rate': 5,
          'reload': 4,
          'damage': 5,
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
          'id': 'covert',
          'name': 'Covert Training',
          'levels': [
            {
              'description': 'Start with a shiv when you spawn.',
              'cost': 2
            },
            {
              'description': 'You won\'t show up in the enemy\'s listen mode when crouch walking, and start with a shiv on each spawn.',
              'cost': 4
            },
            {
              'description': 'You can\'t be marked, won\'t show up in the enemy\'s listen mode when crouch walking, and start with a shiv when you spawn.',
              'cost': 5
            }
          ],
        }
      ],
      'purchase': [
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
          'id': 'flamethrower',
          'name': 'Flamethrower',
          'levels': [
            {
              'description': '',
              'cost': 2
            }
          ],
          'rate': 9,
          'reload': 3,
          'damage': 2,
          'accuracy': 4
        }
      ]
    }
  });
