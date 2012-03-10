describe("Basic Object", function(){
	it("should have 5 properties", function(){
		expect(PropertyManager().BasicObject.properties.length).toBe(5);
	});
});

describe("Object generator", function(){
	var newThing;
	beforeEach(function(){
		newThing = generateThing(["BasicObject"]);
	});
	
	describe("Object properties", function(){
		it("should create an object which has properties from its template", function(){
			expect(newThing.properties.length).toBe(PropertyManager()["BasicObject"].properties.length);
		});
	
		it("should set default values", function(){
			var expectedProperties = PropertyManager()["BasicObject"].properties;
//	ITERATE OVER KEYS
			for (var i = 0; i < newThing.properties.length; i++){
				var propertyName = newThing.properties[i];
				var propertyValue = newThing[propertyName];
				var tested = false;
				for (var key in propertyValue) {
					tested = true;
				   var obj = propertyValue[key];
					expect(obj).toBe(DefaultPropertyManager()[propertyName][key]);
				}
				
				if (!tested) {
					expect(propertyValue).toBe(DefaultPropertyManager()[propertyName]);					
				}
			};
		});
	});
	
	describe("Object tick functions", function(){
		it("should create an object which has tick functions from its template", function(){
			expect(newThing.functions.tick.length).toBe(FunctionManager()["BasicObject"].functions.tick.length);
		});
		
		it("should execute generate functions on generated objects", function(){
			var secondThing = generateThing(['BasicObject']);
			expect(newThing.life).toBe(1);
			newThing.d.x = 5;
			newThing.d.y = 1;
			var oldX = newThing.l.x;
			var oldY = newThing.l.y;
			newThing.functions["tick"][0]({"t":newThing});
			expect(newThing.l.x).toBe(oldX+newThing.d.x);
			expect(newThing.l.y).toBe(oldY+newThing.d.y);
		});
	});
});
