Prediction1="";
prediction2="";
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:100,dest_width:340
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
  Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_url+'">';
  });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AEFmoGMlc/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    synth=window.speechSynthesis;
    speakdata1="The first prediction is "+Prediction1;
    speakdata2="The second prediction is "+prediction2;
    utter=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utter);
}
 