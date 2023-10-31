document.addEventListener("DOMContentLoaded", function () {
    init();
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
function init(){
    document.getElementById('LoginButton').addEventListener('click',function(evt){
        var user_email = document.getElementById('sign_up_email').value;
        var user_name  = document.getElementById('user_name').value;
        var user_sid = document.getElementById('student_id').value;
        var user_pass = document.getElementById('sign_up_password').value;
        var user_conf_pass = document.getElementById('password_confirm').value;
        if(user_pass != user_conf_pass){
            alert("ERROR!Please re-enter the password!!");
            return;
        }
        const firebaseConfig = {
            apiKey: "AIzaSyCkguRAkkhEfu4JIjFgh7lrDbcv5jQ21ps",
            authDomain: "lms1-2fdcb.firebaseapp.com",
            projectId: "lms1-2fdcb",
            storageBucket: "lms1-2fdcb.appspot.com",
            messagingSenderId: "952940918932",
            appId: "1:952940918932:web:9f757d9f2d77e445049c81"
        };
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        set(ref(db,'student_table/'+sid),{
            name:user_name,
            email:user_email,
            sid:user_sid,
            password:user_pass
        });
        alert("Your sign up is complete");
    });
}
