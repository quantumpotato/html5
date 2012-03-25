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
		"register":function(t){
			t.gc = this;
			this.nodes.push(t);
			this.registeredNodes['living'].push(t);
			
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
					etf(t, "registering", {"t":t});
				}
			}
		},
		"removeDeadThings":function(){
			//for node in myNodes
			//if node is dead {
			//remove node from myNodes
			//loop through registeredIndexes of node
			//remove node from each registered array
			
			
			console.log("registered" + this.registeredNodes['living'].length);
			for (var j=0;j<this.registeredNodes['living'].length;j++){
				var n = this.registeredNodes['living'][j];
				if (n.life <= 0) {
					for (var i = 0; i < this.nodes.length; i++) {
						var iNode = this.nodes[i];
						if (iNode === n) {
							this.nodes.splice(i,1);
							break;
						}
					}
					
					
					this.registeredNodes['living'].splice(j,1);
					j--;
				}
			}
		},
		"tick":function(){
			for (var i = 0; i < this.nodes.length; i++) {
				var n = this.nodes[i];
				etf(n, "tick", {"t":n});
			}
			this.removeDeadThings();
		},
		"findTarget":function(team){
			if (this.registeredNodes[team] != undefined) {
				for (var i = 0; i < this.registeredNodes[team].length; i++) {
					return this.registeredNodes[team][i];
				}
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