document.querySelector('h2').innerText = 'To jest mniejszy nagłówek';
// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('ul > li:nth-child(1)').remove();
// })

function testFunc() {
  let value = 1;
  value = nestedFunc(1);

  return value;
}

function nestedFunc(v) {
  return v + 1;
}

testFunc();
