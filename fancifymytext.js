function bigger() {
    alert("Hello, world!");
    document.getElementById("InputText-1").style.fontSize = "24pt";
}

function moo() {
    const text = document.getElementById("InputText-1").value.toUpperCase();
    const textArray = text.split(".");
    for(let i = 0; i < textArray.length - 1; i++)
        {
            let word = textArray[i];
            word += "-Moo";
            textArray[i] = word;
        }
    document.getElementById("InputText-1").value = textArray.join(".");
}

function fancy() {
    alert("We're fancy!");
    document.getElementById("InputText-1").style.fontWeight = "bold";
    document.getElementById("InputText-1").style.color = "blue";
    document.getElementById("InputText-1").style.textDecoration = "underline";
}

function lame() {
    alert("Not anymore..");
    document.getElementById("InputText-1").style.fontWeight = "normal";
    document.getElementById("InputText-1").style.color = "black";
    document.getElementById("InputText-1").style.textDecoration = "none";
}