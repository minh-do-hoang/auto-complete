async function move(){
	await sleep(100);
    document.getElementsByClassName("navbar-brand ")[0].click();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

move();