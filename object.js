//Task 1
function getCookingTime(eggsAmount) {
    var count;
    count = Math.ceil(eggsAmount / 5) * 5; 
    console.log(count);
}
// getCookingTime(0); //returns 0
// getCookingTime(5); //returns 5
// getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)

// Task 2
function getNumber (array) {
var result1, result2, count = 0;
        for (var i = 0; i < array.length; i++) {// 1 // 5 
        if (array[i] % 2 === 0) { // 1 % 2 != 0 // 5 % 2 != 0 //4 % 2 == 0
            result1 = array[i]; // resultEven = 4 
            count++;
        } else {  
            result2 = array[i]; // resultOdd = 1 // resultOdd = 5
        }
    }
    switch (count) {
        case 1: console.log(result1); break;
        default: console.log(result2); break;
    }
}
// getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4
// getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13

//Task 3 не закончила
// function findTitle(array, 'string') {
//     return [{ title has this substring }]
    
// }
var findTitle = function(arr, str){
    for (var i = 0; i < arr.length; i++){ // проходимся по объектам
        for ( const [key, value] of Object.entries(arr[i])) {//достаем каджый объект в формате [key, value]
            // console.log(`${key}: ${value}`);
            if (key === "title") { // если есть ключи титл
                console.log(value);
            }
        }
    }
    //такс...теперь нужно сделать фильтр 
}
var arr = [ //массив объектов 
    { title: 'Some title1'},
    { title: 'I like JS' },
    { user: 'This obj doesn\’t have key title js' },
    { title: 'Js - is the best!' }];
findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
// Вопрос: что от меня хотят?
// Над чем подумать:  который фильтрует массив, заданный как первый параметр
//мыслишки: т.е. нужно сделать фильтр этих объектов в массиве, в которых есть title: js? и не должно быть в значении title?
// 

//Task 4 не начинала
function countCharacters(string) {
let result;
//Your code here
return result;
}
countCharacters('sparrow') // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
countCharacters('aabcddeffge') // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
countCharacters('a 2ab !d') // should return {a: 2, b:1, d:1, 2:1}

//Task 5 не начинала 
function getNextPalindrome(number) {
let result;
//Your code here
return result;
}
getNextPalindrome(7) // returns 11
getNextPalindrome(99) //returns 101
getNextPalindrome(132) // returns 141
getNextPalindrome(888) // returns 898
getNextPalindrome(999) // returns 1001