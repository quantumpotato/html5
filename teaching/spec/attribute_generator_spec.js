describe("Basic Object", function(){
	it("should have 4 properties", function(){
		expect(PropertyManager.BasicObject.properties.length).toBe(4);
	});
});

describe("Object generator", function(){
	describe("Object properties", function(){
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
	
	describe("Object tick functions", function(){
		it("should create an object which has tick functions from its template", function(){
			var newThing = generateThing("BasicObject");
			expect(newThing.functions.tick.length).toBe(FunctionManager["BasicObject"].functions.tick.length);
		});
		
		it("should execute generate functions on generated objects", function(){
			var newThing = generateThing("BasicObject");
			expect(newThing.life).toBe(1);
			newThing.vel.x = 1;
			newThing.vel.y = 1;
			var oldX = newThing.l.x;
			var oldY = newThing.l.y;
			newThing.functions["tick"][0](newThing);
			expect(newThing.l.x).toBe(oldX+newThing.vel.x);
			expect(newThing.l.y).toBe(oldY+newThing.vel.y);
		});
	});
});
