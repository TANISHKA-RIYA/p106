//https://teachablemachine.withgoogle.com/models/CQVA3ZsOG/

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qo5slhUfM/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0
var cat=0
var tiger=0
var cow=0

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML=results[0].label;

        random_r=Math.floor(Math.random()*255+1);
        random_g=Math.floor(Math.random()*255+1);
        random_b=Math.floor(Math.random()*255+1);

        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("detection").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        imagevar = document.getElementById("image").src

    if (results[0].label == "bark") {
        document.getElementById("image").src = "dog.gif";
        dog = dog + 1 ;
        document.getElementById("dogsound").innerHTML=dog;
    } else if (results[0].label == "meow") {
        document.getElementById("image").src = "cat.gif";
        cat = cat + 1 ;
        document.getElementById("catsound").innerHTML=cat;
    } else if (results[0].label == "roar") {
        document.getElementById("image").src = "tiger.jpg";
        tiger = tiger + 1 ;
        document.getElementById("tigersound").innerHTML=tiger;
    } else if (results[0].label == "moo") {
        document.getElementById("image").src = "cow.png";
        cow = cow + 1 ;
        document.getElementById("cowsound").innerHTML=cow;
    } else {
        document.getElementById("image").src = "eardefault.avif";
    }
}
}