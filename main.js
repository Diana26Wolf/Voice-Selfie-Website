//First part is SPEECH TO TEXT
var SpeechRecogniton = window.webkitSpeechRecognition
var recognition= new SpeechRecogniton()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function (event){
    console.log(event)
    var content= event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= content
    if(content=="click my selfie"){
speak()
    }
}
//Second Part is TEXT TO SPEECH
function speak(){
    synth= window.speechSynthesis
    speakdata= "Taking your selfie in 5 seconds"
    utterThis= new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    //Third Part is  CAMERA
    Webcam.attach(camera)
    setTimeout(function()
    {
        take_snapshot()
        save()
    },7000)
}
camera= document.getElementById("camera")
Webcam.set({
    width:360,
    height: 260,
    image_format:'jpeg',
    jpeg_quality:90,
    flip_horiz: true
})

function take_snapshot(){
    Webcam.snap(
        function(data_url){
            document.getElementById("result").innerHTML= "<img id='selfie' src= '"+data_url+"'>"
        }
    )

}
function save(){
    link= document.getElementById("link")
    pic= document.getElementById("selfie").src
    link.href=pic
    link.click()
}