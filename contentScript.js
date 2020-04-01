function yeetanswers() {
  var buttons = document.querySelectorAll('input[type="radio"]')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].checked = true;
    buttons[i].click();
  }
  MinID = parseInt(buttons[0].value);
  for (i = 1; i < 4; i++) {
    if (parseInt(buttons[i].value) < MinID)
      MinID = parseInt(buttons[i].value);
  }
  MinID %= 4;
  for (i = 0; i < testResultLocalObject.length; i++) {
    SaveUserAnswer(testResultLocalObject[i].QuestionId, (Math.floor((parseInt(testResultLocalObject[i].AnswerId) - MinID) / 4) * 4 + MinID).toString());
  }

  setTimeout(function () {
    SubmitTestResultClick();
    document.getElementsByClassName("swal2-confirm swal2-styled")[0].click();
  }, 600000);
// change that 600000 to the number of seconds x1000 to change when to submit
}
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + yeetanswers + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);
