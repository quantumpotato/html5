DelayedFunctionManager = function() {
	return {
		"generator":function(args) {
			var generator = args.t;
			var newThing = generateThing(generator.kinds);
		}
	}
}