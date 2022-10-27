function validate(){
    var name = document.getElementById('username');
    var password = document.getElementById('password');
    if(name.value.trim() == "" || password.value.trim() == ""){
        alert("No blank values allowed ! Sign Up again");
    }
}

function check() {
    if(document.getElementById('password').value ===
            document.getElementById('confirm-password').value) {
        console.log("Match");
    } else {
        alert("Confirmed password does not match!");
    }
}