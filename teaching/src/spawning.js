function assignInitialProperty(t, prop) {
 //load from list
// t.prop = 5; 
};

function spawnThing(name, gc) {

$.getScript('things'/name + '.js', function(data, textStatus, jqxhr) {
var template = window['spawn_'+name]();
var components = template.components; 
var t = {};
for (i = 0; i < components.length; i++) {
//load component file
  $.getScript('components/'+components[i], function(data, textStatus, jqxhr) {
  var componentTemplate = window['component_'+name]();
  var properties = componentTemplate.properties;
  for (var ii = 0; ii < properties.length; ii++) {
    assignInitialProperty(t, properties[ii]);
  }

  });
//assign properties

//assign functions

};

});

};

function st(name, gc){
return spawnThing(name, gc);
};
