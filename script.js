let form = document.getElementById('registerform');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let mobile = document.getElementById('mobile');
let dob = document.getElementById('dob');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let qualification = document.getElementById('qualification');
let gender = document.getElementById('dot-1');
let specialization = document.getElementById('check-1');
// let gender = document.registerformname.gender;
// let specialization = document.registerformname.specialization;
// let specializationVal = document.querySelector('.specialization1:checked').value;   
let values = "";

form.addEventListener('submit', (e) => {
        if(checkinputs()){
            confirm("First Name: " +fname.value + "\n" + "Last Name: " + lname.value + "\n" + "Email: " + email.value + "\n" + "Password: " + password.value + "\n" + "Mobile: " + mobile.value + "\n" + "DOB: " + dob.value + "\n" + "Address: " + address.value + "\n" + "Pincode: " + pincode.value + "\n" + "Qualification: " + qualification.value + "\n" + "Gender: " + form.elements["gender"].value + "\n" + "Specialization: " + values);
        }
});

// for( let i=0; i<x.length; i++){
//     if(x[i].checked){
//         gen = x[i];
//         break;
//     }
// }

function checkinputs(){
    let fnameVal = fname.value.trim();
    let lnameVal = lname.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let mobileVal = mobile.value.trim();
    let dobVal = dob.value.trim();
    let addressVal = address.value.trim();
    let pincodeVal = pincode.value.trim();
    let qualificationVal = qualification.value;
    let genderVal = form.elements["gender"].value;
    // let specializationVal = document.querySelector('input[type=checkbox][name=specialization]:checked').value;
    // console.log(specializationVal);
    var l1 = document.getElementById("check-1");
    var l2 = document.getElementById("check-2");
    var l3 = document.getElementById("check-3");
    

    let fnameBool = false;
    let lnameBool = false;
    let emailBool = false;
    let passwordBool = false;
    let mobileBool = false;
    let dobBool = false;
    let addressBool = false;
    let pincodeBool = false;
    let qualificationBool = false;
    let genderBool = false;
    let specializationBool = false;
    
    if(fnameVal === '') {
        setErrorFor(fname, 'First name Cannot be empty');
    } else {
        setSuccessFor(fname);
        fnameBool = true;
    }
    if(lnameVal === '') {
        setErrorFor(lname, 'Last name Cannot be empty');
    } else {
        setSuccessFor(lname);
        lnameBool = true;
    }
    if(emailVal === '') {
        setErrorFor(email, 'Email Cannot be empty');
    } 
    else if(!isEmail(emailVal)) {
        setErrorFor(email, 'Email is not valid');
    } 
    else {
        setSuccessFor(email);
        emailBool = true;
    }
    if(passwordVal === '') {
        setErrorFor(password, 'Password Cannot be empty');
    } else {
        setSuccessFor(password);
        passwordBool = true;
    }
    if(mobileVal === '') {
        setErrorFor(mobile, 'Mobile number Cannot be empty');
     } else if(mobileVal.length < 10){
        setErrorFor(mobile, 'Mobile number Cannot be less that 10 digits');
    } 
    else {
        setSuccessFor(mobile);
        mobileBool = true;
    }
    if(dobVal === '') {
        setErrorFor(dob, 'DOB Cannot be empty');
    } else {
        setSuccessFor(dob);
        dobBool = true;
    }
    if(addressVal === '') {
        setErrorFor(address, 'Address Cannot be empty');
    } else {
        setSuccessFor(address);
        addressBool = true;
    }
    if(pincodeVal === '') {
        setErrorFor(pincode, 'Pincode Cannot be empty');
    } else {
        setSuccessFor(pincode);
        pincodeBool = true;
    }
    if(qualificationVal === '') {
        setErrorFor(qualification, 'Qualification Cannot be empty');
    } else {
        setSuccessFor(qualification);
        qualificationBool = true;
    }
    if(genderVal === '') {
        const formControl = gender.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = "Gender Cannot be empty";
        formControl.className = 'gender-details error';
        // setErrorFor(qualification, 'Qualification Cannot be empty');
    } else {
        const formControl1 = gender.parentElement;
        formControl1.className = 'gender-details';
        genderBool = true;
    }

    if(l1.checked == true || l2.checked == true || l3.checked == true){
        if (l1.checked == true){
            if(l2.checked == true || l3.checked == true){
                values = values + l1.value + ", ";
            }else{
                values = values + l1.value;
            }
        }
        if (l2.checked == true){
            if(l3.checked == true){
                values = values + l2.value + ", ";
            }else{
                values = values + l2.value;
            }
        }
        if (l3.checked == true){
            values = values + l3.value;
        }

        const formControl1 = specialization.parentElement;
        formControl1.className = 'specialization-details';
        specializationBool = true;
    } else {
        const formControl = specialization.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = "Specialization Cannot be empty";
        formControl.className = 'specialization-details error';
    }

   

    if (fnameBool && lnameBool && emailBool && passwordBool && mobileBool && dobBool && addressBool && pincodeBool && qualificationBool && genderBool){
        return true;
    } else {
        return false;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input-box error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function getSelectedCheckboxValues() {
//     const checkboxes = document.querySelectorAll(`input[name="specialization2"]:checked`);
//     checkboxes.forEach((checkbox) => {
//         values.push(checkbox.value);
//     });
// }


// form.addEventListener('submit', (e) => {

//     getSelectedCheckboxValues('specialization');
//     // let x = getSelectedCheckboxValues('specialization');
//     console.log(fname.value, lname.value, email.value, password.value, mobile.value, dob.value, address.value, pincode.value, qualification.value, gender.value, values)

// });
