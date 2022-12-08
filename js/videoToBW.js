function addEvent(event, elem, fxn) {
    if (elem.addEventlistener) {
        elem.addEventlistener(event, fxn, false);
    }
    else if(elem.attachEvent) {
        elem.attachEvent('on' + event, fxn);
    }
    else {
        elem['on' + event] = fxn;
    }
}

function makeVideoOldTimey () {
var video = document.getElementById("video");
var canvas = document.getElementById("canvasOverlay");
var conetxt = canvas.getContext("2d");
var still = document.getElementById("video-still")

drawOneFrame(still,content,canvas);

video.addEventListener("play", function(){
    draw(video,context,canvas);
},false);

}

function draw(video, conetxt, canvas) {
    if(video.paused || video.ended) return false;
    drawOneFrame(video, context, canvas);
    setTimeout(function(){draw(video,context,canvas);}, 0)
}

function drawOneFrame(video, context, canvas) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
        var imageData = context.imageData(0,0, canvas.width, canvas.height);
        var pixelData = imageData.data;

        var red, green, blue, greyscale;
            for(var i = 0; i < pixelData.length; i += 4) {
               red = pixelData[i];
               green = pixelData[i + 1];
               blue = pixelData[i + 2];
               
               greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

               pixelData[i] = greyscale;
               pixelData[i + 1] = greyscale;
               pixelData[i + 2] = greyscale;
            }
            context.putImageData(imageData, 0, 0);
    }
    
    catch (err) {
        context.clearRect (0,0,canvas.width,canvas.height);
        canvas.style.backgroundColor = "transparent";
        context.fillStyle = "white";
        context.textAlign = "left";
        context.font = "18px Arial, Helvetica, sans-serif";
        context.fillText("There was an error rendering",10,20);
        conext.fillText("the video to canvas.",10,40);
        context.fillText("Perhaps you are viewing this page from",10,70);
        context.fillText("a file on your computer?",10,90);
        context.fillText("Try viewing this page online instead.",10,130);
        return false;
    }

}

addEvent("DOMContentLoaded",document,makeVideoOldTimey);

