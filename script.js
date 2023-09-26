
//current date
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

      //loads the function when the page loads
      $(document).ready(function () {
        //button click event listener
        $(".saveBtn").on('click',function(){
        
        var text = $(this).siblings(".description").val();//value of the textarea
        var time = $(this).parent().attr("id");//value of time-block of their id

        localStorage.setItem(time, text);//storage of the two value
        
      })
    
        //changes the color of the textarea depending on the time
        function schedule(){
        var hour = dayjs().hour();//current time
          
            //loops each textarea for their time from the id
            $(".time-block").each(function(){
              //cuts the id for the number than parseInt to return an integer
              var hourBox = parseInt($(this).attr("id").slice(5));
              
              //compares the current hour with textarea time to change color
              if(hourBox < hour) {
                $("textarea").removeClass("present");
                $("textarea").removeClass("future");
                $("textarea").addClass("past");
              }
              else if (hourBox === hour){
                $("textarea").removeClass("future");
                $("textarea").removeClass("past");
                $("textarea").addClass("present");
              }
              else {
                $("textarea").removeClass("present");
                $("textarea").removeClass("past");
                $("textarea").addClass("future");
              }
            })
            

        }

        //set value to item in local storage when loaded
        $("#9a").val(localStorage.getItem("hour-9"));
        $("#10a").val(localStorage.getItem("hour-10"));
        $("#11a").val(localStorage.getItem("hour-11"));
        $("#12p").val(localStorage.getItem("hour-12"));
        $("#1p").val(localStorage.getItem("hour-13"));
        $("#2p").val(localStorage.getItem("hour-14"));
        $("#3p").val(localStorage.getItem("hour-15"));
        $("#4p").val(localStorage.getItem("hour-16"));
        $("#5p").val(localStorage.getItem("hour-17"));

      schedule();//calls function
        
        

      })
        
      

  

 