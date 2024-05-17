
function age(e){
  e.preventDefault()
  let day=document.querySelector("#day")
  let month=document.querySelector("#month")
  let year=document.querySelector("#year")
  let submit=document.querySelector("#submit");
  let resday=document.getElementById("DD")
  let resmonth=document.getElementById("MM")
  let resyear=document.getElementById("YYYY")
  let input=document.querySelectorAll("input")
  
  let date=new Date();
  let d2=date.getDate();
  let m2=date.getMonth()+1;
  let y2=date.getFullYear();
  let months=[31,28,31,30,31,30,31,31,30,31,30,31];

  if(day.value=="" && month.value=="" && year.value==""){
    input.forEach((i)=>{
      i.style.borderColor="red"
      i.parentElement.querySelector("label").style.color="red"
      i.parentElement.querySelector(".error").innerText="Please Enter Data";
      return false
    })
  }else if (day.value > 12) {
    day.style.borderColor = "red";
    day.parentElement.querySelector(".error").innerText = "Day not vaild";
    return false;
  }else if(month.value > 31){
    month.style.borderColor = "red";
    month.parentElement.querySelector(".error").innerText = "Month not vaild";
    return false;
  }else{

   if(day.value > d2){
    d2=d2+months[m2 - 1]
    m2--
   }
   if(month.value > m2){
    m2=m2+12;
    y2--
   }
    let d = d2-day.value;
    let m = m2-month.value;
    let y = y2-year.value;
  
    resday.innerHTML=d;
    resmonth.innerHTML=m;
    resyear.innerHTML=y
 }

}
submit.addEventListener("click",age)

