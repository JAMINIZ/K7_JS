/*
    1. DOM에서 제어할 노드를 가져오기
    2. 버튼이 눌러지면 
      [확인버튼일때]
        - 랜덤수를 생성 => 랜덤 수는 다시 하기 전까진 변경 되면 안됨
        - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
        - input 박스 값이 1에서 100사이 숫자가 아니면 '입력 오류' 메시지 출력
        - input 박스 값이 랜덤 수보다 작으면 up이미지 
        - input 박스 값이 랜덤 수보다 크면 down이미지
        - input 박스 값이 랜덤 수가 같으면 good이미지
            - input 보이지 않아야 함
            - 버튼의 캡션을 '숫자를 생성해 주세요' 변경
      [숫자를 생성해 주세요 버튼일때]
        - 초기화 : 랜덤 수 새로 생성, input 박스 보이기 ... 
*/
document.addEventListener("DOMContentLoaded", ()=>{
    //1. DOM에서 제어할 노드를 가져 오기
    const button = document.querySelector("#bt1");
    const img = document.querySelector("#updownimg");
    const input = document.querySelector("#text1");
    
    //랜덤 수
    let n; //null 값이 들어감 n에
    let flag = false ;

        //랜덤 수 생성 : flag true 일때만 생성
    button.addEventListener("click", (e)=>{
        //form 태그사용 시 다시 호출 되지 않도록
        e.preventDefault();

        if (!flag) { // flag == false
            flag = true
            n = Math.floor(Math.random() * 100) + 1;
            console.log('n=', n);
        }
    
        //입력값 체크
        if(input.value =="") {
            alert("값을 입력하세요.")
            input.focus();
            return ;
        }

        if(input.value < 1 || input.value > 100) {
            alert("입력 오류.")
            input.focus();
            return ;
        }

        if(input.value < n) {
            img.setAttribute(`src`, `./img/up.png`)
        }else if(input.value > n) {
            img.setAttribute(`src`, `./img/down.png`)
        }else {
        img.setAttribute(`src`, `./img/good.png`)
        }
    })
})