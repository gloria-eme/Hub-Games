const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

const makeRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
} 
  
export const setBackgroundColor = () => {
    const body = document.querySelector("body");
    const randomColor = makeRandomColor();
    body.style.backgroundColor = randomColor;
    return randomColor;  
}




  