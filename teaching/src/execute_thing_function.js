var executeThingFunction(t, functionName, args) {
	for (var i = 0; i < t.functions[functionName].length; i++) {
		t.functions[functionName][i](args);
	}
}