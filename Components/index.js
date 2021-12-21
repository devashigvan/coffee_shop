//----- Menu -----
function menu(){
    var nav_list=document.querySelector('.nav-list ul');
    var search=document.querySelector('.nav-menu');

    if(nav_list.style.display=='block' && search.style.display=='block'){
        nav_list.style.display='none';
        search.style.display='none';
    }
    else{
        nav_list.style.display='block';
        search.style.display='block';
    }
}

//----- Profile -----
function profile(){
    var profile_list=document.querySelector('.menu-btn-list ul');

    if(profile_list.style.display=='block'){
        profile_list.style.display='none';
    }
    else{
        profile_list.style.display='block';
    }
}

//----- Blog -----
function blog(){
    alert("Not Available");
}

//----- fedback -----
function feedback(){
    var fname=document.getElementById('fname').value;
    var femail=document.getElementById('femail').value;
    var fmessage=document.getElementById('fmessage').value;

    var vchar=/^[a-zA-Z\s]+$/;
    var vemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(fname == ''){
        alert('Please Enter Full Name');
        document.querySelector('.fname').setAttribute('style','border:3px solid red');
    }
    else if(!vchar.test(fname)){
        alert('Please Enter Character');
        document.querySelector('.fname').setAttribute('style','border:3px solid red');
    }
    else if(femail == ''){
        alert('Please Enter Emaid ID');
        document.querySelector('.fname').setAttribute('style','border:none');
        document.querySelector('.femail').setAttribute('style','border:3px solid red');
    }
    else if(!vemail.test(femail)){
        alert('Please Enter Valid Email ID');
        document.querySelector('.fname').setAttribute('style','border:none');
        document.querySelector('.femail').setAttribute('style','border:3px solid red');
    }
    else if(fmessage ==''){
        alert('Please Enter Feedback Message');
        document.querySelector('.fname').setAttribute('style','border:none');
        document.querySelector('.femail').setAttribute('style','border:none');
        document.querySelector('.fmessage').setAttribute('style','border:3px solid red');
    }
    else{
        alert('Feedback Send Successfully');
        window.location="index.html";
    }
}