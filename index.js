// petit cercle
const circle1 = document.querySelector(".followMouse1");
console.log(circle1);

//moyen cercle
const circle2 = document.querySelector(".followMouse2");
console.log(circle2);

//grand cercle
const circle3 = document.querySelector(".followMouse3");
console.log(circle3);

window.addEventListener("mousemove", (e) => {
    circle1.style.top = e.pageY + "px";
    circle1.style.left = e.pageX + "px";

    setTimeout(() => {
        circle2.style.top = e.pageY + "px";
        circle2.style.left = e.pageX + "px";
    }, 150);

    setTimeout(() => {
        circle3.style.top = e.pageY + "px";
        circle3.style.left = e.pageX + "px";
    }, 200);
});
