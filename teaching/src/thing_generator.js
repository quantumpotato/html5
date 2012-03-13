generateThing = function(templates){
	var newThing = {};

	newThing.properties = [];
	newThing.functions = {};
	for (var templateIndex = 0; templateIndex < templates.length; templateIndex++) {
		var templateName = templates[templateIndex];		
		console.log(templateName);
		var properties = PropertyManager()[templateName].properties;
		for (var i = 0; i < properties.length; i++){
			if (newThing.properties[properties[i]] === undefined) {
				newThing.properties.push(properties[i]);			
				newThing[properties[i]] = DefaultPropertyManager()[properties[i]];				
			}	
		};
		
		
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
		
	}
	


	return newThing;
};