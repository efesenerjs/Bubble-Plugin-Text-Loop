function(instance, properties, context) {
   
    
  var listCounter = 0;  
	if(properties.text_list){
   
       listCounter = properties.text_list.length();
       var textList = properties.text_list.get(0,listCounter);
                 
  }
  	var duration = properties.duration;
   var i=0; 	
  instance.publishState("return", textList[0]);  
  function msg(x){
      instance.publishState("return", textList[x]);
  } 
  
   setInterval(function(){
       if(i<listCounter-1){
       	i++;
       }
       else{
         i=0;   
       }
       msg(i);
       
       
   }, duration);  
  

}