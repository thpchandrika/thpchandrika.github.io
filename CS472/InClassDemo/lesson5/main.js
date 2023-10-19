

let str1 = 'hi';
console.log(str1.length);
let str2 = "fdsfdsfsdf";
let name = 'John Smith';
console.log('My name is ' + name + ', good name');
console.log(`My name is ${name}, very good name`);
let str3  = `<table>
<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
<tr>
  <td>Island Trading</td>
  <td>Helen Bennett</td>
  <td>UK</td>
</tr>
<tr>
  <td>Laughing Bacchus Winecellars</td>
  <td>Yoshi Tannamuri</td>
  <td>Canada</td>
</tr>
<tr>
  <td>Magazzini Alimentari Riuniti</td>
  <td>Giovanni Rovelli</td>
  <td>Italy</td>
</tr>
</table>`;


console.log('----------------------');

console.log('fdasfdsfsd' == 1); //NaN

console.log('----------------------');

if(false || 0 || 0.0 || '' || "" || null || undefined){
    console.log('inside truthy block');
} else {
    console.log('inside falsy block........');
}

if(new String("")){
    console.log('inside truthy block*******');
}


console.log('----------------------');
console.log(5 < '5.1');
console.log(5 === '5.0');

console.log('----------------------');
const str = '4';
console.log(typeof str);
console.log(str * '3' );
console.log(3 + '2');

const PI = 3.1415926;
// PI = 3434343;

const obj = {
    x: 1,
    y: 2
};

console.log(obj);

// obj = 13132;
obj.x = 99;
obj.y = 8888;
console.log(obj);