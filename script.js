//Time Slots
//5-9
//9-11
//11-3
//9-2

$(function(){
   
    $('#morning').hide();
    $('#workstudy').hide();
    $('#afternoon').hide();
    $('#evening').hide();
  
    var d = new Date();
    var hour = d.getHours();
  
    // Morning Prayers 5am - 9am
    if ( hour >= 5 && hour <= 9) {
        $('#morning').show();
        console.log("it's morning");
        $('body').css("background","linear-gradient(135deg, cyan, 30%, yellow) fixed");
        $('body').css("color","#333");
    }
   
    // Beginning Work Prayers 9am - 11pm
    else if ( hour >= 9 && hour <= 11) {
        $('#workstudy').show();
        console.log("it's work time");
        $('body').css("background","linear-gradient(135deg, orange, 70%, yellow) fixed");
        $('body').css("color","#333");
    }
   
    // Midday Prayers 11am - 3pm
    else if ( hour >= 11 && hour <= 15) {
        $('#afternoon').show();
        console.log("it's afternoon");
        $('body').css("background","linear-gradient(135deg, orange, 60%, yellow) fixed");
        $('body').css("color","#333");
    }
  
   // Night Prayers 8pm - 2am
    else if( hour >= 20 || hour <= 2) {
        $('#evening').show();
        console.log("it's evening");
        $('body').css("background","linear-gradient(135deg, navy, 60%, purple) fixed");
        $('body').css("color","#cecece");
    }
   
    // Beginning Work Prayers 9am - 1pm
    else {
        $('#workstudy').show();
        console.log("it's work time");
        $('body').css("background","linear-gradient(135deg, orange, 70%, yellow) fixed");
        $('body').css("color","#333");
    }

});
