function processWeightedHash(t, hash) {
	var keys = Object.keys(hash.hash);
	
	var totalWeight = 0;
	for (var i = 0; i < keys.length; i++) {
		totalWeight += hash.hash[keys[i]];
	}
	
	var sumTotal = 0;
	var randomSelect = Math.floor(Math.random() * totalWeight);

	var result = undefined;
	for (var j = 0; j < keys.length; j++) {
		if (randomSelect <= sumTotal + hash.hash[keys[j]]) {
			result = keys[j];
			break;
		}
		sumTotal += hash.hash[keys[j]];
	}
	
	var args = {'t':t, 'result':result};
	hash.action(args);
}

function pwh(hash, action) {
	processWeightedHash(hash, action);
}