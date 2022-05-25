'use strict;'

// セル管理配列
let cell_array = [[0,0,0], [0,0,0], [0,0,0]]

// ターン管理フラグ
let trun_flag = 1

// セルのボタンオブジェクト
const btn_00 = document.getElementById("00")
const btn_01 = document.getElementById("01")
const btn_02 = document.getElementById("02")
const btn_10 = document.getElementById("10")
const btn_11 = document.getElementById("11")
const btn_12 = document.getElementById("12")
const btn_20 = document.getElementById("20")
const btn_21 = document.getElementById("21")
const btn_22 = document.getElementById("22")

// セル管理配列に1か2を代入する
function cellMark(y,x){
    if(trun_flag == 1){
        cell_array[y][x] = 1
        trun_flag = 2
    } else {
        cell_array[y][x] = 2
        trun_flag = 1
    }
    console.log(cell_array)
}

btn_00.addEventListener('click', function(){
    cellMark(0,0)
    btn_00.innerText = "〇"
})
btn_01.addEventListener('click', function(){
    cellMark(0,1)
    btn_01.innerText = "〇"
})
btn_02.addEventListener('click', function(){
    cellMark(0,2)
    btn_02.innerText = "〇"
})
btn_10.addEventListener('click', function(){
    cellMark(1,0)
    btn_10.innerText = "〇"
})
btn_11.addEventListener('click', function(){
    cellMark(1,1)
    btn_11.innerText = "〇"
})
btn_12.addEventListener('click', function(){
    cellMark(1,2)
    btn_12.innerText = "〇"
})
btn_20.addEventListener('click', function(){
    cellMark(2,0)
    btn_20.innerText = "〇"
})
btn_21.addEventListener('click', function(){
    cellMark(2,1)
    btn_21.innerText = "〇"
})
btn_22.addEventListener('click', function(){
    cellMark(2,2)
    btn_22.innerText = "〇"
})

// btn_01.addEventListener('click', cellClick)