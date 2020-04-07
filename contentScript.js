function yeetanswers() {
// min is lowerbound, max is lowerbound + range;
  range = 600000;
  lowerbound = 600000;
var buttons = document.getElementsByClassName("col-2 text-right");
for(var i=0;i<buttons.length;i+= 4){
    min = buttons[i].childNodes[3].htmlFor.substr(2);
    min_button = 0;
     for(var j = 1; j < 4; j++){
        if(min > buttons[i + j].childNodes[3].htmlFor.substr(2)){
        min = buttons[i + j].childNodes[3].htmlFor.substr(2);
        min_button = j;
        }
     }
     buttons[i + min_button].childNodes[1].click();
}


  setTimeout(function () {
    SubmitTestResultClick();
    document.getElementsByClassName("swal2-confirm swal2-styled")[0].click();
  }, lowerbound + Math.floor(range * Math.random()));
 
}
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + yeetanswers + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);
