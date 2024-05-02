document.addEventListener("DOMContentLoaded", ()=>{
    const txt1 = document.querySelector("#text1");
    const txt2 = document.querySelector("#text2");
    const bts = document.querySelectorAll(".bt7"); // 버튼을 배열 형태로 불러오기

    //회문
    bts[0].addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(1);

        let t1 = txt1.value.replaceAll(" ", " "); // 입력한 문자열에 있는 공백을 시작부터 끝까지 없애기
        let t2 = txt1.value.replaceAll(" ", " ").split("").reverse().join(""); // value 값 타이핑하는 문자열을 가져 온다. split 텍스트 1에 저장한 값을 배열화해서 가져온다 reverse 그걸 역순으로 해서 join 문자열로 바꾼다.
        if (t1 == t2) txt2.value = "회문입니다."
        else txt2.value = "회문이 아닙니다."

    });
    
    //문자열 숫자 확인
    bts[1].addEventListener("click", (e)=>{
        e.preventDefault();
        // for (let i = 0; i<txt1.value.length ; i++) {
        //     console.log(txt1.value[i])
        // }

        // let total = 0;
        // for (let c of txt1.value) { // 타이핑한 문자열 길이만큼 반복문
        //     // 숫자 구분
        //     // if ( c >= "0" && c <= 9) {
        //     if(!isNaN(c)){ // ! isnan이라서 false 값을 true로 바꿔줌 if 안에 c == true가 실행 되어서 실행문 실행 될거임
        //         total = total + parseInt(c); // total을 처음 변수선언할 때 숫자값을 넣었기 때문에 parseInt 로 c 값을 숫자열로 변환해줌
        //     }
        // }

        // txt2.value = total;
        
        let total = 0;
        for(let c of txt1.value) {
            if(c >= 0 && c <= 9) {
                total = total + parseInt(c);
            }
        }
        txt2.value = total;
        


    });
});




// bts[0].addEventListener("click", (e)=>{
//     e.preventDefalut();
//     console.log(1);
    
//     // let t1 = txt1.value ;
//     // let t1 = [...txt1.value];
//     // let t2 = [];
//     // for(let i = t1.length-1 ; i >= 0 ; i--) {
//     //     t2.push(t1[i])
//     // }

//     //비교 : 문자열
//     let t1 = txt1.value;
//     let t2 = txt1.value.split("").reverse().join("");
//     if (t1 == t2) txt2.value = "회문입니다."
//     else txt2.value = "회문이 아닙니다."

//     //비교 : 배열
//     // for(let i = 0; i< t1.length ; i++){
//     //     if(t1[i] != t2[i]){
//     //         txt2.value = "회문이 아닙니다."
//     //         break;
//     //     }
//     //     else
//     //         txt2.value = "회문입니다."
//     // }

    
// });





