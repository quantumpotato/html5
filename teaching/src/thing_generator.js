function generateProperties(newThing, templateName) {
	var properties = PropertyManager()[templateName].properties;
	for (var i = 0; i < properties.length; i++){
		if (newThing.properties[properties[i]] === undefined) {
			newThing.properties.push(properties[i]);			
			newThing[properties[i]] = DefaultPropertyManager()[properties[i]];				
		}	
	};
}

function generateFunctions(newThing, templateName) {
	if (FunctionManager()[templateName] === undefined) {
		return;
	}
	var index = FunctionManager()[templateName].index;
	var functions = FunctionManager()[templateName].functions;

	for (var i = 0; i < index.length; i++) {
		var functionSet = index[i];		
		if (newThing.functions[functionSet] === undefined) {
			newThing.functions[functionSet] = [];
			newThing.functionIndexes.push(functionSet);
		}

		for (var ii = 0; ii < functions[index[i]].length; ii++) {
			newThing.functions[functionSet].push(functions[index[i]][ii]);
		};
	};	
}

generateDelayedFunctions = function(newThing, templateName) {
	var delayedFunction = DelayedFunctionManager()[templateName];
	if (delayedFunction === undefined) {
		return;
	}
	var delayReset = DelayResetValueManager()[templateName];
	if (delayReset === undefined) {
		delayReset = 0;
	}

	var delayedAction = {'delay':0, 'delayReset':delayReset, 'action':delayedFunction};	
	newThing.delayedActions.push(delayedAction);
}

generateThing = function(templates){
	var newThing = {};

	newThing.properties = [];
	newThing.functions = {};
	newThing.functionIndexes = [];
	newThing.delayedActions = [];	
	for (var templateIndex = 0; templateIndex < templates.length; templateIndex++) {
		var templateName = templates[templateIndex];		
		generateProperties(newThing, templateName);
		generateFunctions(newThing, templateName);
		generateDelayedFunctions(newThing, templateName);
	}
	
	return newThing;
};