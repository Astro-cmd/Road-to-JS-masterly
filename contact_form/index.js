let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let submitError = document.getElementById('submit-error')
let messageError = document.getElementById('message-error')

function validateName() {
    let name = document.getElementById('contact-name').value

    if(name.length === 0){
        nameError.innerHTML = 'Name is required'
        return false
    }   
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true

};

function validateEmail(){
    let email = document.getElementById('contact-email').value

    if(email.length === 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email Invalid'  
        return false;

    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true

        


}

function validatePhone(){
    phone = document.getElementById('contact-phone').value

    if(phone.length === 0){
        phoneError.innerHTML = 'Phone Number is required'
        return false
    }   
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone Number should be 10 digits'
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Invalid phone number'
        return false
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true

}
function validateMessage(){
    let message = document.getElementById('contact-message').value
    let required = 30
    let left = required - message.length

    if(left < 0){
        messageError.innerHTML = 'Message is too long'
        return false
    }
    if(left > 0){
        messageError.innerHTML = `You have ${left} characters left`
        return false
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix the errors to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false
    }
    submitError.style.display = 'none';
    
}