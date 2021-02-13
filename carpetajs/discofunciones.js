'use strict';
$(document).ready(function(){
    $( "#disco1" ).draggable({ revert: true});
      $( "#disco2" ).draggable({ revert: true});
      $( "#disco3" ).draggable({ revert: true});
      $( "#disco4" ).draggable({ revert: true});
      $( "#disco5" ).draggable({ revert: true});
      $( "#disco6" ).draggable({ revert: true});
      $( "#disco7" ).draggable({ revert: true});
       $("#disco8" ).draggable({ revert: true});
      $( '.linea3' ).droppable();
            




       
       
    
    var formulario = document.querySelector("#miformulario");
    formulario.addEventListener('submit',function(){
          var numero  = document.querySelector("#generardisco").value;
        
        console.log(numero);
        
        
           var list = document.getElementById ("discogeneral");
            var listItems = list.getElementsByTagName ("li");
            
            for(var x = numero ; x > 0; x--)
            {
                list.append(listItems[x]);
            }     
    });
   
  
});


