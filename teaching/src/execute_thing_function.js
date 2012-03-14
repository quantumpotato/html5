function executeThingFunction(t, functionName, args) {
	if (t.functions[functionName] != undefined) {
		for (var i = 0; i < t.functions[functionName].length; i++) {
			t.functions[functionName][i](args);
		}
	}
}

function etf(t, functionName, args){
	executeThingFunction(t, functionName, args);
}

function register(thing, gameController) {
	gameController.register(thing);
}