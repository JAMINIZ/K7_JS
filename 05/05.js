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
    const head = document.querySelector("#head");
    
    let n; //null 값이 들어감 n에
    let flag = false ;
    let imgName ;

    
        
    button.addEventListener("click", (e)=>{
        //form 태그사용 시 다시 호출 되지 않도록
        e.preventDefault();
        
        
        //랜덤 수 생성 : flag true 일때만 생성
        if (!flag) { // flag == false      // if(flag) => if flag가 true 라면
            flag = true;
            n = Math.floor(Math.random() * 100) + 1;
            console.log('n=', n);
            
            input.style.display = "inline";
            button.innerHTML= "확인";
            img.setAttribute(`src`, `./img/what.png`);
            img.setAttribute(`alt`, `what`);
            
        }
    
        //입력값 체크
        if(input.value =="") {
            alert("값을 입력하세요.")
            input.focus();
            return ;
        }

        //입력값 체크 : 1 ~ 100
        const user = parseInt(input.value) ; // 폼태그의 입력값은 . value 로 가져와야 한다
        if(input.value < 1 || input.value > 100) {
            alert("[입력 오류] 1~100사이의 숫자를 입력하세요")
            input.focus();
            return ;
        }
        
        //input 박스 값이 랜덤 수보다 작으면 up이미지
        //input 박스 값이 랜덤 수보다 크면 down이미지
        //input 박스 값이 랜덤 수와 같으면 good이미지

        
        if(user < n) imgName ="up";
        else if(user > n) imgName ="down";
        else {
            imgName ="good";
            input.style.display = "none";
            button.innerHTML ="숫자를 생성해 주세요"
            flag = false;
            input.value = "";
            alert("정답입니다!");
        }

        if (imgName === "up" || imgName ==="down" ) {
            input.value=""
            input.focus
        }
        img.setAttribute(`src`, `./img/${imgName}.png`)
        img.setAttribute(`alt`, `/${imgName}`)
        
        
        
    })
})