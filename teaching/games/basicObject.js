function basicObject(){
var properties = ['l', 'd', 'life', 'maxLife', 'speed', 'power', 'radius'];
var functionIndex = ['tick'];
var functions = {'tick':[function(args){
                          var t = args.t;
                          t.l.x = t.l.x + (t.d.x * t.speed);
                          t.l.y = t.l.y + (t.d.y * t.speed);
                        }]};
var nt = {'properties':properties, 'functions':functions, 'functionIndex':functionIndex};
return nt;
};
    
