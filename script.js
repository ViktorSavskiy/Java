/*for (i = 0; i <= 10; i++) {
    if (i == 0) {
      console.log( i + '-' + 'это ноль');
    }
    if (i % 2 == 0) {
        console.log( i + '-' + 'это четное число' );
    }
    if (i % 2 != 0) {
        console.log( i + '-' + 'это не четное число' );
    }
  }


  const arr = [1, 2, 3, 4, 5, 6, 7];
  delete arr[3];
  delete arr[4];
  console.log(arr);*/
max = 9;
min= 0;
const arr =[];
for (let index = 0; index < 5; index++) {
    arr[index] = (Math.floor(Math.random() * (max - min)) + min);
}
console.log(arr) 
summaMassiva = 0;
for (let i = 0; i < arr.length; i++) {
    summaMassiva += arr[i];
}
console.log(summaMassiva);

console.log(Math.max(arr));
let i = 0;
while (i < arr.length) {
    if (arr[i] === 3) {
        console.log('В массиве есть 3');
        break
    }
    else {
        i++;
    }
    {
        console.log('В массиве нет 3');
    }
}