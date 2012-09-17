function assignInitialProperty(t, prop) {
 //load from list
t[prop] = 5; 

};

function assignPropertiesFromComponentTemplate(t, template, completion) {
     for (var ii = 0; ii < template.properties.length; ii++) {
        assignInitialProperty(t, template.properties[ii]);       
     };
     t.componentsRemainingForAssignment--;
     if (t.componentsRemainingForAssignment == 0) {
       completion(t);
     };
};

function loadComponents(t, component, completion) {
  $.getScript(component + '.js', function(data, b, c) {
    var componentsTemplate = window[component]();
    assignPropertiesFromComponentTemplate(t, componentsTemplate, completion);
  });

};

function assignComponents(t, components, completion) {
  t.componentsRemainingForAssignment = components.length;
  for (var i = 0; i < components.length; i++) {
    loadComponents(t, components[i], completion);
  };
};



function spawn(name, gc, completion) {

var t = {};
  $.getScript(name + '.js', function(data, b, c) {
    var template = window[name]();
    var components = template.components;
    assignComponents(t, template.components, completion);
  });

}

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
