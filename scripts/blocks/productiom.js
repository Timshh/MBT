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