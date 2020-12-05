let form1=document.getElementById('form')
form1.addEventListener('submit',function(event){
    event.preventDefault()
    let obj1={};
    let p1=document.getElementById('password1')
    let p2=document.getElementById('password2')
    if(p1.value!==p2.value){
        alert('Re-type your password')
        p2.style.borderColor='red'
        document.getElementById('smaPa').innerText='Error:Re-type your password'

    }else{
        p2.style.borderColor='black'
        document.getElementById('smaPa').innerText='';
    [...this.elements].forEach(inputBox =>{
        if(inputBox.type!=='submit'){
        obj1[inputBox.type]=inputBox.value
        inputBox.value=''
    }
    })
}
document.getElementById('con').innerText='Thanks for your registration'
    console.log(obj1);
})
let p1=document.getElementById('password1')
let openEye=document.getElementById('icon')
let clEye=document.getElementById('spy')
function fun(){
    if(p1.type=='password'){
        p1.type='text'
        openEye.style.display='none'
        clEye.style.display='inline'
    }else{
        p1.type='password'
        openEye.style.display='inline'
        clEye.style.display='none'
    }
}