const medGndT1bullet = extend(BulletType, {
});
medGndT1bullet.damage = -50;
medGndT1bullet.scaleVelocity = true;
medGndT1bullet.lifetime = 1;
medGndT1bullet.collides = false;
medGndT1bullet.keepVelocity = false;
medGndT1bullet.backMove = false;
medGndT1bullet.speed = 74;
medGndT1bullet.medGndT1bulletTrail = Fx.none;
medGndT1bullet.despawnEffect = Fx.none;
medGndT1bullet.tileDamageMultiplier = 0.6;
medGndT1bullet.smokeEffect = Fx.none;
medGndT1bullet.shootEffect = Fx.none;
medGndT1bullet.hitEffect = Fx.none;

const medGndT1weapon = extend(Weapon, {
	name: "testtest",
	reload: 1,
	cooldownTime: 18,
	shots: 1,
	inaccuracy: 0,
	recoil: 0,
	x: 0,
	y: 0,
	shootY: 4,
	shootCone: 2,
	rotateSpeed: 360,
	rotate: true,
	continuous: true,
	mirror: false,
	soundPitchMin: 0.67,
	soundPitchMax: 1.83,
	top: false,
	bullet: medGndT1bullet
});


const T5Shotgun = extend(UnitType, "T5Shotgun", {
	drawWeapons(unit) {
        Draw.color(Color.white, Color.valueOf("fbe578"), 1);
        //Lines.stroke(1);
        Fill.circle(unit.x + Angles.trnsx(unit.rotation - 90, 16, -10), unit.y + Angles.trnsy(unit.rotation - 90, 16, -10), 3.0+(Time.time/10.0)%1.0);
		//Draw.rect(
			//"heavy-armaments-t3A_copter-rotor",
			//unit.x + Angles.trnsx(unit.rotation - 90, 16, -10),
			//unit.y + Angles.trnsy(unit.rotation - 90, 16, -10),
			//Time.time * -15);
		// Draw.rect(
		// 	"heavy-armaments-t3A_copter-rotor-outline",
		// 	unit.x + Angles.trnsx(unit.rotation - 90, -16, -10),
		// 	unit.y + Angles.trnsy(unit.rotation - 90, -16, -10),
		// 	Time.time * -15);
        this.super$drawWeapons(unit);
	}
});  

T5Shotgun.constructor = () => extend(UnitEntity, {});
T5Shotgun.weapons.add(medGndT1weapon);
