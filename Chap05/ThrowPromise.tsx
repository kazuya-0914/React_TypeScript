import wrapPromise from "./wrapPromise";

const info = getInfo();

export default function ThrowPromise() {
  const result = info.get();
  return <p>{result}</p>
}

function getInfo() {
  return wrapPromise<string>(new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Succeeded!!');
      } else {
        reject('Error!!');
      }
    }, 2000);
  }));
}