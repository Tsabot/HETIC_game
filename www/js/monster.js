function createMonster(x, y, type, scale, facingRight){
    if(!facingRight){
        facingRight = false;
    }
    if(!type){
        type = 0;
    }
    if(type == 0){ //starting Rabbit
        health = 5;
        damage = 0;
        dropRate = 1;
        canAggro = false;
        moveSpeed = 50;
        imgSuffix = "_0";
    }else if(type == 1){ //Agressiv Rabbit
        health = 25;
        damage = 5;
        dropRate = 12;
        moveSpeed = 140;
        imgSuffix = "_1";
    }else if(type == 2){ //fast Cac
        health = 45;
        damage = 10;
        dropRate = 20;
        moveSpeed = 230;
        imgSuffix = "_2";
    }else if(type == 3){ //Tonk dash
        health = 75;
        damage = 15;
        dropRate = 10;
        moveSpeed = 150;
        imgSuffix = "_3";
    }else if(type == 4){ //Range
        health = 20;
        damage = 8;
        dropRate = 14;
        moveSpeed = 190;
        imgSuffix = "_4";
    }else if(type == 5){ //Boss
        health = 450;
        damage = 15;
        dropRate = 1;
        moveSpeed = 200;
        imgSuffix = "_5";
    }
    if(canAggro =! false){
        canAggro = true;
    }
    let monster = theGame.physics.add.sprite(x, y, "monster" + imgSuffix).setScale(scale);
    monster.initialX = x;
    monster.imgSuffix = imgSuffix;
    monster.flipX = facingRight;
    monster.health = health;
    monster.type = type;
    monster.damage = damage;
    monster.isDead = false;
    monster.moveSpeed = moveSpeed;
    monster.canAggro = canAggro;
    monster.aggro = false;
    monster.isKnocked = false;
    monster.isStun = false;
    theGame.physics.add.collider(platforms, monster);
    monsterGroup.push(monster);
}