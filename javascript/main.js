const numberInput = document.querySelector('#numberInput')
const numBtn = document.querySelector('#numberBtn')
const outOne = document.querySelector('#out1')
const numberInput1 = document.querySelector('#numberInput1')
const numberInput2 = document.querySelector('#numberInput2')
const numsBtn = document.querySelector('#numbersBtn')
const outTwo = document.querySelector('#out2')



numBtn.addEventListener('click', (e) => {
  let multifive = []
  console.clear()
  let a = Number(numberInput.value);
  let i = 1;
  while (i < a){
    i++;
    let rest = i % 5;
    if (rest == 0){
      multifive.push(i); 
    }
  }
  console.log(multifive)
})

numsBtn.addEventListener('click', (e) => {
  console.clear();
  e.preventDefault();
  let i = 1;
  while (i <= 50) {
    if (i == Number(numberInput1.value) || i == Number(numberInput2.value)){
      console.log("Loteria " + i)
    } else {
      console.log(i);
    }
  i++;
  }
})
