/*
    1. DOM에서 이미지와 버튼을 가져오기 => DOM 생성이 된 후에
    2. 버튼에 클릭 이벤트를 만들기
    3. 랜덤 수 생성 (1 ~ 6) => Math.floor(Math.random() * 6) + 1

*/
document.addEventListener("DOMContentLoaded", ()=>{
    // console.log("DOM 완성");
    // const bt1 = document.querySelector("#bt1");
    // const bt2 = document.querySelector("#bt2");
    // const bt3 = document.querySelector("#bt3");
    // const bt4 = document.querySelector("#bt4");
    // const bt5 = document.querySelector("#bt5");
    // const bt6 = document.querySelector("#bt6");
    const bts = document.querySelectorAll('button');
    const comimg = document.querySelector("#com");
    const userimg = document.querySelector("#user");
    const message = document.querySelector("#msg");
    // console.log(bts);
        // //반복문1
        // console.log('**반복문1**')
        // for(let i = 0; 1 < bts.length ; i++) {
        //     console.log(bts[i])
        // }
    
        // //반복문2
        // console.log('**반복문2**')
        // for(let i in bts) {
        //     console.log(bts[i])
        // }
    
        // //반복문3
        // console.log('**반복문3**')
        // bts.forEach(bt => {
        //     console.log(bt)
        // })

        // //반복문4
        // console.log('**반복문4**')
        // for(let [i,bt] of bts.entries()){
        //     console.log(i, bt)
        // }

    for (let bt of bts) {
        bt.addEventListener('click', ()=>{
            const user = parseInt(bt.textContent.slice(0, 1))
            const com = Math.floor(Math.random() * 6 + 1)

            comimg.setAttribute(`src`, `../03/img/${com}.png`)
            comimg.setAttribute(`alt`, `computer num ${com}`)
            userimg.setAttribute(`src`, `../03/img/${user}.png`)
            userimg.setAttribute(`alt`, `user num ${user}`)

            if(com == user) message.innerHTML = "결과가 일치합니다."
            else message.innerHTML = "결과가 불일치합니다."
        });
    }
});
// id는 #으로 가져오기, class는 . 으로 가져오기
// const bts = document.querySelectorAll('button') 버튼 다 가져오기
    // const btCreate = (bts, a) => {
    //     bts.addEventListener("click", ()=>{
    //         const n = Math.floor(Math.random() * 6) + 1 ; // const n = Math.floor(Math.random() * 6) n 이라는 함수는
    //         comimg.setAttribute('src', `../03/img/${n}.png`);
    //         comimg.setAttribute('alt', `${n}`);
    //         userimg.setAttribute('src', `../03/img/${a}.png`);
    //         userimg.setAttribute('alt', `${a}`);
    //     })  
    // }
    
    // btCreate (bt1, 1);
    // btCreate (bt2, 2);
    // btCreate (bt3, 3);
    // btCreate (bt4, 4);
    // btCreate (bt5, 5);
    // btCreate (bt6, 6);