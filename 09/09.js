document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("#bt");
    const div9 = document.querySelector(".div9")



    bt.addEventListener("click", (e) => {
        e.preventDefault();
        let arr = [];

        //배열이 다 찰 때까지 while 문 실행
        while (arr.length < 7) {

        // 1에서 45까지의 랜덤 수를 생성하는 n
            let n = Math.floor(Math.random() * 45 + 1)
        
        // 배열에 중복되는 n이 없을 시 배열을 push
            if (!arr.includes(n)) arr.push(n)
        }
        // map 은 콜백 함수가 들어감
        // 
        let tags = arr.map(item => `<span class="sp${Math.floor(item / 10)}">${item}</span>`
        );

        console.log(tags);
        //배열 중간 추가
        tags.splice(6, 0, "<span> + </span>");
        tags = tags.join(" ");

        //배열 문자열 만들기
        div9.innerHTML = tags;

        // e.preventDefault();
        // const n = Math.floor(Math.random() * 45 + 1)
        // console.log(n);
    });

});