async function load() {
    while (document.getElementsByClassName("btn btn-primary show-more")[0].style.display != "none") {
        document.getElementsByClassName("btn btn-primary show-more")[0].click();
        console.log(document.getElementsByClassName("btn btn-primary show-more")[0]);
        await sleep(100);
    }
}
async function choose() {
    await load();
    await sleep(100);
    chrome.storage.local.get({
        "list": []
    }, async function(result) {
        if (result.list.length == 0) {
            await sleep(100);
            if (document.getElementsByClassName("data-popover-userlogined-ul").length) {
                document.getElementsByClassName("data-popover-userlogined-ul")[0].children[1].children[0].click();
            }
        } else {
            btnlist = document.getElementsByClassName("btn btn-light");
            index = -1;
            for (var i = 0; i < btnlist.length; i++) {
				if(btnlist[i].href.includes("gioi-han")){
					continue;
				}
                if (!result.list.includes(btnlist[i].href.substring(btnlist[i].href.lastIndexOf("/") + 1, btnlist[i].href.lastIndexOf("-")))) {
                    result.list.push(btnlist[i].href.substring(btnlist[i].href.lastIndexOf("/") + 1, btnlist[i].href.lastIndexOf("-")));
                    index = i;
                    break;
                }
            }
            chrome.storage.local.set({
                "list": result.list
            }, function() {});
            if (index != -1) {
                await sleep(100);
                document.getElementsByClassName("btn btn-light")[index].click();
            }
        }
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
choose();