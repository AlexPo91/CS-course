import { invertFromCanvas, renderImagetoCanvas, grayscaleFromImage } from "./canvas";

const canvas = document.querySelector("#canvas-1") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const btn1 = document.querySelector("#button-1");
const btn2 = document.querySelector("#button-2");
const btn3 = document.querySelector("#button-3");

renderImagetoCanvas("./222.jpg", canvas);

btn1!.addEventListener("click", () => renderImagetoCanvas("./222.jpg", canvas));

btn2!.addEventListener("click", () => {
    console.log('click')
    grayscaleFromImage("./222.jpg").then(({ imageData, width, height }) => {
        canvas.width = width;
        canvas.height = height;
        ctx!.putImageData(imageData, 0, 0);
    });
});

btn3!.addEventListener("click", () => {
    const imageFromCanvas = invertFromCanvas(canvas);
    console.log(imageFromCanvas)
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.putImageData(imageFromCanvas.imageData, 0, 0);
});