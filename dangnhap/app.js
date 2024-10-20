Array.from(document.getElementsByTagName('input')).forEach((i,a) => {
    i.addEventListener('focus', () => {
        document.getElementsByClassName('login_field')[a].style.borderBottom = "2px solid #4c6374";
    });
    i.addEventListener('focusout', () => {
        document.getElementsByClassName('login_field')[a].style.borderBottom = "2px solid gray";
    });
});
function checknull(txt){
    if(txt.value.length==0)
        return true;
    else
        return false;
}
function login(l){
    if(checknull(l.User)){
        alert(l.User.name + " must be not null");
        l.User.focus();
        return;
    }
    if(checknull(l.pass)){
        alert(l.pass.name + " must be not null");
        l.pass.focus();
        return;
    }
    else{
        alert("Login successful");
    }
    // setTimeout(function() {
    //     window.location.href = ""; // Thay đổi đường dẫn này thành trang bạn muốn chuyển đến
    // }, 1000);
}
function signup(s){
    if(checknull(s.User)){
        alert(s.User.name + " must be not null");
        s.User.focus();
        return;
    }
    if(checknull(s.pass)){
        alert(s.pass.name + " must be not null");
        s.pass.focus();
        return;
    }
    if(checknull(s.repass)){
        alert(s.repass.name + " must be not null");
        s.repasspass.focus();
        return;
    }
    if(s.pass.value !== s.repass.value){
        alert("Pass and repass are not the same")
    }
    else{
        alert("signup successful");
        // setTimeout(function() {
        //     window.location.href = ""; // Thay đổi đường dẫn này thành trang bạn muốn chuyển đến
        // }, 1000);
    }
}