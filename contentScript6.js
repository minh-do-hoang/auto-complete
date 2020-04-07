alist = document.getElementsByClassName("table table-bordered user-info-table")[0].getElementsByTagName("a");
slist = [];
for(var i = 0; i < alist.length; i++){
   slist.push(alist[i].href.substring(alist[i].href.lastIndexOf("/") + 1, alist[i].href.lastIndexOf("-")));
}
console.log(slist);
chrome.storage.local.set({"list" : slist});
setTimeout(function () {
  document.getElementsByClassName("navbar-brand ")[0].click();
}, 100);