function checkFormField(fieldId, errorField='') {
    const element = document.getElementById(fieldId).value;
    let errorFieldId = errorField;
    if (errorField === '') {
        errorFieldId = 'err' + fieldId.charAt(0).toUpperCase() + fieldId.substr(1);
    }

    let isError = false;
    const errField = document.getElementById(errorFieldId);
    if (element === '') {
        errField.className = 'form-text text-danger';
        isError = true;
    } else {
        errField.className = 'form-text text-danger d-none';
        isError = false;
    }
    return isError;
}

function onSubmit() {
    const isErrorFullname = checkFormField('fullName');
    const isErrorEmail = checkFormField('email');
    const isErrorPhone = checkFormField('phone');

    if (isErrorFullname || isErrorEmail || isErrorPhone) {
        document.getElementById('containerForm').classList.remove('d-none');
        document.getElementById('containerThank').classList.add('d-none');
    } else {
        document.getElementById('containerForm').classList.add('d-none');
        document.getElementById('containerThank').classList.remove('d-none');
    }
}

function resend() {
    document.getElementById('containerForm').classList.remove('d-none');
    document.getElementById('containerThank').classList.add('d-none');



    //
    // Clear form fields
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}