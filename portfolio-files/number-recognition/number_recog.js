let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", () => { isDrawing = true; });
canvas.addEventListener("mouseup", () => { isDrawing = false; ctx.beginPath(); });
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("result").textContent = "";
}

async function predictDigit() {

    /* This is the issue */
    const model = await tf.loadLayersModel('./models/mnist/model.json');


    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let input = tf.browser.fromPixels(imageData, 1)
        .resizeNearestNeighbor([28, 28])
        .toFloat()
        .div(255.0)
        .expandDims(0);
    
    const prediction = model.predict(input);
    const predictedDigit = prediction.argMax(1).dataSync()[0];
    
    document.getElementById("result").textContent = `Prediction: ${predictedDigit}`;
}