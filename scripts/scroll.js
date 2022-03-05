//mikhaym ye ba harekate mouse scroll konim be darsad az kolle scrol size
//ba click toggle on/off mishe

let div = document.createElement("div");
let messageBox = document.querySelector(".message");
let buffer = 0;

// i just created many divs .
div.innerHTML = ` <div style="background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(113,191,141,1) 41%, rgba(221,179,88,1) 100%); height: 100px; width: 100px; margin: 10px auto; border-radius:20%;"></div>`;
for (let index = 0; index < 200; index++) {
    let divCopy = div.cloneNode(true);
    document.body.appendChild(divCopy);
}

document.addEventListener("mousemove", moveHandler);
document.addEventListener("click", toggle);

// per click we will delete or add eventListener for dom
function toggle() {
    if (buffer % 2 == 0) {
        document.removeEventListener("mousemove", moveHandler);
        document.body.style.filter = "grayscale(70%)";
        buffer++;
        
    } else {
        document.addEventListener("mousemove", moveHandler);
        document.body.style.filter = "grayscale(0)";
        buffer++;
        location.reload()
    }
}

function moveHandler(e) {
    let { scrollHeight, scrollTop, clientHeight, scrollTo } =
        document.documentElement;

    let a = (e.clientY / clientHeight) * 100;
    let b = scrollHeight / 100;
    document.documentElement.scrollTo(0, a * b);

}

document.body.addEventListener("mousemove", messageHandler);
function messageHandler(e) {
    let { scrollHeight, scrollTop, clientHeight, scrollTo } =
        document.documentElement;
    let a = (e.clientY / clientHeight) * 100;
    messageBox.innerHTML = `<h2>it doesn't matter how long your scroll is ... it would scroll by percant ${a.toFixed(
        1
    )}%</h2>`;
}
