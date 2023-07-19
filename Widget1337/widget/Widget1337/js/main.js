const getRandomRange = (min = 0, max = 0) => Math.random() * (max - min) + min;

const randomize = () => {
  return getRandomRange(150, 200).toFixed(0);
};
const alcoPulse = () => {
  const el = document.getElementById("content-text");
  console.log(el);
  if (el) {
    //Братан, пульс 150
    setInterval(() => {
      el.innerHTML = `Братан, пульс ${randomize()}`;
    }, 400);
  }
};
let x = 200;
let y = 200;
let width = 0;
let height = 0;
const initialPathData = [
  { type: "M", values: [x + width / 2, y] },
  { type: "L", values: [x + width, y + height] },
  { type: "L", values: [x, y + height] },
];
let pathData = initialPathData;

let createTrianglePath = (x = 0, y = 0, width = 100, height = 200) => {
  let path = document.querySelector("path");

  path.setPathData(pathData);
  return path;
};

let trend = true;
let intervalID = null;

window.onload = function () {
  console.log("+[window.onload]");
  alcoPulse();
  createTrianglePath();

  intervalID = setInterval(() => {
    const lastEl = pathData[pathData.length - 1];
    const [x, y] = lastEl.values;
    let newEl = {
      ...lastEl,
    };
    let corrLine = {
      ...lastEl,
    };
    let hLine = {
      ...lastEl,
    };

    if (pathData.length > 28) {
      const [first, second, ...rest] = pathData;

      const x = rest.map((v) => {
        return { ...v, values: [v.values[0] - 30, v.values[1]] };
      });
      pathData = [first, ...x];
      if (trend) {
        newEl.values = [lastEl.values[0], lastEl.values[1] + 30];
        corrLine.values = [lastEl.values[0], lastEl.values[1]];
        hLine.values = [corrLine.values[0], lastEl.values[1]];
      } else {
        newEl.values = [lastEl.values[0], lastEl.values[1] - 30];
        corrLine.values = [lastEl.values[0], lastEl.values[1]];
        hLine.values = [corrLine.values[0], lastEl.values[1]];
      }
    } else {
      if (trend) {
        newEl.values = [lastEl.values[0] + 10, lastEl.values[1] + 30];
        corrLine.values = [lastEl.values[0] + 40, lastEl.values[1]];
        hLine.values = [corrLine.values[0] + 30, lastEl.values[1]];
      } else {
        newEl.values = [lastEl.values[0] + 10, lastEl.values[1] - 30];
        corrLine.values = [lastEl.values[0] + 40, lastEl.values[1]];
        hLine.values = [corrLine.values[0] + 30, lastEl.values[1]];
      }
    }

    trend = !trend;

    pathData.push(newEl);
    pathData.push(corrLine);
    pathData.push(hLine);

    let path = document.querySelector("path");
    path.setPathData(pathData);
  }, 1000);
};
window.onunload = function () {
  clearInterval(intervalID);
  pathData = initialPathData;
  let path = document.querySelector("path");
  path.setPathData(pathData);
};
