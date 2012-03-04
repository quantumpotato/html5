 generateThing = function(templateName){
	var newThing = {};

	newThing.properties = [];
	var properties = PropertyManager()[templateName].properties;
	for (var i = 0; i < properties.length; i++){
			newThing.properties.push(properties[i]);
			newThing[properties[i]] = DefaultPropertyManager()[properties[i]];				
	};

	newThing.functions = {};
	
	var index = FunctionManager()[templateName].index;
	var functions = FunctionManager()[templateName].functions;
	
	for (var i = 0; i < index.length; i++) {
		var functionSet = index[i];		
		if (newThing.functions[functionSet] === undefined) {
			newThing.functions[functionSet] = [];
		}
		
		for (var ii = 0; ii < functions[index[i]].length; ii++) {
			newThing.functions[functionSet].push(functions[index[i]][ii]);
		};
	};

	return newThing;
};