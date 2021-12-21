//---- SignUp -----
function signup(){
    var semail=document.getElementById('semail').value;
    var spass=document.getElementById('spass').value;

    var vemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var vpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(semail == ''){
        alert('Please Enter Email ID');
        document.querySelector('.semail').setAttribute('style','border:3px solid red');
    }
    else if(!vemail.test(semail)){
        alert('Please Enter Valid Email ID');
        document.querySelector('.semail').setAttribute('style','border:3px solid red');
    }
    else if(spass == ''){
        alert('Please Enter Password');
        document.querySelector('.semail').setAttribute('style','border:none');
        document.querySelector('.spassword').setAttribute('style','border:3px solid red');
    }
    else if(!vpass.test(spass)){
        alert('Please Enter Valid Password');
        document.querySelector('.semail').setAttribute('style','border:none');
        document.querySelector('.spassword').setAttribute('style','border:3px solid red');
    }
    else if(semail=='admin@gmail.com' && spass == 'Admin@123'){
        alert('Admin Login Successfully');
        window.location="../Admin/admin.html";
    }
    else{
        alert('Sign Up Successfully');
        window.location="../index.html";
    }
}
//----- End SignUp -----

//----- Sign In -----
function signin(){
    var rname=document.getElementById('rname').value;
    var raddress=document.getElementById('raddress').value;
    var rcontact=document.getElementById('rcontact').value;
    var rgender=document.getElementById('rgender').value;
    var rdate=document.getElementById('rdate').value;
    var remail=document.getElementById('remail').value;
    var rpassword=document.getElementById('rpassword').value;
    var rcpassword=document.getElementById('rcpassword').value;

    var vnumber=/^[0-9]+$/;
    var vchar=/^[a-zA-Z\s]+$/;
    var vemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var vpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(rname == ''){
        alert('Please Enter Full Name');
        document.querySelector('.rname').setAttribute('style','border:3px solid red');
    }
    else if(!vchar.test(rname)){
        alert('Please Enter Character');
        document.querySelector('.rname').setAttribute('style','border:3px solid red');
    }
    else if(raddress == ''){
        alert('Please Enter Address');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:3px solid red');
    }
    else if(rcontact == ''){
        alert('Please Enter Contact Number');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:3px solid red');
    }
    else if(!vnumber.test(rcontact)){
        alert('Please Enter Valid Number');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:3px solid red');
    }
    else if(rgender == ''){
        alert('Please Select Gender');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:3px solid red');
    }
    else if(rdate == ''){
        alert('Please Enter Date Of Birth');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:3px solid red');
    }
    else if(remail == ''){
        alert('Please Enter Email ID');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:3px solid red');
    }
    else if(!vemail.test(remail)){
        alert('Please Enter Valid Email ID');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:3px solid red');
    }
    else if(rpassword == ''){
        alert('Please Enter Password');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:none');
        document.querySelector('.rpassword').setAttribute('style','border:3px solid red');
    }
    else if(!vpass.test(rpassword)){
        alert('Please Enter Valid Password');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:none');
        document.querySelector('.rpassword').setAttribute('style','border:3px solid red');
    }
    else if(rcpassword == ''){
        alert('Please Enter Confirm Password');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:none');
        document.querySelector('.rpassword').setAttribute('style','border:none');
        document.querySelector('.rcpassword').setAttribute('style','border:3px solid red');
    }
    else if(rpassword != rcpassword){
        alert('Password Not Match');
        document.querySelector('.rname').setAttribute('style','border:none');
        document.querySelector('.raddress').setAttribute('style','border:none');
        document.querySelector('.rcontact').setAttribute('style','border:none');
        document.querySelector('.rgender').setAttribute('style','border:none');
        document.querySelector('.rdate').setAttribute('style','border:none');
        document.querySelector('.remail').setAttribute('style','border:none');
        document.querySelector('.rpassword').setAttribute('style','border:none');
        document.querySelector('.rcpassword').setAttribute('style','border:3px solid red');
    }
    else{
        alert('Sign In Successfully');
        window.location="../index.html";
    }
}
//----- End Sign In -----

//----- Update Profile -----
function Update(){
    var uname = document.getElementById('uname').value;
    var uaddress = document.getElementById('uaddress').value;
    var ucontact = document.getElementById('ucontact').value;
    var ugender = document.getElementById('ugender').value;
    var udate = document.getElementById('udate').value;
    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
    var ucpassword = document.getElementById('ucpassword').value;

    var vnumber=/^[0-9]+$/;
    var vchar=/^[a-zA-Z\s]+$/;
    var vemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var vpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(uname == ''){
        alert('Please Enter Name');
        document.querySelector('.uname').setAttribute('style','border:3px solid red');
    }
    else if(!vchar.test(uname)){
        alert('Please Enter Valid Name');
        document.querySelector('.uname').setAttribute('style','border:3px solid red');
    }
    else if(uaddress == ''){
        alert('Please Enter Address');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:3px solid red');
    }
    else if(ucontact == ''){
        alert('Please Enter Contact Number');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:3px solid red');
    }
    else if(!vnumber.test(ucontact)){
        alert('please Enter Valid Number');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:3px solid red');
    }
    else if(ugender == ''){
        alert('please Enter Gender');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:3px solid red');
    }
    else if(!vchar.test(ugender)){
        alert('Please Enter character');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:3px solid red');
    }
    else if(udate == ''){
        alert('Please Enter Date');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:3px solid red');
    }
    else if(uemail == ''){
        alert('Please Enter Email ID');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:3px solid red');
    }
    else if(!vemail.test(uemail)){
        alert('Please Enter Valid Email ID');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:3px solid red');
    }
    else if(upassword == ''){
        alert('Please Enter Password');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:none');
        document.querySelector('.upassword').setAttribute('style','border:3px solid red');
    }
    else if(!vpass.test(upassword)){
        alert('Please Enter Valid Password');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:none');
        document.querySelector('.upassword').setAttribute('style','border:3px solid red');
    }
    else if(ucpassword == ''){
        alert('Please Enter Confirm Password');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:none');
        document.querySelector('.upassword').setAttribute('style','border:none');
        document.querySelector('.ucpassword').setAttribute('style','border:3px solid red');
    }
    else if(upassword != ucpassword){
        alert('Password Not Match');
        document.querySelector('.uname').setAttribute('style','border:none');
        document.querySelector('.uaddress').setAttribute('style','border:none');
        document.querySelector('.ucontact').setAttribute('style','border:none');
        document.querySelector('.ugender').setAttribute('style','border:none');
        document.querySelector('.udate').setAttribute('style','border:none');
        document.querySelector('.uemail').setAttribute('style','border:none');
        document.querySelector('.upassword').setAttribute('style','border:none');
        document.querySelector('.ucpassword').setAttribute('style','border:3px solid red');
    }
    else{
        alert('Update Successfully');
        window.location="../index.html";
    }
}
//----- End Update Profile
