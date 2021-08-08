const cryoPackager = extendContent(GenericCrafter, "cryoPackager", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
		this.regions[3] = Core.atlas.find(this.name + "-top");
	}
});
cryoPackager.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, cryoPackager, {
	draw() {
		Draw.rect(cryoPackager.regions[1], this.x, this.y);
		var liquid = cryoPackager.consumes.get(ConsumeType.liquid).liquid;
		Drawf.liquid(cryoPackager.regions[2], this.x, this.y, this.liquids.get(liquid) / cryoPackager.liquidCapacity, Liquids.cryofluid.color);
		Draw.rect(cryoPackager.regions[3], this.x, this.y);
	}
});

const waterPackager = extendContent(GenericCrafter, "waterPackager", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
		this.regions[3] = Core.atlas.find(this.name + "-top");
	}
});
waterPackager.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, waterPackager, {
	draw() {
		Draw.rect(waterPackager.regions[1], this.x, this.y);
		var liquid = waterPackager.consumes.get(ConsumeType.liquid).liquid;
		Drawf.liquid(waterPackager.regions[2], this.x, this.y, this.liquids.get(liquid) / waterPackager.liquidCapacity, Liquids.water.color);
		Draw.rect(waterPackager.regions[3], this.x, this.y);
	}
});

const waterCharger = extendContent(GenericCrafter, "waterCharger", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
		this.regions[3] = Core.atlas.find(this.name + "-top");
	}
});
waterCharger.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, waterCharger, {
	draw() {
		Draw.rect(waterCharger.regions[1], this.x, this.y);
		var liquid = waterCharger.consumes.get(ConsumeType.liquid).liquid;
		Drawf.liquid(waterCharger.regions[2], this.x, this.y, this.liquids.get(liquid) / waterCharger.liquidCapacity, Liquids.water.color);
		Draw.rect(waterCharger.regions[3], this.x, this.y);
	}
});

const oilPackager = extendContent(GenericCrafter, "oilPackager", {
	load() {
		this.super$load();
		this.regions = [];
		this.regions[0] = Core.atlas.find(this.name);
		this.regions[1] = Core.atlas.find(this.name + "-bottom");
		this.regions[2] = Core.atlas.find(this.name + "-liquid");
		this.regions[3] = Core.atlas.find(this.name + "-top");
	}
});
oilPackager.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, oilPackager, {
	draw() {
		Draw.rect(oilPackager.regions[1], this.x, this.y);
		var liquid = oilPackager.consumes.get(ConsumeType.liquid).liquid;
		Drawf.liquid(oilPackager.regions[2], this.x, this.y, this.liquids.get(liquid) / oilPackager.liquidCapacity, Liquids.oil.color);
		Draw.rect(oilPackager.regions[3], this.x, this.y);
	}
});

//const kineticReactor = extendContent(NuclearReactor, "kineticReactor", {
//	load() {
//		this.super$load();
//		this.regions = [];
//		this.regions[0] = Core.atlas.find(this.name);
//		this.regions[1] = Core.atlas.find(this.name + "-top");
//		this.regions[2] = Core.atlas.find(this.name + "-light");
//	}
//});
//kineticReactor.buildType = () => extendContent(NuclearReactor.NuclearReactorBuild, kineticReactor, {
//	draw() {
//		Draw.rect(kineticReactor.regions[0], this.x, this.y);
//		var liquid = kineticReactor.consumes.get(ConsumeType.liquid).liquid;
//		Drawf.liquid(kineticReactor.regions[1], this.x, this.y, this.liquids.get(liquid) / kineticReactor.liquidCapacity, Liquids.cryofluid.color);
//		Drawf.liquid(kineticReactor.regions[2], this.x, this.y, 100, Liquids.cryofluid.color);
//	}
//});