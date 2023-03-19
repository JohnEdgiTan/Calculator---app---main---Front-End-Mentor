let deletetext =document.getElementById("screen")
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

function deleteoption(){
    var value=deletetext.value
    deletetext.value=value.substr(0,value.length-1)
}
function themeone(){
    var body=document.querySelector('body');
    body.classList.remove('active1');
    body.classList.remove('active2');

}
function themetwo(){
    var body=document.querySelector('body');
    body.classList.add('active1');
    body.classList.remove('active2');
}
function themethree(){
    var body=document.querySelector('body');
    body.classList.add('active2');
    body.classList.remove('active1');
}
arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";
      if (index == 0) {
        themeone();
      } else if (index == 1) {
        themetwo();
      } else {
        themethree();
      }
      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });