async function move() {
    alist = document.getElementsByClassName("table table-bordered user-info-table")[0].getElementsByTagName("a");
    slist = [];
    for (var i = 0; i < alist.length; i++) {
        slist.push(alist[i].href.substring(alist[i].href.lastIndexOf("/") + 1, alist[i].href.lastIndexOf("-")));
    }
    console.log(slist);
    chrome.storage.local.set({
        "list": slist
    });
    await sleep(100);
    document.getElementsByClassName("navbar-brand ")[0].click();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


move();