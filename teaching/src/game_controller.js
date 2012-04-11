function DefaultPropertyManager() {
	return {
		"l":{"x":0,"y":0},
		"d":{"x":0,"y":0},
		"life":1,
		"maxLife":1,
		"speed":1,
		"regenRate":1,
		"mass":1,
		"score":0
	}
}

function gameController() {
	return {
		"drawing":false,
		"nodes":[],
		"registeredNodes":{"living":[]},
		"registeredIndexes":[],
		"eventInterceptors":[],
		"eventListeners":{},
		"listenerIndexes":[],
		"initialize":function(){},
		"reset":function(){},
		"register":function(gc, t){
			t.gc = gc;
			gc.nodes.push(t);
			gc.registeredNodes['living'].push(t);
			if (t.teams != undefined && t.teams.length > 0) {
				for (var i = 0; i < t.teams.length; i++) {
					var teamName = t.teams[i];
					if (gc.registeredNodes[teamName] === undefined) {
						gc.registeredNodes[teamName] = [];
						gc.registeredIndexes.push(teamName);
					}
					
					for (var ii = 0; ii < gc.registeredNodes[teamName]; ii++) {
						var registeredNodes = gc.registeredNodes[teamName][ii];
						if (registeredNodes === t){
							return;
						}
					}
					
					gc.registeredNodes[teamName].push(t);
					etf(t, "registering", {"t":t});
				}
			}
		},
		"deregister":function(gc, n){
			
			etf(n, 'deregister', {'t':n,'gc':gc});
			
			for (var i = 0; i < n.teams.length; i++) {
				var team = n.teams[i];
				for (var j = 0; j < gc.registeredNodes[team].length; j++) {
					var registeredNode = gc.registeredNodes[team][j];
					if (n === registeredNode) {
						gc.registeredNodes[team].splice(j,1);
						break;
					}
				}
			}
		},
		"removeDeadThings":function(gc){
			for (var j=0;j<gc.registeredNodes['living'].length;j++){
				var n = gc.registeredNodes['living'][j];
				if (n.life <= 0) {
					for (var i = 0; i < gc.nodes.length; i++) {
						var iNode = gc.nodes[i];
						if (iNode === n) {
							gc.deregister(gc, n);
							gc.nodes.splice(i,1);
							break;
						}
					}

					gc.registeredNodes['living'].splice(j,1);
					j--;
				}
			}
		},
		"removeOutOfBoundsThings":function(gc) {
			for (var i = 0; i <gc.registeredNodes['living'].length;i++) {
				var n = gc.registeredNodes['living'][i];
				var l = n.l;
				if (l != undefined) {
				if (oob(n)) {
					n.life = 0;
				}}
			}
		},
		"tick":function(gc){
			for (var i = 0; i < gc.nodes.length; i++) {
				var n = gc.nodes[i];
				etf(n, "tick", {"t":n,"gc":gc});
				if (gc.drawing === true) {
					etf(n, "draw", {"t":n});
				}
				for (var ii = 0; ii < n.delayedActions.length; ii++) {
					n.delayedActions[ii].delay-= 1;
					if (n.delayedActions[ii].delay <= 0) {
						n.delayedActions[ii].delay = n.delayedActions[ii].delayReset;
						n.delayedActions[ii].action({'t':n, 'gc':gc});
					}
				}
			}
			gc.removeDeadThings(gc);
			gc.removeOutOfBoundsThings(gc);
		},
		"findTarget":function(gc, team){
			if (gc.registeredNodes[team] != undefined) {
				for (var i = 0; i < gc.registeredNodes[team].length; i++) {
					return gc.registeredNodes[team][i];
				}
			}
			return undefined;
		},
		"mouseMove":function(gc, mouse) {
			for (var i = 0; i < gc.registeredNodes['mouse-move'].length; i++) {
				var n = gc.registeredNodes['mouse-move'][i];
				etf(n, 'mouse-move', {'t':n,'mouse':mouse});
			}
		},
		"mouseClick":function(gc, mouse) {
			for (var i = 0; i < gc.registeredNodes['mouse-click'].length; i++) {
				var n = gc.registeredNodes['mouse-click'][i];
				etf(n, 'mouse-click', {'t':n,'mouse':mouse,'gc':gc});
			}
		}
	}
}
