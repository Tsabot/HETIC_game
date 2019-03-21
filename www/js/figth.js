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
        monster.destroy();
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
    defender.isKnocked = true;
    knockBackInterval = setInterval(()=>{
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
    var damageInterval = setInterval(() => {
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