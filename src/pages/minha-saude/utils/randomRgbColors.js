export default function randomRgbColors(size) {
  const colorArray = [];
  for(let i = 0; i < size; i++){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    colorArray.push('rgb(' + r + ',' + g + ',' + b + ')');
  }
  return colorArray;
};