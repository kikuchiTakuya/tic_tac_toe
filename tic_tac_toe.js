'use strict;'

// セル管理配列
let cell_array = [[0,0,0], [0,0,0], [0,0,0]]

// ターン管理フラグ
let trun_flag = 1

// ターン表示
const show_turn = document.getElementById("show_turn")
show_turn.style.color = 'rgb(220, 200, 20)'


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

// セルをクリックした時の処理
function cellClick(e,y,x){
    if(cell_array[y][x] === 0){
        // セルがまだクリックされていない場合は処理をする
        e.innerText = "〇"
        cellMark(y,x)
        cellBgColorChange(e)
        
        if(trun_flag == 1){
            change_show_turn("2P", 20, 200, 200)
            trun_flag = 2
        } else {
            change_show_turn("1P", 200, 200, 20)
            trun_flag = 1
        }
    }

}

// セル管理配列に1か2を代入する
function cellMark(y,x){
    if(trun_flag == 1){
        cell_array[y][x] = 1
    } else {
        cell_array[y][x] = 2
    }
    console.log(cell_array)
}

// セルの背景を変更する
function cellBgColorChange(e){
    if(trun_flag == 1){
        e.style.backgroundColor = 'rgb(220, 200, 20)'
    } else {
        e.style.backgroundColor = 'rgb(20, 220, 220)'
    }
}

// ターン表示の変更
function change_show_turn(player, r, g, b){
    show_turn.innerText = player
    show_turn.style.color = "rgb(" + String(r)+ "," + String(g) + "," + String(b) + ")"
}


btn_00.addEventListener('click', function(){
    cellClick(btn_00,0,0)
})
btn_01.addEventListener('click', function(){
    cellClick(btn_01,0,1)
})
btn_02.addEventListener('click', function(){
    cellClick(btn_02,0,2)
})
btn_10.addEventListener('click', function(){
    cellClick(btn_10,1,0)
})
btn_11.addEventListener('click', function(){
    cellClick(btn_11,1,1)
})
btn_12.addEventListener('click', function(){
    cellClick(btn_12,1,2)
})
btn_20.addEventListener('click', function(){
    cellClick(btn_20,2,0)
})
btn_21.addEventListener('click', function(){
    cellClick(btn_21,2,1)
})
btn_22.addEventListener('click', function(){
    cellClick(btn_22, 2, 2)
})
