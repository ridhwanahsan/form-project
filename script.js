const txt1 = document.getElementById('user');
const mail = document.getElementById('mail');
 const proj = document.getElementById('project');
 const number = document.getElementById('num')
const btn1 = document.getElementById('btn1'); const out1 = document.getElementById
('output1');



function fun1() {
    out1.innerHTML = txt1.value;
    outmail.innerHTML = mail.value;
    otproject.innerHTML = proj.value;
    outnum.innerHTML= number.value;


}
btn1.addEventListener('click', fun1);