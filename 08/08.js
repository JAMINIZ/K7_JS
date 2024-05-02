document.addEventListener("DOMContentLoaded", () => {
    const txt1 = document.querySelector("#txt1");
    const bts = document.querySelectorAll(".bt");
    const bts2 = document.querySelectorAll(".bt2");
    const bts3 = document.querySelectorAll(".bt3");


    let arr = [];
    let obj = {
        "사과": '🍎',
        "바나나": '🍌',
        "오렌지": '🍊',
        "수박": '🍉',
        "당근": "🥕",
        "아보카도": "🥑",
        "오이": "🥒",
        "브로콜리":"🥦",
    }

    // let obj2 = {
    //     '🍎' : "",
    //     '🍌' : "",
    //     '🍊' : "",
    //     '🍉' : "",
    // }

    //배열 추가
    for (let bt of bts) {
        bt.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(obj[bt.textContent])

            // if (bt.textContent == "사과") arr.push("🍎")
            // else if (bt.textContent == "바나나") arr.push("🍌")
            // else if (bt.textContent == "오렌지") arr.push("🍊")
            // else if (bt.textContent == "수박") arr.push("🍉")

            arr.push(obj[bt.textContent])
            txt1.value = arr.join(" ")
        });
    }

    //배열 삭제
    for (let bt of bts2) {
        bt.addEventListener("click", (e) => {
            e.preventDefault();

        //배열 필터
        const k = obj[bt.textContent.replace(" 삭제", "")]; // k => " 삭제 전에 있는 과일 들을 의미함"
        arr = arr.filter(item =>  item != k );
        console.log(arr);
        

        txt1.value = arr.join(" ");
    });
    };

    //배열 변환
    for (let bt of bts3) {
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            let tm = bt.textContent.split(" → ")
            console.log(tm);

            arr = arr.map(item=>item == obj[tm[0]] 
                                      ? obj[tm[1]] : item );

            txt1.value = arr.join(" ");
        });
    }
});