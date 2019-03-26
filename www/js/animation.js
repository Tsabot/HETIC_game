function createAnimation(theGame){
//  Our player animations, turning, walking left and walking right.
    theGame.anims.create({
        key: 'open',
        frames: [ { key: 'chest', frame: 1 } ],
        frameRate: 10
    });
    theGame.anims.create({
        key: 'still_0',
        frames: [ { key: 'hero_0', frame: 0 } ],
        frameRate: 20
    });
    theGame.anims.create({
        key: 'jump_0',
        frames: [ { key: 'hero_0', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });
    theGame.anims.create({
        key: 'attack_0',
        frames: [ { key: 'hero_0', frame: 2 } ],
        frameRate: 8
    });
    theGame.anims.create({
        key: 'moving_0',
        frames: [ { key: 'hero_0', frame: 3 } ]
    });
    theGame.anims.create({
        key: 'still_1',
        frames: [ { key: 'hero_1', frame: 0 } ],
        frameRate: 20
    });
    theGame.anims.create({
        key: 'jump_1',
        frames: [ { key: 'hero_1', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });
    theGame.anims.create({
        key: 'attack_1',
        frames: [ { key: 'hero_1', frame: 2 } ],
        frameRate: 8
    });
    theGame.anims.create({
        key: 'moving_1',
        frames: [ { key: 'hero_1', frame: 3 } ]
    });
    theGame.anims.create({
        key: 'still_2',
        frames: [ { key: 'hero_2', frame: 0 } ],
        frameRate: 20
    });
    theGame.anims.create({
        key: 'jump_2',
        frames: [ { key: 'hero_2', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });
    theGame.anims.create({
        key: 'attack_2',
        frames: [ { key: 'hero_2', frame: 2 } ],
        frameRate: 8
    });
    theGame.anims.create({
        key: 'moving_2',
        frames: [ { key: 'hero_2', frame: 3 } ]
    });
    theGame.anims.create({
        key: 'still_3',
        frames: [ { key: 'hero_3', frame: 0 } ],
        frameRate: 20
    });
    theGame.anims.create({
        key: 'jump_3',
        frames: [ { key: 'hero_3', frame: 1 } ],
        frameRate: 10,
        repeat: -1
    });
    theGame.anims.create({
        key: 'attack_3',
        frames: [ { key: 'hero_3', frame: 2 } ],
        frameRate: 8
    });
    theGame.anims.create({
        key: 'moving_3',
        frames: [ { key: 'hero_3', frame: 3 } ]
    });
    theGame.anims.create({
        key: 'attack_m_2',
        frames: [ { key: 'monster_2', frame: 1 } ]
    });
    theGame.anims.create({
        key: 'still_m_2',
        frames: [ { key: 'monster_2', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'attack_m_3',
        frames: [ { key: 'monster_3', frame: 2 } ]
    });
    theGame.anims.create({
        key: 'still_m_3',
        frames: [ { key: 'monster_3', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'move_m_3',
        frames: [ { key: 'monster_3', frame: 1 } ]
    });
    theGame.anims.create({
        key: 'attack_m_4',
        frames: [ { key: 'monster_4', frame: 1 } ]
    });
    theGame.anims.create({
        key: 'still_m_4',
        frames: [ { key: 'monster_4', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'w_sword_basic',
        frames: [ { key: 'w_sword', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'w_sword_glow',
        frames: [ { key: 'w_sword', frame: 1 } ]
    });
    theGame.anims.create({
        key: 'w_spear_basic',
        frames: [ { key: 'w_spear', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'w_spear_glow',
        frames: [ { key: 'w_spear', frame: 1 } ]
    });
    theGame.anims.create({
        key: 'w_hammer_basic',
        frames: [ { key: 'w_hammer', frame: 0 } ]
    });
    theGame.anims.create({
        key: 'w_hammer_glow',
        frames: [ { key: 'w_hammer', frame: 1 } ]
    });
    
}
function createDamageText(monster, player){
    let textDisplay;
    if(player.x > monster.x){
        textDisplay = theGame.add.text(monster.x + 40, monster.y - 50, player.damage, { color: '#FFFFFF' });
    }
    else textDisplay = theGame.add.text(monster.x - 40, monster.y - 50, player.damage, { color: '#FFFFFF' });
    setTimeout(()=>{
        textDisplay.destroy();
    },450);
}
function animateHp(maxHealth, newHealth){
    newProcent = newHealth/maxHealth;
    healthBar.width = 300 * newProcent;
    if(healthBar.width < 0){
        healthBar.width = 0;
    }
    graphics.clear();
    graphics.fillRectShape(healthBar);
}