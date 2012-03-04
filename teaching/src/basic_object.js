foobar = {};

PropertyManager = {
	"BasicObject":{
		"properties":['l','vel','life','maxLife']
	}	
}

FunctionManager = {
	"BasicObject":{
		"functions":[
			{
				"tick":function(t){
					t.life = 3;
				}
			}
		]
	}
}

DefaultPropertyManager = {
	"l":0,
	"vel":0,
	"life":1,
	"maxLife":1
}