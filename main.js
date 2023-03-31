var c = document.getElementById("canvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var ctx = c.getContext("2d");
var ciz = false;
var genislik = document.body.clientWidth;
var gradient = ctx.createLinearGradient(0, 0, genislik, 0);
const colors = ["magenta",
    "blue",
    "white",
    "lightblue",
    "lightgreen",
    "yellow",
    "orange",
    "red",
    "white"];
let count = 1;
let x = 0;

gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.1", "blue");
gradient.addColorStop("0.2", "white");
gradient.addColorStop("0.3", "lightblue");
gradient.addColorStop("0.4", "lightgreen");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("0.6", "orange");
gradient.addColorStop("0.7", "red");
gradient.addColorStop("0.8", "white");
gradient.addColorStop("0.9", "red");
gradient.addColorStop("1.0", "white");

function changer() {
    if (x < count && count<colors.length) {
        count++;
        x++;
    }else{
        x=0;
        count=1;
    }
}


ctx.clearRect(0, 0, c.width, c.height);
ctx.fillRect(0, 0, c.width, c.height);
ctx.strokeStyle = colors[x];
ctx.lineWidth = 15;

c.addEventListener("mousedown", (e) => {
    ctx.moveTo(e.pageX, e.pageY);
    ciz = true;
    changer();
});

c.addEventListener("mouseup", (e) => {
    ciz = false;
});

c.addEventListener("mousemove", (e) => {
    if (ciz) {
        ctx.lineTo(e.pageX, e.pageY);
        ctx.moveTo(e.pageX, e.pageY);
        ctx.stroke();
    }
})