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
		"removeDeadThings":function(gc){
			//for node in myNodes
			//if node is dead {
			//remove node from myNodes
			//loop through registeredIndexes of node
			//remove node from each registered array
			
			for (var j=0;j<gc.registeredNodes['living'].length;j++){
				var n = gc.registeredNodes['living'][j];
				if (n.life <= 0) {
					for (var i = 0; i < gc.nodes.length; i++) {
						var iNode = gc.nodes[i];
						if (iNode === n) {
							gc.nodes.splice(i,1);
							break;
						}
					}
					
					
					gc.registeredNodes['living'].splice(j,1);
					j--;
				}
			}
		},
		"tick":function(gc){
			for (var i = 0; i < gc.nodes.length; i++) {
				var n = gc.nodes[i];
				etf(n, "tick", {"t":n,"gc":gc});
				etf(n, "draw", {"t":n});
			}
			gc.removeDeadThings(gc);
		},
		"findTarget":function(gc, team){
			if (gc.registeredNodes[team] != undefined) {
				for (var i = 0; i < gc.registeredNodes[team].length; i++) {
					return gc.registeredNodes[team][i];
				}
			}
			return undefined;
		}
	}
}
