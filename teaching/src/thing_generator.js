generateThing = function(templateName){
	var newThing = {};

	newThing.properties = [];
	var properties = PropertyManager[templateName].properties;
	for (var i = 0; i < properties.length; i++){
		newThing.properties.push(properties[i]);
		newThing[properties[i]] = DefaultPropertyManager[properties[i]];
	};

	return newThing;
};