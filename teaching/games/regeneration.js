function regeneration(){
var properties = ['life', 'maxLife', 'regenPower'];
var functionIndex = [];
var delayedIndex = ['regenerate'];
var delayedActions = {'regenerate':{'action':function(args){
                         var t = args.t;
                         
                       }, 'delayReset':100}};


var nt = {'properties':properties, 'functions':{}, 'functionIndex':functionIndex, 'delayedActions':delayedActions, 'delayedIndex':delayedIndex};
return nt;
};
    
