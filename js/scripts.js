$(document).ready(function() {
 
  $('#delivery').click(function() {
    $('.delivery').toggle(); 

    
  });

  $('#order').click(function() {
    
    var yourOrder =$("#sizes1").val();
    var yourCrust = $("#crust1").val();
    var yourToppings = $("#exampleCheck1").val();
    $("#yourOrder").text(yourOrder +", "+ yourCrust +", "+ yourToppings)
    //alert(yourOrder + yourCrust +yourToppings); 
    
    if (yourOrder == "Large 1200/=" ) {
      var sizeCost = 1200;
    } else if (yourOrder == "Medium 800/=") {
      var sizeCost = 800;
    }  else {
      var sizeCost = 600;
    }

    if (yourCrust == "Thin crust 50/=") {
      var crustCost = 50;
    } else if (yourCrust == "Deep crust 150/=") {
      var crustCost = 150;
    } else {
      var crustCost = 200;
    }
        
    $("#yourTotal").text(sizeCost+crustCost+"ksh")
    alert(sizeCost+crustCost)

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


