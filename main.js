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
 function identifyimage(){
    img=document.getElementById("capturedimage");
    classifier.classify(img,getresult);
 }
 function getresult(error,result){
   if (error){
     console.log(error);
   }
   else{
     console.log(result);
     Prediction1=result[0].label;
     prediction2=result[1].label;
     document.getElementById("result_emotion_name").innerHTML=Prediction1;
     document.getElementById("result_emotion_name2").innerHTML=prediction2;
     speak();
     if(Prediction1=="happy"){
       document.getElementById("update_emoji").innerHTML="&#128522;";
     }
     if(Prediction1=="sad"){
      document.getElementById("update_emoji").innerHTML="&#128532;";
    }
    if(Prediction1=="angry"){
      document.getElementById("update_emoji").innerHTML="&#128548;";
    }
    if(prediction2=="happy"){
      document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if(prediction2=="sad"){
     document.getElementById("update_emoji2").innerHTML="&#128532;";
   }
   if(prediction2=="angry"){
     document.getElementById("update_emoji2").innerHTML="&#128548;";
   }
   }
 }