//API que se utiliza para reconocer lo que decimos y convertirlo en texto.
// almacenamos esta API en una variable
var SpeechRecognition = window.webkitSpeechRecognition;
// usamos esa variable de tipo Web Speech para asignarle a otra variable, paso intermedio un puente

// new palabra clave para crear una variable de tipo WEB SPEECH API
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
//Código JS para convertir voz en texto
//Siempre que se pulse el botón de inicio queremos que textarea esté 
//vacío. Para eso actualizamos textarea con un valor vacío
function start() {
    Textbox.innerHTML = "";
    recognition.start();
}
//función recursiva, una función que se usa dentro de otra, puede ser en algunos casos ella misma...
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "Toma mi selfie") { console.log("toma mi selfie---"); speak(); }
    if (Content == "take my selfie") { console.log("take my selfie---"); speak(); }

}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);



}

camera = document.getElementById("camera");
Webcam.set({ width: 360, height: 250, image_format: 'png', png_quality: 90 });
function take_selfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>'
            ;
    })
    ;
}
function save() { link = document.getElementById("link");
 image = document.getElementById("logo_img").scr;
  link.href = image;
   //guarda en automático la imagen que acabamos de tomar 
   link.click(); }
