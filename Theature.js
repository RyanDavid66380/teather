function validateForm() {
    if (isEmpty(document.getElementById('data_2').value.trim())) {
    alert('First name is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_3').value.trim())) {
    alert('Last name is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_4').value.trim())) {
    alert('Phone number is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_5').value.trim())) {
    alert('Email is required!');
    return false;
    }
    if (!validateEmail(document.getElementById('data_5').value.trim())) {
    alert('Email must be a valid email address!');
    return false;
    }
    if (isEmpty(document.getElementById('data_7').value.trim())) {
    alert('number of seats is required');
    return false;
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }
    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }