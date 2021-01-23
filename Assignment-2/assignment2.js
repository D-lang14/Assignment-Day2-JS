
// Q.1

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
// answer : undefined


// Q.2

var arr = [1, 2, 3, 4, 5];
var s = 0;
for (i = 0; i < arr.length; i++) {
    s += arr[i];
}
console.log('Sum: ' + s);
// answer : 15
