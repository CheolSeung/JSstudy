let obj = {name: '철수', age: '20'};
for(let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 반복문을 사용해 1부터 100까지의 합을 출력하는 코드
let sum = 0;
for (let i=1; i<=100; i++) {
    sum = sum + i;
}
console.log(sum);

// 숫자 1부터 999까지 짝수가 몇 개인지 출력하는 코드
let count = 0;
for (let i=1; i<1000; i++) {
    if (i % 2 == 0)
        count = count + 1
    };
console.log(count);

// 구구단 1단부터 9단까지 한 번에 출력하는 코드
for (let i=1; i<10; i++) {
    for (let k=1; k<10; k++) {
        console.log(`${i} x ${k} = ${i*k}`);
    };
};

// 100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를 모두 출력하는 코드
// (암스트롱 수: 세 자리의 정수 중 각 자리의 수를 세제곱한 수의 합과 자신이 같은 수. ex-153)

for (let i=100; i<1000; i++) {
    let num = String(i);
    let first = parseInt(num.slice(0,1));
    let second = parseInt(num.slice(1,2));
    let third = parseInt(num.slice(2,3));
    if((first ** 3) + (second ** 3) + (third ** 3) == i)
        console.log(i);
}