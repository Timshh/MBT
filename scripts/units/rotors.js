const T1arocket = extend(UnitType, "T1arocket", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"T1arocket-vint",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
});

t3A_copter.constructor = () => extend(UnitEntity, {});