$(document).ready(function() { 
  $('#delivery').click(function(listen) {
    $('.delivery').toggle(); 
    var deliveryCost = 100;    
  });
  $('#order').click(function() {    
    var yourOrder =$("#sizes1").val();
    var yourCrust = $("#crust1").val();
    var yourToppings = $("#topping").val();
    $("#yourOrder").text(yourOrder +", "+ yourCrust )    
    if (yourToppings == "on") {
      var toppingCost = 80;
    }    
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
    $("#yourTotal").text(sizeCost+crustCost+toppingCost+"ksh")    
  $('#confirm').click(function() {     
    $('.finalTotal').show();     
    var confirm =$("#inputAddress").val();   
    alert("Your pizza will be delivered to " + confirm);  
    $("#finalTotal").text(sizeCost+crustCost+toppingCost+100+"ksh")     
  });
  });  
});


