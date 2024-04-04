// 1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику 
//     на картинку алертом выводился ее описание.


let m1 = document.querySelector('#m1')
let m2 = document.querySelector('#m2')
let m3 = document.querySelector('#m3')


m1.addEventListener('click', function() {
    alert("Горы и озеро")
})

m2.addEventListener('click', function() {
    alert("Собака")
})

m3.addEventListener('click', function() {
    alert("Закат")
})





// 2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите 
//     куда данная ссылка ссылается.


let a1 = document.querySelector('#a1')
let a2 = document.querySelector('#a2')


a1.addEventListener('mouseover', function () {
    console.log("Ссылка на поисковик Google");
})

a2.addEventListener('mouseover', function () {
    console.log("Ссылка на видеохостинг YouTube");
})





// 3) Напишите функцию, которая объединяет несколько строк и возвращает их.
//    Используйте глобальный массив arguments.


let func = (...args) => {
    let result = ""
    for(let i = 0; i < args.length; i++) {
        result += args[i]
    }
    return result
}
console.log(func("Привет ", "как твои ", "дела?"));




// 4) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
//    Функция наша принимает массив любых элементов. 
//    Например: 
//    const data = [1, 2, 3]; 
//    myFunc(data); // [3, 2, 1]
//    Без метода reverse.


const data = [1, 2, 3]; 

let func2 = (arr) => {
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(func2(data));