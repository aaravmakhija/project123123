Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });

    window.alert("Please click Ok To Captured Your Image")
}
console.log('ml5 version',ml5.version);
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById('object_result').innerHTML=result[0].label;
        document.getElementById('accuracy_result').innerHTML=result[0].confidence;
    }
    }

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult);
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7qBgCBz5j/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded !');
    console.log('This Web Application Is Made By Aarav makhija');
    
}