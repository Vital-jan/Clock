var time = new Date();
var s=time.getSeconds();
m=time.getMinutes();
h=time.getHours();
console.log(h);
console.log(m);
console.log(s);

document.body.style.background = 'red';
alert( 'Элемент BODY стал красным, а сейчас обратно вернётся' );
document.body.style.background = '';

