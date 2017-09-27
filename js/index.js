const n = Number(prompt("Enter your number of Fibonacci's sequence"));

function recursive(n){
  if ( n === 0 ) return 0;
  if (n === 1) return 1;
  return recursive(n-1) + recursive(n-2);
}

function bine(n){
  return (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5);
}

document.write("Recursive metod :" + recursive(n) + '<br>' + "Bine's formula :" +  bine(n));