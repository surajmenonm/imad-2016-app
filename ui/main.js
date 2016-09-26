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
  request.send(null);
    
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function(){
    
    
    var names=['name1', 'name2', 'name3'];
    var list='';
    for (var i=0;i=names.length; i++){
        list +='<li>'+names[i]+'</li>';
        
        
    }
    
    var ul=document.getElementById('namelist')
    ul.innerHTML=list;
    
    
};