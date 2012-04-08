DelayedFunctionManager = function() {
	return {
		"Maker":function(args) {
			var maker = args.t;
			mt(maker.kind, args.gc);
		},
		"PlayerCannon":function(args){
			args.t.ready = true;
		}
	}
}

DelayResetValueManager = function() {
	return {
		"PlayerCannon":50
	}
}