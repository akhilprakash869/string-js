//eventlistner for buton click
document.querySelector(".calculate").addEventListener("click",BMI);
document.querySelector(".clear").addEventListener("click",clear);

//fucntion BMI
//calculate BMI function
function BMI(){
   const height=document.getElementById('height').value;
   const weight=document.getElementById('weight').value;
   //bmi formula 
    if (height !=="" && weight!==""){ 
   let index = (weight / ((height / 100) ** 2)).toFixed(2);

   //check height and weight are not equal to zero
   
  
    const output=document.getElementById("output");
    
    output.innerHTML = "Your BMI is " + index;
    const state=document.getElementById("state");
//checking bmi category

 
    if (index < 18.5) {
            state.innerHTML = "Category: Underweight";
        } else if (index >= 18.5 && index < 24.9) {
            state.innerHTML = "Category: Normal weight";
        } else if (index >= 25 && index < 29.9) {
            state.innerHTML = "Category: Overweight";
        } else {
            state.innerHTML = "Category: Obese";
        }
    } else {
        alert("Error..! Please enter valid height and weight.");
    }
   
}
//function clear
function clear(){
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
    document.getElementById("output").innerHTML="";
    document.getElementById("state").innerHTML="";

}
