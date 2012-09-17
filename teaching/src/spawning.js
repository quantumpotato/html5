function assignInitialProperty(t, prop) {
t[prop] = DefaultPropertyManager()[prop];
};

function assignFunctionsFromComponentTemplate(t, template) {
   if (t.functions === undefined) {
       t.functions = {};
     };
     for (var i = 0; i < template.functionIndex.length; i++) {
       fName = template.functionIndex[i];
       if (t.functions[fName] === undefined) {
         t.functions[fName] = [];
       };
     for (var ii = 0; ii < template.functions[fName].length; ii++) {
         t.functions[fName].push(template.functions[fName][ii]);
       };
     };
};

function assignDelayedFunctionsFromComponentTemplate(t, template) {
 if (t.delayedActions === undefined) {
   t.delayedActions = {};
   t.delayedIndex = [];
 };
 if (template.delayedActions != undefined) {
   for (var i = 0; i < template.delayIndex; i++) {
     var fName = template.delayIndex[i];
     t.delayedIndex.push(fName);
     t.delayedActions[fName] = template.delayedActions[fName];
     t.delayedActions[fName].delay = template.delayedActions[fName].delayReset;
   };
 };
};

function assignValuesFromComponentTemplate(t, template, completion) {
     for (var i = 0; i < template.properties.length; i++) {
        assignInitialProperty(t, template.properties[i]);       
     };
     assignFunctionsFromComponentTemplate(t, template);
     assignDelayedFunctionsFromComponentTemplate(t, template);
     t.componentsRemainingForAssignment--;
     if (t.componentsRemainingForAssignment == 0) {
       completion(t);
     };
alert('t.functions[tick]' + t.functions['tick']);
   
};

function loadComponents(t, component, completion) {
  $.getScript(component + '.js', function(data, b, c) {
    var componentsTemplate = window[component]();
    assignValuesFromComponentTemplate(t, componentsTemplate, completion);
  });

};

function assignComponents(t, components, completion) {
  t.componentsRemainingForAssignment = components.length;
  for (var i = 0; i < components.length; i++) {
    loadComponents(t, components[i], completion);
  };
};

function assignTags(t, tags) {
  if (t.tags === undefined) {
    t.tags = [];
  } 
  if (tags != undefined) {
    //see if tags contains
    for (var i = 0; i < tags.length; i++) {
      t.tags.push(tags[i]);
    };
  }
}

function spawn(name, gc, completion) {
  var t = {};
  $.getScript(name + '.js', function(data, b, c) {
    var template = window[name]();
    var components = template.components;
    assignComponents(t, template.components, completion);
    assignTags(t, template.tags);
   // gc.register(gc, t); 
});
};

