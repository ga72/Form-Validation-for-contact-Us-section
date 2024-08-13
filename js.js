let submitButton = document.getElementById("submitButton");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let validText = document.getElementById("validText")
let validText2 = document.getElementById("validText2")
let validMail = document.getElementById("validMail");

function checkFillAllTerms(){

if((firstName.value == '') || (lastName.value == '') || (email.value == '') ){
    alert("please fill in all terms ")
}

else{
   alert("The data is finally submitted ")
}
}
submitButton.addEventListener("click" , checkFillAllTerms);

function nameValidation(){
     var regex = /^[A-Z][a-z]{3,8}/
     if(regex.test(firstName.value) == true){
        firstName.classList.add("is-valid")
        firstName.classList.remove("is-invalid")
        validText.classList.replace("d-block" , "d-none")
       

    }
else{
    validText.classList.replace("d-none" , "d-block")
    firstName.classList.add("is-invalid")
    firstName.classList.remove("is-valid")

   
}
}
firstName.addEventListener("keyup" , nameValidation)

function lastNameValidation(){
     var regex = /^[A-Z][a-z]{3,8}/
     if(regex.test(firstName.value) == true){
        lastName.classList.add("is-valid")
        lastName.classList.remove("is-invalid")
        validText2.classList.replace("d-block" , "d-none")
      
    }
else{
    validText2.classList.replace("d-none" , "d-block")
    lastName.classList.add("is-invalid")
    lastName.classList.remove("is-valid")

}
}
lastName.addEventListener("keyup" , lastNameValidation)

function emailValidation(){
     var regex = /[a-z0-9]@[a-z].[a-z]/
     if(regex.test(email.value) == true){
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
        validMail.classList.replace("d-block" , "d-none")
      
    }
else{
    validMail.classList.replace("d-none" , "d-block")
    email.classList.add("is-invalid")
    email.classList.remove("is-valid")

}
}
email.addEventListener("blur" , emailValidation)