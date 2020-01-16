const colors = {
  bgMain: '#232',
  bgLight: '#586',
  textMain: '#eee',
};

const size = 32;
const lineWidth = 2;
const bottom = 28;
const left = 3;
const right = 28;
const top = 3;
const poleX = 8;
const manX = 22;
const manHead = 10;
const manHeadRadius = 3;
const neck = 1;
const limp = 4;
const body = 7;

function drawCanvasHangman(stage: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas is not supported');

  const gradient = context.createLinearGradient(0, 0, 0, size);
  gradient.addColorStop(0, colors.bgMain);
  gradient.addColorStop(1, colors.bgLight);

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  context.lineWidth = lineWidth;
  context.strokeStyle = colors.textMain;

  // 1
  if (stage > 0) {
    context.moveTo(left, bottom);
    context.lineTo(right, bottom);
  }

  // 2
  if (stage > 1) {
    context.moveTo(poleX, bottom);
    context.lineTo(poleX, top);
  }

  // 3
  if (stage > 2) {
    context.lineTo(manX + manHeadRadius, top);
  }

  // 4
  if (stage > 3) {
    context.moveTo(manX, top);
    context.lineTo(manX, manHead - manHeadRadius);
  }

  context.stroke();

  // 5
  if (stage > 4) {
    context.beginPath();
    context.arc(manX, manHead, manHeadRadius, 0, 2 * Math.PI);
    context.stroke();
  }

  // 6
  if (stage > 5) {
    context.moveTo(manX, manHead + manHeadRadius);
    context.lineTo(manX, manHead + manHeadRadius + body);
  }

  // 7
  if (stage > 6) {
    context.moveTo(manX, manHead + manHeadRadius + neck);
    context.lineTo(manX - limp, manHead + manHeadRadius + neck + limp);
  }

  // 8
  if (stage > 7) {
    context.moveTo(manX, manHead + manHeadRadius + neck);
    context.lineTo(manX + limp, manHead + manHeadRadius + neck + limp);
  }

  // 9
  if (stage > 8) {
    context.moveTo(manX, manHead + manHeadRadius + body);
    context.lineTo(manX - limp, manHead + manHeadRadius + body + limp);
  }

  // 10
  if (stage > 9) {
    context.moveTo(manX, manHead + manHeadRadius + body);
    context.lineTo(manX + limp, manHead + manHeadRadius + body + limp);
  }

  context.stroke();

  return canvas.toDataURL();
}

export default drawCanvasHangman;
