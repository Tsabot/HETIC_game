function createMonster(x, y, scale, facingRight, health, damage){
    let monster = theGame.physics.add.sprite(x, y, "monster").setScale(scale);
    monster.initialX = x;
    if(!facingRight){
        facingRight = false;
    }
    monster.flipX = facingRight;
    if(!health){
        health = 35;
    }
    monster.health = health;
    if(!damage){
        damage = 10;
    }
    monster.damage = damage;
    monster.isDead = false;
    monster.aggro = false;
    monster.isKnocked = false;
    monster.isStun = false;
    theGame.physics.add.collider(platforms, monster);
    monsterGroup.push(monster);
}