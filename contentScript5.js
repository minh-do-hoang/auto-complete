document.getElementsByClassName("btn btn-primary show-more")[0].click();
document.getElementsByClassName("btn btn-primary show-more")[0].click();
document.getElementsByClassName("btn btn-primary show-more")[0].click();
document.getElementsByClassName("btn btn-primary show-more")[0].click();
document.getElementsByClassName("btn btn-primary show-more")[0].click();
setTimeout(function () {
  chrome.storage.local.get({
  "list": []
}, function (result) {
if(result.list.length == 0){
	setTimeout(function () {
  document.getElementsByClassName("data-popover-userlogined-ul")[0].children[1].children[0].click();
}, 100);

}else{
  console.log(result.list);
  btnlist = document.getElementsByClassName("btn btn-light");
  console.log(btnlist);
	index = -1;
  for( var i = 0; i < btnlist.length; i++){
	  if(!result.list.includes(btnlist[i].href.substring(btnlist[i].href.lastIndexOf("/") + 1,btnlist[i].href.lastIndexOf("-")))){
            result.list.push(btnlist[i].href.substring(btnlist[i].href.lastIndexOf("/") + 1,btnlist[i].href.lastIndexOf("-")));
			index = i;
		  break;
	  }
  }
  console.log(index);
  console.log(result.list);
  chrome.storage.local.set({
    "list": result.list
  }, function () {});
  if(index != -1){
  setTimeout(function () {
    document.getElementsByClassName("btn btn-light")[index].click();
  }, 100);
  }
}});
 }, 1000);
