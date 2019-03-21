function dropWeapon(player, weapon){
    if(player.idWeaponEquiped >= 0){
        oldWeapon = player.idWeaponEquiped;
        oldWeapon = weaponGroup[oldWeapon];
        oldWeapon.visible = true;
        oldWeapon.isEquiped = false;
        oldWeapon.x = player.x;
        oldWeapon.y = player.y;
    }
    player.range = weapon.range;
    player.damage = weapon.damage;
    player.knockBack = weapon.knockBack;
    player.weaponState = weapon.weaponState;
    player.attackSpeed = weapon.attackSpeed;
    player.idWeaponEquiped = weapon.id;
    weapon.isEquiped = true;
    
}
function createWeapon(x, y, weaponId){
    let chosenOne;
    if(weaponId == 1){
        range = 60;
        damage = 20;
        attackSpeed = 600;
        knockBack = 100;
        chosenOne = "w_sword"; // 33,3
        weaponState = "_1" 
        scale = 0.6;
    }else if(weaponId == 2){
        range = 100;
        damage = 25;
        attackSpeed = 850;
        knockBack = 80;
        chosenOne = "w_spear"; //29,4
        weaponState = "_2" 
        scale = 1;
    }else {
        range = 80;
        damage = 35;
        attackSpeed = 1100;
        knockBack = 120;
        chosenOne = "w_hammer"; //31,8
        weaponState = "_3" 
        scale = 1;
    }
    let weapon = theGame.physics.add.sprite(x, y, chosenOne).setScale(scale);
    weapon.name = chosenOne;
    weapon.range = range;
    weapon.damage = damage;
    weapon.isEquiped = false;
    weapon.attackSpeed = attackSpeed;
    weapon.weaponState = weaponState;
    weapon.knockBack = knockBack;
    weapon.id = weaponGroup.length;
    theGame.physics.add.collider(platforms, weapon);
    weaponGroup.push(weapon);
}