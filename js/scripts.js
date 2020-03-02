$(document).ready(function() {
 
  $('#delivery').click(function() {
    $('.delivery').toggle();   
  });


  

  
  

  function handle(event) {
    event.preventDefault();
    var delivery = document.getElementById("inputAddress")
    alert("Your pizza will be delivered to " + delivery )
  }
  


});


