function processWeightedHash(t, hash) {
	//pass arc4random result into action
	var args = {'t':t, 'result':'hunter'};
	hash.action(args);
}

function pwh(hash, action) {
	processWeightedHash(hash, action);
}