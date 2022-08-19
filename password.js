// let password = 'Doglover123'
// let number = 1
// let letter = 1

// if(password.length >= 10 && password.length <= 20){
//     console.log('success')
// }else{
//     console.log('failure')
// }

// if(number.length >= 0){
//     console.log('success')
// }else{
//     console.log('failure')
// }


let password ='Doglover123'


let minChars = false
let upperCheck = false
let numCheck = false
let letterCheck = false


for(let i = 0; i < password.length; i++){
    if(!isNaN(+password[i])){
        numCheck = true
    }
    
    if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
        upperCheck = true
    }
}

if(/[a-zA-Z].test(password)/){
    letterCheck = true
}

if(password.length >= 10 && password.length <=20){
    minChars = true
}

if(minChars && letterCheck && upperCheck && numCheck){
    console.log('your password fills all the requirements')
}else {
    console.log('the password does not fill all the requirements')
}

