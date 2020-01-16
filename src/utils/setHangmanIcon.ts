import drawCanvasHangman from './drawCanvasHangman';

function setHangmanIcon(stage: number) {
  try {
    const icon = drawCanvasHangman(stage);
    const element = document.querySelector('link[rel=icon]');
    if (element) {
      element.setAttribute('href', icon);
    }
  } catch (err) {
    // Ignore error
  }
}

export default setHangmanIcon;
