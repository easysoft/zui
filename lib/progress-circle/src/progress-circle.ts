export default class ProgressCircle {
    #toggleEle;

    #nextElement;

}

    let circle=document.getElementById('progress')
    let text=document.getElementById('precent')
    let r=circle.getAttribute('r')
    let c=2*Math.PI*r
    let len=0;
    setInterval(function(){
        len=len+1
        if(len>c){
            len=0
        }
        let percent=len/c*100;
        text.innerHTML=percent.toFixed(0)+'%'
        console.log(len,c);
        circle.setAttribute('stroke-dasharray',`${len},${c}`)
    },20)