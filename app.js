const a= Math.floor(Math.random()*100);
if(a==0)
  a=1;
  console.log(a);
  let sum=10;
  let b=document.getElementById("number");
btn1.addEventListener("click",checknum);
function checknum(){
    let btn=document.getElementById("btn2");
      b=document.getElementById("number").value;
     if(a==b)
       {
           document.getElementById("update").innerHTML="✨🎉 You guess it correct🎉✨"
           btn.style.display="block";
       }
       else if(a>b)
       {
        sum--;
        document.getElementById("preguess").innerHTML+=(b+",");
        document.getElementById("remainguess").innerHTML=sum;
        document.getElementById("update").innerHTML="Low,try again!";
       }
       else
       {
           sum--;
        document.getElementById("preguess").innerHTML+=(b+",");
        document.getElementById("remainguess").innerHTML=sum;
       document.getElementById("update").innerHTML="high!try again!"
       }
       if(sum==0){
          document.getElementById("update").innerHTML=`Number is ${a},let's do again`;
          setTimeout(() => {
              location.reload();
          }, 1000);
       }
       btn2.addEventListener("click",()=>{
        location.reload()
    })
}
b.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btn1").click();
    }
});
