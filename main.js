//https://teachablemachine.withgoogle.com/models/CQVA3ZsOG/

function startclassification(){
    navigator.MediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CQVA3ZsOG/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}