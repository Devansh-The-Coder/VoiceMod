var SpeechRecognition=window.webkitSpeechRecognition
var Recognition = new SpeechRecognition();
function Start(){
    document.getElementById("Textbox").innerHTML=""
    Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("TextBox").innerHTML=Content
    console.log(Content)
    if (Content == " take my selfie") {
      console.log("Taking Selfie");
      speak()}
   
    }
            //C99
            function speak() {
              var Synth = window.speechSynthesis
              var speakData = "Taking you selfie in 5 seconds"
              var UtterThis =new SpeechSynthesisUtterance(speakData)
              Synth.speak(UtterThis)
              Webcam.attach(camera)
              setTimeout(function () {
                TakeSnapshot()
                save()
                
              }
              , 5000);
            }
            
            camera=document.getElementById("camera")
            Webcam.set({
              width:360,height:250,image_format:'jpeg',jpeg_quality:90
            })
           //C100
           function TakeSnapshot() {
             Webcam.snap(function 
              (datauri){
                document.getElementById("Result").innerHTML='<img id="selfie_image "src="'+datauri+'"/>'
                
              })
           }
           function Save() {
             link=document.getElementById("link")
             image = document.getElementById("selfie_image").src
             link.href=image
             link.click()
           }
           

