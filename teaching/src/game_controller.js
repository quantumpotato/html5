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
		"registrationIndexes":[],
		"eventInterceptors":[],
		"eventListeners":{},
		"listenerIndexes":[],
		"initialize":function(){},
		"reset":function(){},
		"register":function(t){
			this.nodes.push(t);
		},
		"tick":function(){
			for (var i = 0; i < this.nodes.length; i++) {
				var n = this.nodes[i];
				etf(n, "tick", {"t":n});
			}
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