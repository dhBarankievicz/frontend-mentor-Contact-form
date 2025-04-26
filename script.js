const form=document.getElementById('formulario');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nome=document.getElementById('nome');
    const nomeValor= nome.value;
    const sobrenome=document.getElementById('snome');
    const sobrenomeValor=sobrenome.value;
    const email=document.getElementById('email');
    const emailValor=email.value;
    const r1=document.getElementById('op1');
    const r2=document.getElementById('op2');
    const mensagem=document.querySelector('textarea');
    const mensagemValor=mensagem.value;
    const checkbox=document.getElementById('check');
    const fail = document.querySelectorAll('main p.fail');

    const negado='1px solid red'
    const permitido='1px solid  rgb(12, 125, 105)'
    let v1="";
    let v2="";
    let v3="";
    let v4="";
    let v5="";
    let v6="";

    if(nomeValor ==''){
        //alert('nome em branco')
        nome.style.border=negado;
        nome.closest('div').querySelector('p').style.visibility='visible';
        
    }else{
        nome.style.border=permitido;
        nome.closest('div').querySelector('p').style.visibility='hidden';
        v1='ok'
    }
    if(sobrenomeValor == ''){
        //alert('sobrenome em branco')
        sobrenome.style.border=negado
        sobrenome.closest('div').querySelector('p').style.visibility='visible'
    }else{
        sobrenome.style.border=permitido;
        sobrenome.closest('div').querySelector('p').style.visibility='hidden';
        v2='ok'
    }
    if(emailValor == ''){
        //alert('email em branco')
        email.style.border=negado
        email.nextElementSibling.style.visibility='visible';
    }else{
        email.style.border=permitido;
         email.nextElementSibling.style.visibility='hidden';
         v3='ok'
    }
    if(r1.checked == false && r2.checked == false){
        //alert('dois radio desmarcados')
        
        fail[3].style.visibility='visible';
    }else{
        if(r1.checked == true){
            r1.closest('div').style.border=permitido;
            r1.closest('div').style.backgroundColor='rgba(100, 240, 158, 0.23)';
            fail[3].style.visibility='hidden';
            r2.closest('div').style.border='';
            r2.closest('div').style.backgroundColor='';
            v4='ok'
        }else if(r2.checked == true){
            r2.closest('div').style.border=permitido;
            r2.closest('div').style.backgroundColor='rgba(100, 240, 158, 0.23)';
            fail[3].style.visibility='hidden';
            r1.closest('div').style.border='';
            r1.closest('div').style.backgroundColor='';
            v4='ok'
        }
    }
    if(mensagemValor == ''){
        //alert('mensagem em branco')
        mensagem.style.border=negado;
        mensagem.nextElementSibling.style.visibility='visible'
    }else{
        mensagem.style.border=permitido;
        mensagem.nextElementSibling.style.visibility='hidden';
        v5='ok'
    }if(checkbox.checked == false){
        //alert('checkbox nao marcada')
        fail[5].style.visibility='visible';
    }else{
        fail[5].style.visibility='hidden';
        v6='ok'
    }
    if(v1 === 'ok' && v2 === 'ok' && v3 === 'ok' && v4 === 'ok' && v5 === 'ok' && v6 === 'ok'){
       const sucesso=document.getElementById('s/f');
       sucesso.classList.add('success');
       sucesso.innerHTML=`<h4><img src="assets/images/icon-success-check.svg" alt="sucesso"> Mensagem enviada!</h4>
                            <p>Obrigado por nos contatar!<br/> Retornaremos em breve</p`;
    }else{
        return
    }
    
})
