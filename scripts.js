//Time Slots
//5-11
//11-4
//4-9
//9-2

$(function(){
   
    $('#morning').hide();
    $('#afternoon').hide();
    $('#evening').hide();
  
    var d = new Date();
    var hour = d.getHours();
  
    // Morning Prayers 5am - 11am
    if ( hour >= 5 && hour <= 11) {
        $('#morning').show();
        console.log("it's morning");
        $('body').css("background","linear-gradient(135deg, cyan, 60%, yellow)");
        $('body').css("color","#333");
    }
    // Midday Prayers 11am - 4pm
    else if ( hour >= 11 && hour <= 12) {
        $('#afternoon').show();
        console.log("it's afternoon");
        $('body').css("background","linear-gradient(135deg, orange, 60%, yellow)");
        $('body').css("color","#333");
    }
  
    else if( hour >= 11 || hour <= 2) {
        $('#evening').show();
        console.log("it's evening");
        $('body').css("background","linear-gradient(135deg, navy, 60%, purple)");
        $('body').css("color","#cecece");
    }

});
