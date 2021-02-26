var time = moment();
var saveBtn = $(".saveBtn");

moment().format('LT');
$("#currentDay").text ("Today's date is: " + time.format('YYYY-MM-DD'))

$(".input").each(function(index, element){
    if (time.hour() == element.id){
        $("#" + element.id + ">textarea").addClass("present");
    }
    if (time.hour() > element.id){
        $("#" + element.id + ">textarea").addClass("past");
    }
    if (time.hour() < element.id){
        $("#" + element.id + ">textarea").addClass("future");
    }
})

saveBtn.on ("click", function(event){
    console.log ($("." + event.target.id))
})
