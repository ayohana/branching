$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());

    //front-end////
    if (age < 21) {
      $("#minors").show(); 
    } else if (age === 21) {
      $("#legal").show();
    } else { 
      $("#majors").show(); 
    }
    
  });

});


