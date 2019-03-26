function hitPlayer(player, monster){
    takeDmg(player);
    player.health -= monster.damage;
    animateHp(player.maxHealth, player.health);
    if(player.health <= 0){
        gameOver = true;
        return;
    }
}
function hitMonster(player, monster){
    monster.health += -player.damage;
    knockBackFoes(player, monster);
    createDamageText(monster, player)
    if(monster.health <= 0){
        monsterGroup.splice(monster.id, 1);
        resetGroupId(monsterGroup);
        monster.destroy();
        enemyDrop(monster);
        monster.isDead = true;
        curentScore += 1;
    }
}
function knockBackFoes(attacker ,defender){
    let power = attacker.knockBack;
    let previousSpeed = defender.body.velocity.x;
    if(previousSpeed > 0){
        power = -power;
    }
    defender.body.velocity.x = power;
    defender.body.velocity.y = -power/2;
    defender.isKnocked = true;
    let knockBackInterval = setInterval(()=>{
        if(previousSpeed < 0 && defender.isDead == false && power > 0){
            power += -5;
            defender.body.velocity.x += -5;
        }else if(previousSpeed > 0 && defender.isDead == false && power < 0){
            power += 5;
            defender.body.velocity.x += 5;
        }else{
            clearInterval(knockBackInterval);
            if(defender.isDead == false){
                defender.isKnocked = false;
                defender.body.velocity.x = previousSpeed;
            }
        } 
    }, 5);
}
function takeDmg(player){
    let damageInterval = setInterval(() => {
        if(player.visible == true){
            player.visible = false;
        }
        else player.visible = true;
        
    }, 150);
    setTimeout(()=>{
        clearInterval(damageInterval);
        player.visible = true;
    }, 600);
}
function enemyDrop(monster){
    let randomInt = getRandomInt(monster.dropRate);
    if(randomInt == 1){
        createHealing(monster.x, monster.y);
    }
}
function getHeal(heal, player){
    if(player.health != player.maxHealth){
        heal.isConsumed = true;
        healGroup.splice(heal.id, 1);
        resetGroupId(healGroup);
        heal.destroy();
        player.health = player.health + 0.15 * player.maxHealth;
        if(player.health > player.maxHealth){
            player.health = player.maxHealth;
        }
        animateHp(player.maxHealth, player.health);
    }
}
function resetGroupId(group){
    for(let i = 0; group.length > i; i++){
        let individual = group[i];
        individual.id = i;
    }
}