//your JS code here. If required.
function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

const outputElement = document.getElementById('output');

delayedHello()
  .then((message) => {
    outputElement.textContent = message;
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });