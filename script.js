let a="";
let b="";
let ope="";

function funWrite(){
    ope==""? ( inpans.innerText=a) : ( inpans.innerText=b)
}

let btnone= document.getElementById('btnone');
btnone.onclick=function(){
    console.log("one clickead")
    btnone.style.backgroundColor="yellow";
    ope==""? a+=btnone.innerText : b+=btnone.innerText
    btnone.style.backgroundColor="white";
    funWrite()

}

let btntwo= document.getElementById('btntwo');
btntwo.onclick=function(){
    console.log("two clickead")
    btntwo.style.backgroundColor="yellow";
    ope==""? a+=btntwo.innerText : b+=btntwo.innerText
    btntwo.style.backgroundColor="white";
    funWrite()
}

let btnthree= document.getElementById('btnthree');
btnthree.onclick=function(){
    console.log("three clickead")
    btnthree.style.backgroundColor="yellow";
    ope==""? a+=btnthree.innerText : b+=btnthree.innerText
    btnthree.style.backgroundColor="white";
    funWrite()
}

let btnfour= document.getElementById('btnfour');
btnfour.onclick=function(){
    console.log("four clickead")
    btnfour.style.backgroundColor="yellow";
    ope==""? a+=btntwo.innerText : b+=btntwo.innerText
    funWrite()
    
}

let btnfive= document.getElementById('btnfive');
btnfive.onclick=function(){
    console.log("five clickead")
    btnfive.style.backgroundColor="yellow";
    ope==""? a+=btntwo.innerText : b+=btntwo.innerText
    funWrite()
    
}

let btnsix= document.getElementById('btnsix');
btnsix.onclick=function(){
    console.log("six clickead")
    btnsix.style.backgroundColor="yellow";
    ope==""? a+=btnsix.innerText : b+=btnsix.innerText
    funWrite()

}

let btnseven= document.getElementById('btnseven');
btnseven.onclick=function(){
    console.log("seven clickead")
    btnseven.style.backgroundColor="yellow";
    ope==""? a+=btnseven.innerText : b+=btnseven.innerText
    funWrite()

}

let btneight= document.getElementById('btneight');
btneight.onclick=function(){
    console.log("eight clickead")
    btneight.style.backgroundColor="yellow";
    ope==""? a+=btneight.innerText : b+=btneight.innerText
    funWrite()
    
}

let btnnine= document.getElementById('btnnine');
btnnine.onclick=function(){
    console.log("nine clickead")
    btnnine.style.backgroundColor="yellow";
    ope==""? a+=btnnine.innerText : b+=btnnine.innerText
    funWrite()

}

let btnplus= document.getElementById('btnplus');
btnplus.onclick= function (){
    ope=btnplus.innerText;

}

let btnsub= document.getElementById('btnsub');
btnsub.onclick=function(){
    ope=btnplus.innerText;
}

let btnmul=document.getElementById('btnmul');
btnmul.onclick=function(){
    ope=btnplus.innerText;
}

let btndiv=document.getElementById('btndiv');
btnmul.onclick=()=>  ope=btnplus.innerText;

let btnac= document.getElementById('btnAC');
btnac.onclick=()=>{
    a=""; 
    b="";
    ope="";
    funWrite()
}
 
// equal
let inpans= document.getElementById('inpans');
let btnequal=document.getElementById('btnequal');
btnequal.onclick= function (){
    let ans=eval(a+" "+ope+" "+b)

       
        console.log(ans)
        inpans.innerText=String(ans);
        a="";
        b="";
        ope="";
    
}






