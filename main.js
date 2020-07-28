

var vid = document.getElementById("vids");
var min=27;
var max=40;

var tem= Math.floor(Math.random()*(+max - +min) + min );

var h1 = $("#temnum");

// front temperature bar code bar
$(
    function (){

       $("#p3s").text(tem + "°C")
       $("#p5p").text(tem + "°C")
       $("#temnum").text(tem + "°C")
           if(tem > 37  ) {
                 $("#part3-progress").css("background"," #ff3300")
             } 
             else if(tem < 35){
                              $("#part3-progress").css("background"," #00f")}
            else if(tem < 37 && tem > 35){
                              $("#part3-progress").css("background"," #0f0")
   
            }

       anime(
            {
                targets:"#part3-progress",
                width:tem + "%",
                loop:false,
                duration:6000,
            });
       
             
    });
// front temperature code block end


$(
    function (){ 
    $("#p3s").text(tem + "°C")
    $("#p5p").text(tem + "°C")
        if(tem > 37  ) {
                 $("#part5-progress").css("background"," #ff3300")
             } 
             else if(tem < 35){
                              $("#part5-progress").css("background"," #00f")}
            else{
                              $("#part5-progress").css("background"," #0f0")}

 anime({
     targets:"#part5-progress",
     height:tem + "vh" ,
 });

 
    });



// buttons code block

function powerup(){

var vid = document.getElementById("vids");
    $("#sec8").fadeOut()
    $("#sec6").fadeOut()
    $("#sec5").fadeOut() 
    $("#sec4").fadeOut()
    $("#sec3").fadeOut()
    $("#sec2").fadeOut()
    $("#sec1").fadeIn()
    vid.pause();
}

function temperature(){
      if(tem > 37  ) {
                 $("#part3-progress").css("background"," #ff3300")
             } 
             else if(tem < 35){
                              $("#part3-progress").css("background"," #00f")}
            else{
                              $("#part3-progress").css("background"," #0f0")
   

        anime(
            {
                targets:"#part5-progress",
                height:tem + "%",
                loop:false,
                duration:10000,
            })
            }

var vid = document.getElementById("vids");
    $("#sec8").fadeOut()
    $("#sec6").fadeOut()
    $("#sec5").fadeOut()
    $("#sec4").fadeOut()
    $("#sec3").fadeOut()
    $("#sec1").fadeOut()
    $("#sec2").fadeIn()
    vid.pause();
    
}

function user(){
    var vid = document.getElementById("vids");
    $("#sec8").fadeOut()
    $("#sec6").fadeOut()
    $("#sec5").fadeOut() 
    $("#sec4").fadeOut()
    $("#sec3").fadeOut()
    $("#sec2").fadeOut()
    $("#sec1").fadeIn()
    vid.pause();
    
}

function battery(){

navigator.getBattery().then(function(battery) {

    var level = battery.level;
   var levelz = level * 100 + "%";
    var charge = document.getElementById("part6-progress");
    $("#printbat").text("Your battery percent is " + levelz)
    
        $("#printtem").text("Your temperature is " + tem +"°C")

    $("#batp").text(levelz);
     charge.style.height = level * 100 + "%";
 
 
        anime(
            {
                targets:"#part6-progress",
                height:battery.level * 50 + "vh",
                loop:false,
                duration:6000,
            });
            
            if( levelz => 50 + "%" ){
                $("#part6-progress").css("backgroundColor","#0f0")
            }
          else if(levelz < 50 + "%") {
              $("#part6-progress").css("backgroundColor","#ff3300")
          }
       else if(levelz > 99 + "%") {
              $("#part6-progress").css("backgroundColor","orange")
          }


});
    

var vid = document.getElementById("vids");
    $("#sec8").fadeOut()
    $("#sec6").fadeOut()
    $("#sec5").fadeOut()
    $("#sec4").fadeOut()
    $("#sec1").fadeOut()
    $("#sec2").fadeOut()
    $("#sec3").fadeIn()
    vid.pause();
}


function setting(){
var vid = document.getElementById("vids");
    $("#sec6").fadeOut()
    $("#sec5").fadeOut()
    $("#sec1").fadeOut()
    $("#sec2").fadeOut()
    $("#sec3").fadeOut()
    $("#sec4").fadeIn()
    vid.pause();
    
}

function notice(){
  $("#sec8").fadeOut()
navigator.getBattery().then(function(battery) {

    var level = battery.level;
   var levelz = level * 100 + "%";
    if(levelz > 90 + "%" || levelz == 100 + "%"){
       var battstats = " the best status , dont not charge it! , i hope your battery life span is good , if it is then it should last 1 to 2 days before it switch off, else if it does not then i recommend you to get a new battery from the nearest slot. "
   }   
   else if(levelz > 50 + " %"){
       var battstats = " a good status you can charge it if you want, but i recommend you not to charge it unless you want to use it to play videos , games or chat on social media, but if you only want to use it to listen to musics, i recommend you not to charge it. "
   }

   else if(levelz < 50 + "%"){
       var battstats = " a bad state , i recommend you to charge it , if their is no power source , i recommend you not to play videos or games but you can still use your social media apps and you can listen to music."
   }
   else if(levelz < 15 + "%"){
       var battstats = " a very bad state , i recommend you to kindly charge it now! , but there is no power source ,i recommend you not to play games , videos or social media apps , kindly off your data connection , wifi and hotspots , you can only listen to music only!"
   }
  else if(levelz < 5 + "%"){
      var battstats = " a worst state , i recommend you not to use any apps, not to play videos or games also not music , kindly charge it now but if there is no power source , i recommend you not use your phone expect to recieve calls only untill you charged it."
  };
$("#printbat").text("Battery pecentage is  " + levelz ); 
 
$("#notebatt").text("your battery pecentage is in " + battstats ); 


});

      $("#p3s").text(tem + "°C");
      $("#p5p").text(tem + "°C");
        anime(
            {
                targets:"#part3-progress",
                width:tem + "%",
                loop:false,
                duration:6000,
            });



       if(tem == 44 ){
       var temstats = " Almost certainly death will occur; however, people have been known to survive up to 46.5 °C. "
   }
   else if(tem  == 43 ){
       var temstats = " Normally death, or there may be serious brain damage, continuous convulsions and shock. Cardio-respiratory collapse will likely occur. "
   }
   else if(tem == 42 ){
       var temstats = "Subject may turn pale or remain flushed and red. They may become comatose, be in severe delirium, vomiting, and convulsions can occur. Blood pressure may be high or low and heart rate will be very fast. "
   }
   else if(tem == 41 ){
       var temstats = " (Medical emergency) – Fainting, vomiting, severe headache, dizziness, confusion, hallucinations, delirium and drowsiness can occur. There may also be palpitations and breathlessness."
   }
  else if(tem == 40 ){
      var temstats = "Fainting, dehydration, weakness, vomiting, headache, breathlessness and dizziness may occur as well as profuse sweating. Starts to be life-threatening. "
  }
  else if(tem == 39 ){
      var temstats = "Severe sweating, flushed and red. Fast heart rate and breathlessness. There may be exhaustion accompanying this. Children and people with epilepsy may be very likely to get convulsions at this point. "
  }
  else if(tem == 38 ){
      var temstats = " (Classed as hyperthermia if not caused by a fever) – Feeling hot, sweating, feeling thirsty, feeling very uncomfortable, slightly hungry. If this is caused by fever, there may also be chills."
  }
  else if(tem > 37  ){
      var temstats = " is a typically reported range for normal body temperature. "
  }  
  else if(tem > 36  ){
      var temstats = " is a typically reported range for normal body temperature. "
  }

  else if(tem == 35 ){
      var temstats = "Hypothermia is less than 35 °C (95 °F)) – Intense shivering, numbness and bluish/grayness of the skin. There is the possibility of heart irritability"
  }
  else if(tem == 34 ){
      var temstats = " Severe shivering, loss of movement of fingers, blueness, and confusion. Some behavioral changes may take place. "
  }
  else if(tem == 33 ){
      var temstats = "Moderate to severe confusion, sleepiness, depressed reflexes, progressive loss of shivering, slow heartbeat, shallow breathing. Shivering may stop. Subject may be unresponsive to certain stimuli. "
  }
  else if(tem == 32 ){
      var temstats = "(Medical emergency) – Hallucinations, delirium, complete confusion, extreme sleepiness that is progressively becoming comatose. Shivering is absent (subject may even think they are hot). Reflex may be absent or very slight. "
  }
  else if(tem == 31 ){
      var temstats = "Comatose, very rarely conscious. No or slight reflexes. Very shallow breathing and slow heart rate. Possibility of serious heart rhythm problems. "
  }
  else if(tem < 30 ){
      var temstats = " Severe heart rhythm disturbances are likely and breathing may stop at any time. The person may appear to be dead."
  }  

  else if(tem <= 29){
      var temstats = " Death usually occurs due to irregular heart beat or respiratory arrest; however, some patients have been known to survive with body temperatures as low as 13.7 °C "
  }




$("#printtem").text("Temperature is  " + tem + "°C");

$("#notetem").text("if your temperature is  " + tem + " things you need to know : " + temstats); 


var vid = document.getElementById("vids");
    $("#sec8").fadeOut()
    $("#sec6").fadeOut()
    $("#sec1").fadeOut()
    $("#sec2").fadeOut()
    $("#sec3").fadeOut()
    $("#sec4").fadeOut()
    $("#sec5").fadeIn()
    vid.pause();
}


function channelShow(){
    $("#sec8").fadeOut()
    $("#sec5").fadeOut()
    $("#sec1").fadeOut()
    $("#sec2").fadeOut()
    $("#sec3").fadeOut()
    $("#sec4").fadeOut()
    $("#sec6").fadeIn()
    
}
function addnm(){
    $(".alertbox").fadeIn()
    $("#sec6").css("filter","blur(5px)")
}

function addm(){
var vid = document.getElementById("vids");
var ct = $("#mn").val();
var cs = $("#ml").val();
           $("#channel-title").text("Name : " + ct)
           $("#printchan").text("you are currently watching " + ct)
           
    vid.src = cs;
        
  $(".alertbox").fadeOut()
  $("#sec6").css("filter","none")
}
  function abutus(){
  var abh = 50;
  var toop = 50 + "%"
  var toops = - 50 + "%"
    $(".abutbox").css("display","block");
      anime({
          targets:".abutbox",
          scale:1.0,
          top:toop,
          left:toop,
          translateX:toops,
          translateY:toops,
          height:abh + "vh",
          duration:5000
      })
  }
    function closeabout(){
  var abh = 50;
  var toop = 50 + "%"
  var toops = - 50 + "%"
    $(".abutbox").css("display","block");
      anime({
          targets:".abutbox",
          scale:0,
          top:0,
          left:0,
          height:abh + "vh",
          duration:5000
      })
  }

function coming(){
    $(".coming").css("display"," block");
    anime({
        targets:".coming h1",
        scale:1.2,
        duration:1500,
    });
    anime({
        targets:".coming p",
        marginTop:0,
        delay:2000,
        duration:4000
    })
  setTimeout( comingsoon,6000);
    
}
function comingsoon(){
        $(".coming").css("display"," block");
    anime({
        targets:".coming h1",
        scale:0,
        duration:1500,
    });
    anime({
        targets:".coming p",
        marginTop:100,
        delay:2000,
        duration:3000
    });
    $(".coming").fadeOut(5000);
}


// bot words

   function bot(){
    responsiveVoice.speak("hi i am Cybot your smart assistant");
};
 
function botpen(){
      $("#p3s").text(tem + "°C");
      $("#p5p").text(tem + "°C");
       if(tem > 37  ) {
                 $("#part5-progress").css("background"," red")
             } 
             else if(tem < 35){
                              $("#part5-progress").css("background"," blue")}
            else{
                              $("#part5-progress").css("background"," green")}
 
        anime(
            {
                targets:"#part5-progress",
                height:tem + "%",
                loop:false,
                duration:10000,
            });
 


       if(tem == 44 ){
       var temstats = " Almost certainly death will occur; however, people have been known to survive up to 46.5 °C. "
   }
   else if(tem  == 43 ){
       var temstats = " Normally death, or there may be serious brain damage, continuous convulsions and shock. Cardio-respiratory collapse will likely occur. "
   }
   else if(tem == 42 ){
       var temstats = "Subject may turn pale or remain flushed and red. They may become comatose, be in severe delirium, vomiting, and convulsions can occur. Blood pressure may be high or low and heart rate will be very fast. "
   }
   else if(tem == 41 ){
       var temstats = " (Medical emergency) – Fainting, vomiting, severe headache, dizziness, confusion, hallucinations, delirium and drowsiness can occur. There may also be palpitations and breathlessness."
   }
  else if(tem == 40 ){
      var temstats = "Fainting, dehydration, weakness, vomiting, headache, breathlessness and dizziness may occur as well as profuse sweating. Starts to be life-threatening. "
  }
  else if(tem == 39 ){
      var temstats = "Severe sweating, flushed and red. Fast heart rate and breathlessness. There may be exhaustion accompanying this. Children and people with epilepsy may be very likely to get convulsions at this point. "
  }
  else if(tem == 38 ){
      var temstats = " (Classed as hyperthermia if not caused by a fever) – Feeling hot, sweating, feeling thirsty, feeling very uncomfortable, slightly hungry. If this is caused by fever, there may also be chills."
  }
  else if(tem > 37 ){
      var temstats = " is a typically reported range for normal body temperature. "
  }  
  else if(tem > 36 ){
      var temstats = " is a typically reported range for normal body temperature. "
  }

  else if(tem == 35  ){
      var temstats = "Hypothermia is less than 35 °C (95 °F)) – Intense shivering, numbness and bluish/grayness of the skin. There is the possibility of heart irritability"
  }
  else if(tem == 34 ){
      var temstats = " Severe shivering, loss of movement of fingers, blueness, and confusion. Some behavioral changes may take place. "
  }
  else if(tem == 33 ){
      var temstats = "Moderate to severe confusion, sleepiness, depressed reflexes, progressive loss of shivering, slow heartbeat, shallow breathing. Shivering may stop. Subject may be unresponsive to certain stimuli. "
  }
  else if(tem == 32 ){
      var temstats = "(Medical emergency) – Hallucinations, delirium, complete confusion, extreme sleepiness that is progressively becoming comatose. Shivering is absent (subject may even think they are hot). Reflex may be absent or very slight. "
  }
  else if(tem == 31 ){
      var temstats = "Comatose, very rarely conscious. No or slight reflexes. Very shallow breathing and slow heart rate. Possibility of serious heart rhythm problems. "
  }
  else if(tem == 30 ){
      var temstats = " Severe heart rhythm disturbances are likely and breathing may stop at any time. The person may appear to be dead."
  }

  else if(tem <= 29){
      var temstats = " Death usually occurs due to irregular heart beat or respiratory arrest; however, some patients have been known to survive with body temperatures as low as 13.7 °C "
  }
  
responsiveVoice.speak("If your temperature is " + tem + " what you need to know is " + temstats);


}
   function botbatt(){
  navigator.getBattery().then(function(battery) {

    var level = battery.level;
   var levelz = level * 100 + "%";
    if(levelz > 90 + "%" || levelz > 100 + "%" ){
       var battstats = "the best status. Do not charge it! , i hope your battery life span is good , if it is then it should last 1 to 2 days before it switch off, else if it does not then i recommend you to get a new battery from the nearest slot. "
   }   
   else if(levelz > 50 + " %"){
       var battstats = " a good status you can charge it if you want, but i recommend you not to charge it unless you want to use it to play videos , games or chat on social media, but if you only want to use it to listen to musics, i recommend you not to charge it. "
   }

   else if(levelz < 50 + "%"){
       var battstats = " a bad state , i recommend you to charge it , if their is no power source , i recommend you not to play videos or games but you can still use your social media apps and you can listen to music."
   }
   else if(levelz < 15 + "%"){
       var battstats = " a very bad state , i recommend you to kindly charge it now! , but there is no power source ,i recommend you not to play games , videos or social media apps , kindly off your data connection , wifi and hotspots , you can only listen to music only!"
   }
  else if(levelz < 5 + "%"){
      var battstats = " a worst state , i recommend you not to use any apps, not to play videos or games also not music , kindly charge it now but if there is no power source , i recommend you not use your phone expect to recieve calls only untill you charged it."
  }
   
    responsiveVoice.speak("Your battery percentage is " + levelz + ". Your  battery  is  in   " + battstats );

   
});
  };

function botabout(){
  responsiveVoice.speak("Hi am Cybot an  AI assistant , this app is a smart app created by Kad  a  Krazy programmer , this app is created to help user with the help of a smart Bot me , yes me your smart assistant Cybot , Also this is kad first app.  ");
};


