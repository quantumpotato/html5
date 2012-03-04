describe("Basic Object", function(){
	it("should have 4 properties", function(){
		expect(PropertyManager.BasicObject.properties.length).toBe(4);
	});
});

describe("Object generator", function(){
	it("should create an object which has properties from its template", function(){
		var newThing = generateThing("BasicObject");
		expect(newThing.properties.length).toBe(PropertyManager["BasicObject"].properties.length);
	});
	
	it("should set default values", function(){
		var newThing = generateThing("BasicObject");
		var expectedProperties = PropertyManager["BasicObject"].properties;
		for (var i = 0; i < newThing.properties.length; i++){
			var propertyName = newThing.properties[i];
			var propertyValue = newThing[propertyName];
			expect(propertyValue).toBe(DefaultPropertyManager[propertyName]);
		};
	});
});
