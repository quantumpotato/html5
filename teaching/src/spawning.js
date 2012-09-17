function assignInitialProperty(t, prop) {
t[prop] = DefaultPropertyManager()[prop];
};

function assignPropertiesFromComponentTemplate(t, template, completion) {
     for (var i = 0; i < template.properties.length; i++) {
        assignInitialProperty(t, template.properties[i]);       
     };
     if (t.functions === undefined) {
       t.functions = {};
     };
     for (var ii = 0; ii < template.functionIndex.length; ii++) {
       fName = template.functionIndex[ii];
       if (t.functions[fName] === undefined) {
         t.functions[fName] = [];
       };
       for (iii = 0; iii < template.functions[fName].length; iii++) {
         t.functions[fName].push(template.functions[fName][iii]);
       };

 }
     t.componentsRemainingForAssignment--;
     if (t.componentsRemainingForAssignment == 0) {
       completion(t);
     };
alert('t.functions[tick]' + t.functions['tick']);
   
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
};

