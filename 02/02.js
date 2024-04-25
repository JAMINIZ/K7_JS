const btCreate = (bt, idTxt, captionNode, parentNode) => {
    bt.setAttribute("id", idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}


document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM 완성');

    const btDiv = document.getElementById("btDiv");
    // HTML 에서 btDiv를 집어 오는 과정
    const bt1 = document.createElement("button");
    // 버튼 만들기
    const bt1Txt = document.createTextNode("버튼11");
    // 버튼에 '버튼11'이라는 텍스트 추가
    const msg = document.querySelector("#msg");
    const bt2 = document.createElement("button");
    const bt2Txt = document.createTextNode("버튼21")

    // bt1.setAttribute("id", "bt11");
    // // 버튼에 속성추가
    // bt1.appendChild(bt1Txt);
    // // bt1Txt 가 bt1은 자식으로 들어가야 하기 때문에 추가
    // btDiv.append(bt1);
    // // btDiv에 bt1을 추가
    // bt2.setAttribute("id", "bt21");
    // bt2.appendChild(bt2Txt);
    // btDiv.append(bt2);

    btCreate(bt1, "bt11", bt1Txt, btDiv);
    btCreate(bt2, "bt21", bt2Txt, btDiv);


    bt1.addEventListener("click", ()=>{
          msg.innerHTML = "<h1>안녕하세요</h1>"
    });

    bt2.addEventListener("click", ()=>{
          msg.innerHTML = ""
    });

    

}); 
// -> 의미 HTML DOM tree 가 다 만들어지면 document = 자바에서 객체(클래스) addEvenListener = 자바에서 메소드(동작) innetHTML = 자바에서 필드(속성) 느낌
// () => {} 콜백함수, 함수에 이름이 없다
// 자바스크립트 변수 선언 안해도 되지만 const(상수선언 '한 번 선언하면 안바뀌는')