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

T1arocket.constructor = () => extend(UnitEntity, {});