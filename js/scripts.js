$(document).ready(function() {
 
  $('#delivery').click(function() {
    $('.delivery').toggle(); 

    
  });

  $('#order').click(function() {
    
    var yourOrder =$("#sizes1").val();
    var yourCrust = $("#crust1").val();
    var yourToppings = $("#exampleCheck1").val();
    $("#yourOrder").text(yourOrder +", "+ yourCrust +", "+ yourToppings)
    alert(yourOrder + yourCrust +yourToppings);  
  });

  $('#confirm').click(function() {    
    var confirm =$("#inputAddress").val();   
    alert("Your pizza will be delivered to " + confirm);  
  });


  $("yourOrder").text(yourOrder)


  
  

  function handle(event) {
    //event.preventDefault();
    var delivery = document.getElementById("exampleFormControlSelect1")
    alert("Your pizza will be delivered to " + delivery )
  }
  


});


