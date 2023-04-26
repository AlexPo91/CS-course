import { Matrix } from '..utils/matrix';

const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.src = url;
  });
};

const createNewCanvas = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  return { canvas, ctx };
};

const renderImagetoCanvas = (url: string, canvas: HTMLCanvasElement) =>
  loadImage(url).then((image: HTMLImageElement) => {
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx!.drawImage(image, 0, 0);
  });

const invertFilter = (imageData: ImageData): ImageData => {
  const matrix = Math.ceil(new Matrix(imageData.data.length / 4, 4));
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = imageData.data[i] ^ 255;
    imageData.data[i + 1] = imageData.data[i + 1] ^ 255;
    imageData.data[i + 2] = imageData.data[i + 2] ^ 255;
  }
  return imageData;
};

const grayscaleFilter = (imageData: ImageData): ImageData => {
  for (let i = 0; i < imageData.data.length; i += 4) {
    const grey = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    imageData.data[i] = grey;
    imageData.data[i + 1] = grey;
    imageData.data[i + 2] = grey;
  }
  return imageData;
};

const grayscaleFromImage = (
  url: string
): Promise<{ imageData: ImageData; width: number; height: number }> => {
  return new Promise((resolve) => {
    loadImage(url).then((image) => {
      const { canvas, ctx } = createNewCanvas();
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx!.drawImage(image, 0, 0);

      const imageData = ctx!.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
      grayscaleFilter(imageData);
      resolve({
        imageData,
        width: image.width,
        height: image.height,
      });
    });
  });
};

const renderCanvas = (canvas: HTMLCanvasElement) => {
  const { canvas: newCanvas, ctx: newCtx } = createNewCanvas();
  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;
  newCtx!.drawImage(canvas, 0, 0);
  return { newCanvas, newCtx };
};

const invertFromCanvas = (canvas: HTMLCanvasElement) => {
  const { newCtx } = renderCanvas(canvas);
  const imageData = newCtx!.getImageData(0, 0, canvas.width, canvas.height);
  const invertImageData = invertFilter(imageData);
  return {
    imageData: invertImageData,
    width: canvas.width,
    height: canvas.height,
  };
};

const getGrayScaledFromCanvas = (canvas: HTMLCanvasElement) => {
  const { newCtx } = renderCanvas(canvas);
  const imageData = newCtx!.getImageData(0, 0, canvas.width, canvas.height);
  const grayscaledImageData = grayscaleFilter(imageData);
  return {
    imageData: grayscaledImageData,
    width: canvas.width,
    height: canvas.height,
  };
};

export { invertFromCanvas, renderImagetoCanvas, grayscaleFromImage };
