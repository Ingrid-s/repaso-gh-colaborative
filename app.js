
//1010
function readFile() {
  if (this.files && this.files[0]) {
    var newImages = new FileReader();
    newImages.addEventListener("load", paintImage);
    newImages.readAsDataURL(this.files[0]);
  }
}
function paintImage(e) {
  var realTimeImage = document.getElementById("real-time-image");
  realTimeImage.src = e.target.result;
  // console.log(e.target);
}

//termina 1010

//1011
// Obteniendo los elemtos
var realTimeComment = document.getElementById("real-time-comment");
var area = document.getElementById("text-comment");
var sendComment = document.getElementById("send");
var sizeText = document.getElementsByClassName("size-text");
var alignText = document.getElementsByClassName("align-text");
var textColor = document.getElementById("text-color");
var backgroundColor = document.getElementById("background-color");
var commentedPost = document.getElementById("comment-posted");
var selectImage = document.getElementById("select-image");
// Asignando eventos a los elementos
area.addEventListener("keyup", getTextPreview);
sendComment.addEventListener("click", printComments);
textColor.addEventListener("click", changeTextColor);
backgroundColor.addEventListener("click", chnageBackgroundColor);
selectImage.addEventListener("change", readFile);
//termina 1011

//inicia 1012
// ciclos para recorrer las clases de los botones
for (var i = 0; i < sizeText.length; i++) {
  sizeText[i].addEventListener("click", changeSizeText);
}
for (var i = 0; i < alignText.length; i++) {
  alignText[i].addEventListener("click", changeAlignText);
}
// para que se vea en tiempo real
function getTextPreview() {
  var enteredText = area.value;
  realTimeComment.innerText = enteredText;
  return realTimeComment;
}
// Para cambiar los tamaños de los comentarios
function changeSizeText() {
  if (this.value === "large") {
    realTimeComment.style.fontSize = "50px";
  } else if (this.value === "medium") {
    realTimeComment.style.fontSize = "40px";
  } else {
    realTimeComment.style.fontSize = "20px";
  }
}
//termina 1012

// código faltante en la numeración

// Para cambiar  la alineacion del texto
function changeAlignText (){
  realTimeComment.style.textAlign = this.value;
}
// Para cambiar el color del texto
function changeTextColor (){
var textColor = prompt("Elige el color del texto");
realTimeComment.style.color = textColor;
}
// Cambiar el color de fondo del texto
function chnageBackgroundColor (){
  var backgroundText = prompt("Elige el fondo de tu texto");
  realTimeComment.style.backgroundColor = backgroundText;
}
//termina código faltante en la numeración
