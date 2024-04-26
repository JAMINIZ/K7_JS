/*
단위 환산
*/

document.addEventListener("DOMContentLoaded", => {
    const sel1 = document.querySelector('#select1');
    const sel2 = document.querySelector('#select2');

    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');

    sel1.addEventListener("change", ()=>{
        console.log(sel1.value, sel2.value);
        if (sel1.value == "℃") {
            sel2.value = "℉";
            label1.value = "℃";
            label2.value = "℉";
        }
        else{
            sel2.value = "℃";
            label1.value = "℉";
            label2.value = "℃";
        }

    });
});