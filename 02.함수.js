function sum(num1, num2){
    return num1 + num2;
}
const result = sum(5, 2);   // 변수에 할당해야 반환값 사용가능
console.log(result);

// 코드에서 max 변수의 출력값이 배열 중 가장 큰 숫자가 될 수 있도록 getArrayNumber() 함수를 완성.
// 이때, 배열 요소는 반드시 숫자형이라고 가정.

/*function getArrayNumber([a, b, c]){
    if (a>b && a>c) {
        return a
    } else if (b>a && b>c) {
        return b
    } else if (c>a && c>b) {
        return c
    }
}
const max = getArrayNumber([10, 50, 30]);
console.log(max);*/

function getArrayNumber(arr){
    let result = 0;
    for(let i =0; i<arr.length; i++){
        if(result < arr[i]) 
            result = arr[i];
    }
    return result;
}
const max = getArrayNumber([10, 50, 30]);
console.log(max);

// 즉시 실행 함수
(function init() {
    console.log('initialized!');
})();
// init()  재호출 안됨 - 데이터가 남아있지 않음