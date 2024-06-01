let nextDom= document.getElementById('next');
let prevDom= document.getElementById('prev');
let alllistDom= document.querySelector('.alllist');
let listDom=alllistDom.querySelector('.alllist .list');
let allsliderDom=document.querySelector('.alllist .allslider');
let sliderItem=allsliderDom.querySelectorAll('.slide')
let timeDom=document.querySelector('.alllist .time');


allsliderDom.appendChild(sliderItem[0]);
let timeRunning=1000;
let runTimeOut;
nextDom.onclick=function(){
    showSlider('next');
}
prevDom.onclick=function(){
    showSlider('prev');
}

function showSlider(type){
    let itemSlider = document.querySelectorAll('.alllist .list .item');
    let itemAll=document.querySelectorAll('.alllist .allslider .slide')

        if(type==='next'){
           listDom.appendChild(itemSlider[0]); 
           allsliderDom.appendChild(itemAll[0]);
           alllistDom.classList.add('next');
        }else{
            let positionLastItem=itemSlider.length - 1;
            listDom.prepend(itemSlider[positionLastItem]);
            allsliderDom.prepend(itemAll[positionLastItem]);
            alllistDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
runTimeOut=setTimeout(() =>{
    alllistDom.classList.remove('next');
    alllistDom.classList.remove('prev');
}, timeRunning
);
}


