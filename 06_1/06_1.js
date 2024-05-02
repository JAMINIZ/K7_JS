/*
단위 환산
*/

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');

    sel1.addEventListener("change", ()=>{
        console.log(sel1.value, sel2.value);
        if (sel1.value == "℃") {
            sel2.value = "℉";
            label1.value = "℃";
            label2.value = "℉";
        }
        else {
            sel2.value = "℃";
            label1.value = "℉";
            label2.value = "℃";
        }
    });

    sel2.addEventListener("change", ()=>{
        if (sel2.value == "℉") {
            sel1.value = "℃";
            label1.value = "℃";
            label2.value = "℉";
        }
        else {
            sel1.value = "℉";
            label1.value = "℉";
            label2.value = "℃";
        }
    })
});