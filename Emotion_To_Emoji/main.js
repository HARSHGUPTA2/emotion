Webcam.set({
width : 350,
height : 300,
image_format : 'png',
png_quality : 90
});



camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id ="captured_image" src="'+data_uri+'"/>';
    });

}

console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modalloaded);

function modalloaded(){
    console.log("modal is loaded");
}

perdection_1 = "";
perdection_2 = "";

function speak(){
    var synth = window.SpeechSynthesis;
speak_data_1 = "the first perdection is " + perdection_1;
speak_data_2 = "and the second perdection is " + perdection_2;
var uttarthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(uttarthis);
}

function check(){
    alert("hi");
    img=document.getElementById('captured_img');
    classifier.classify(img,gotResult);
}

function gotResult(error, results) { 
    if (error) { console.error(error); 
} else { console.log(results); 
    document.getElementById("result_emotion_name").innerHTML = results[0].label; 
    document.getElementById("result_emotion_name2").innerHTML = results[1].label; 
    prediction_1 = results[0].label; prediction_2 = results[1].label; speak();
}}
