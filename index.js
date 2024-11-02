let username;

document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("userName").value;

    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    // Increase the canvas resolution for sharper text
    const scale = window.devicePixelRatio || 1;
    canvas.width = 600 * scale;
    canvas.height = 600 * scale;
    canvas.style.width = "600px";
    canvas.style.height = "600px";

    //scale the context 
    ctx.scale(scale, scale);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "20px Arial";
    ctx.fillstyle = "black";

    ctx.fillText(username, 50, 20);
}