DelayedFunctionManager = function() {
	return {
		"Maker":function(args) {
			var maker = args.t;
			var t = mt(maker.kind, args.gc);
			if (maker.l) {
				t.l.x = maker.l.x;
				t.l.y = maker.l.y;
			}
		},
		"PlayerCannon":function(args){
			args.t.ready = true;
			console.log("args.t.ready" + args.t.ready);
		},
		"Looper":function(args){
			var looper = args.t;
			etf(mp, looper.loopingFunctionName, looper.loopingArgs);
		}
	}
}

DelayResetValueManager = function() {
	return {
		"PlayerCannon":80,
		"Looper":100
	}
}