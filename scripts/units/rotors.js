const T1arocket = extend(UnitType, "T1arocket", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"mbt-T1arocket-rotor",
			unit.x + Angles.trnsx(unit.rotation - 180, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 180, 0, 0),
			Time.time * -20);
	}
});
const T2arocket = extend(UnitType, "T2arocket", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"mbt-T2arocket-rotor",
			unit.x + Angles.trnsx(unit.rotation - 180, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 180, 0, 0),
			Time.time * -20);
	}
});
const T3arocket = extend(UnitType, "T3arocket", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"mbt-T3arocket-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});
const T4arocket = extend(UnitType, "T4arocket", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"mbt-T4arocket-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});

T1arocket.constructor = () => extend(UnitEntity, {});
T2arocket.constructor = () => extend(UnitEntity, {});
T3arocket.constructor = () => extend(UnitEntity, {});
T4arocket.constructor = () => extend(UnitEntity, {});