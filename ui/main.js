//counter
var button=document.getElementById('counter');


button.onclick = function(){
  //create a object request
  var request= new XMLHttpRequest();
  
  //capture response
  request.onreadystateChange = function(){
      if(request.readystate===XMLHttpRequest.DONE)
      {
          //TAKE SOME ACTION
        if (request.status===200) {
            var counter = request.responseText;
            var span=document.getElementById('count');
            span.innerHTML= counter.toString();
        }
          
      }
      //NOT DONE YET
      
  };
  //render variable in span
 
  //make request
  request.open('GET', "http://surajmenonm.imad.hasura-app.io/counter", true)
  request.send(null)
    
};