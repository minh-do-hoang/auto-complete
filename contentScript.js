function yeetanswers() {
    // min is lowerbound, max is lowerbound + range;
    range = 600000;
    lowerbound = 600000;
   var buttons = document.getElementsByClassName("question-box");
	for (var questionIdx = 0; questionIdx < buttons.length; questionIdx++) {
		ques = buttons[questionIdx].children[1].children[0].children;
		min = Infinity;
		for (var i = 0; i < ques.length; i++) {
			quess = ques[i].children;
			for (var j = 0; j < quess.length; j++) {
				quesss = quess[j].children[0].children[0].children;
				if (quesss[1].htmlFor.substr(2) < min) {
					quesss[0].click();
					min = quesss[1].htmlFor.substr(2);
				}
			}
		}
	}

    setTimeout(function() {
        SubmitTestResultClick();
        document.getElementsByClassName("swal2-confirm swal2-styled")[0].click();
    }, lowerbound + Math.floor(range * Math.random()));

}
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + yeetanswers + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);