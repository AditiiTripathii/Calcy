// Calling Selectors 

const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const error1 = document.querySelector('.error1')
const error2 = document.querySelector('.error2')
const error3 = document.querySelector('.error3')

// Writing Functions

const calculation = () =>{
  
}


// Writing Event Listener

btn.addEventListener('click', () => {
    // checking emptiness
        const value1 = input1.value
        if(value1 === '' ){
            error1.innerHTML = 'Please Enter a Number! Input cannot be empty '
            result.innerHTML = ""
        }
        const value2 = input2.value
        if(value2 === '' ){
            error2.innerHTML = 'Please Enter a Number! Input cannot be empty '
            result.innerHTML = ""
        }
        const value3 = input3.value
        if(value3 === '' ){
            error3.innerHTML = 'Please Enter a Number! Input cannot be empty '
            result.innerHTML = ""
        }
        // checking input value
        if(value1 < 0 || value1 > 100){
            error1.innerHTML = 'Please Enter Number between 0 to 100'
            result.innerHTML = ""   
        }
        if(value2 < 0 || value2 > 100){
            error2.innerHTML = 'Please Enter Number between 0 to 100'
            result.innerHTML = ""   
        }
        if(value3 < 0 || value3 > 100){
            error3.innerHTML = 'Please Enter Number between 0 to 100'
            result.innerHTML = ""   
        }
        let totalGrades = parseFloat(value1) + parseFloat(value2) + parseFloat(value3)
          
          
            let perc = (totalGrades/3);
         
          
            // debugger;
          
            // if(value1 === '' || value2 !== '' || value3 !== ''){
            //   result.innerHTML = ""
            // }
            // if(value1 !== '' || value2 === '' || value3 !== ''){
            //     result.innerHTML = ""
            //   }
            //   if(value1 !== '' || value2 !== '' || value3 === ''){
            //     result.innerHTML = ""
            //   }
          
          if(value1 !== '' && value2 !== '' && value3 !== ''){
             if(perc >= 39.5){
                result.innerHTML =  'Out of 300 your total is ' + '<b>' + totalGrades + '<b>' + 'and percentage is'+ '<b>' + perc + '<b>' + ' % .You are Pass.'
              }
              else{
               result.innerHTML =  'Out of 300 your total is ' + totalGrades + '<b>' + ' and percentage is '+ '<b>' + perc + '<b>' + ' % .You are Fail.'
              }
          }
           
        
        

    })
   