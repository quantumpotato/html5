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
		"registeredNodes":{},
		"registeredIndexes":[],
		"eventInterceptors":[],
		"eventListeners":{},
		"listenerIndexes":[],
		"initialize":function(){},
		"reset":function(){},
		"register":function(t){
			this.nodes.push(t);
			t.gc = this;
			
			if (t.teams != undefined && t.teams.length > 0) {
				for (var i = 0; i < t.teams.length; i++) {
					var teamName = t.teams[i];
					if (this.registeredNodes[teamName] === undefined) {
						this.registeredNodes[teamName] = [];
						this.registeredIndexes.push(teamName);
					}
					
					for (var ii = 0; ii < this.registeredNodes[teamName]; ii++) {
						var registeredNodes = this.registeredNodes[teamName][ii];
						if (registeredNodes === t){
							return;
						}
					}
					
					this.registeredNodes[teamName].push(t);
				}
			}
		},
		"tick":function(){
			for (var i = 0; i < this.nodes.length; i++) {
				var n = this.nodes[i];
				etf(n, "tick", {"t":n});
			}
		},
		"findTarget":function(team){
			for (var i = 0; i < this.registeredNodes[team].length; i++) {
				return this.registeredNodes[team][i];
			}
			return undefined;
		}
	}
}

// gameController = function(){
// 	this.nodes = [];
// 	this.registeredNodes = {};
// 	this.eventInterceptors = [];
// 	// this.initialize = function(){
// 	// 	
// 	// };
// 	// 
// 	// this.reset = function(){
// 	// 	
// 	// };
// };

//registeredObjects[player].length