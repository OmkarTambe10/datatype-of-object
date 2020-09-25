var data = {
    name:"coruscate",
    address:{
        line1:"surat",
        pincode:395006
    },
    members:[{
        name:"mem1"
    }]
};
console.log(Object.keys(data.members[0]))
var nameKeys= Object.keys(data)
var newdata = {}
for(var i = 0 ; i < nameKeys.length; i++){
	var type = (typeof(data[nameKeys[i]]));
  	if(type == "string"){
    	newdata[nameKeys[i]] = type
    }else if(type == "number"){
    	newdata[nameKeys[i]] = type
    }else{
		//newdata[nameKeys[i]] = type 
      	if(Array.isArray(data[nameKeys[i]]) == true){
          	//console.log(data[nameKeys[i]][0])
          	var a = ittrateArray(data[nameKeys[i]][0])
        	newdata[nameKeys[i]] = []
          console.log("newdata",newdata)
            newdata[nameKeys[i]].push(a)
        }else{
        	newdata[nameKeys[i]] = ittrateobject(data[nameKeys[i]])
        }
    }
}

function ittrateArray(aryObj){
	var objkeys = Object.keys(aryObj)
    var data2 = {}
    for(var i = 0 ; i < objkeys.length; i++){
		var type = (typeof(aryObj[objkeys[i]]));
  		if(type == "string"){
    		data2[objkeys[i]] = type
    	}else if(type == "number"){
    		data2[objkeys[i]] = type
    	}else{
			//newdata[nameKeys[i]] = type 
      		if(Array.isArray(aryObj[objkeys[i]]) == true){
              ittrateArray(aryObj[objkeys[i]])
        	}else{
              ittrateobject(aryObj[objkeys[i]])
        	}
    	}
	}
  return data2
}

function ittrateobject(dataObj){
	var objkeys = Object.keys(dataObj)
    var data2 = {}
	for(var i = 0 ; i < objkeys.length; i++){
		var type = (typeof(dataObj[objkeys[i]]));
  		if(type == "string"){
    		data2[objkeys[i]] = type
    	}else if(type == "number"){
    		data2[objkeys[i]] = type
    	}else{
			//newdata[nameKeys[i]] = type 
      		if(Array.isArray(dataObj[objkeys[i]]) == true){
        	//array
        	}else{
              ittrateobject(dataObj[objkeys[i]])
        	}
    	}
	}
  return data2
}
console.log("newdata",newdata);