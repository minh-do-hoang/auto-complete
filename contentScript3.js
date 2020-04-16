async function move(){
	await sleep(100);
	document.getElementById("start-test").click();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

move();