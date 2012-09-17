function assignInitialProperty(t, prop) {
 //load from list
t[prop] = 5; 
};

function spawnThing(name, gc) {

var t = {};

$.getScript(name + '.js', function(data, textStatus, jqxhr) {

var template = window[name]();
alert('template:' + template);
var components = template.components; 
alert('components:' + components);
alert(components[0]);
alert('components.length:' + components.length);
for (var i = 0; i <= components.length; i++ ) {
//load component file
alert('loading component file for index:' + i);
  $.getScript(components[0] + '.js', function(data, textStatus, jqxhr) {
alert('status'+textStatus);
  var componentTemplate = window[components[0]]();
 // alert('componentTemplate: ' + componentTemplate);
  var properties = componentTemplate.properties;
  for (var ii = 0; ii < properties.length; ii++) {
    assignInitialProperty(t, properties[ii]);
    alert('assigned t' + t);
  }
 alert(t.l);
alert(t.life);

  });
//assign properties

//assign functions

};

});
alert('returning t' + t);
return t;

};

function st(name, gc){
return spawnThing(name, gc);
};

function testSpawn(name, gc) {
var testedSpawn;
$.getScript(name + '.js', function(data, textStatus, jqxhr) {
  testedSpawn = window[name]();
  alert('test components: ' + testedSpawn.components);
 alert('template:'+testedSpawn);
});

return testedSpawn;

};
