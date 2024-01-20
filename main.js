function startClassification()
 {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-c3cTD9QY/model.json', modelReady);
    
}


function modelReady(){
    classifier.classify(gotResults);
}

function modelReady()
{
    
}