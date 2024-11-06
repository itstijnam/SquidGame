const brokenMirrors = [
    document.querySelector("#box2-1-3"),
    document.querySelector("#box6"),
    document.querySelector("#box7"),
    document.querySelector("#box8"),
    document.querySelector("#box5"),
];

const changeImage1 = document.querySelector("#box2point2");
const changeImage2 = document.querySelector("#box2point1");
const handleClick = () => {
    brokenMirrors.forEach(mirror => {
        mirror.style.backgroundColor = "rgba(0,0,0,0)";
    });

    changeImage1.style.backgroundImage = "url('../squidImage/image2.jpg')";
    changeImage2.style.backgroundImage = "url('../squidImage/image1.jpg')";

};
brokenMirrors.forEach(mirror => {
    mirror.addEventListener("click", handleClick);
});
