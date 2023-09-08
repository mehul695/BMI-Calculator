 const form = document.querySelector('form');
//  this usecase will give you empty value :

// const Height = parseInt (document.querySelector('#height').value)

 form.addEventListener('submit',function(e){
    e.preventDefault()

  const height = parseInt (document.querySelector('#height').value);

  const weight = parseInt (document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === ''|| height<0 ||  isNaN(height)) {

      results.innerHTML = `please give a valid height ${height}`;

  } else if ( weight === ''|| weight<0 ||  isNaN(weight)) {

      results.innerHTML = `please give a valid weight ${weight}`;

  } else {
     bmi = (weight/ ((height*height)/10000)).toFixed(2)
//  show the results :


}
// BMI Weight Guide Print :

if (bmi<18.6) {  
    results.innerHTML = `Your bmi is ${bmi} and You are Under Weight :`
    
} else if(bmi>=18.6 && bmi<=24.9){
    results.innerHTML = `Your bmi is ${bmi} and You are in Normal Range :`
    
    
} else if (bmi>24.9) {
    results.innerHTML = `Your bmi is ${bmi} and You are in Overweight :`
}
 
},false);



