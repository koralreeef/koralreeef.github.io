
function oneSwitch(){
    setImage("https://pbs.twimg.com/media/FrqvohpaMAIvVA7?format=png&name=small", "miao miao!");
    showImage();
}

function twoSwitch(){
    setImage("https://cdn.discordapp.com/attachments/672669652358397965/1093463171219587072/452023.png", "da sink");
    showImage();
}

function threeSwitch(){
    setImage("https://cdn.discordapp.com/attachments/672669652358397965/1092761537233555486/442023.jpg", "this was ok");
    showImage();
}

function fourSwitch(){
    setImage("https://cdn.discordapp.com/attachments/672669652358397965/1097975156686725130/4192023.png", "good pose");
    showImage();
}

function showImage() {
    var image = id('yippie');
    const alt = id('yi');
    alt.innerHTML = window.localStorage.getItem("alt");
    console.log(alt.value);
    console.log(window.localStorage.getItem("src"));
    image.src = window.localStorage.getItem("src");
    image.alt = window.localStorage.getItem("alt");
}

function setImage(src, alt, width, height){
    window.localStorage.setItem("src", src);
    window.localStorage.setItem("alt", alt);
}

function id(id) {
    return document.getElementById(id);
}