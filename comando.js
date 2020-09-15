function Enviar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var tel = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var logradouro = document.getElementById("logradouro");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    if(validaction(nome.value,email.value,tel.value,cep.value,logradouro.value,numero.value,bairro.value,cidade.value,estado.value)==false)
        alert("Preencha todos os dados corretamente");
    else{
        event.preventDefault();
        document.write("Formulário Cadastrado.<br>Nome: "+ nome.value); 
        document.write("<br>Email: "+email.value); 
        document.write("<br>Telefone: "+tel.value); 
        document.write("<br>Cep: "+cep.value); 
        document.write("<br>Logradouro: "+logradouro.value);
        document.write("<br>Número: "+numero.value);  
        document.write("<br>Bairro: "+bairro.value);
        document.write("<br>Cidade: "+cidade.value);  
        document.write("<br>Estado: "+estado.value); 
    }
 
}
function validaction(n,e,t,c,l,n2,b,c2,e2){
    return n.length>0&&e.length>0&&t.length>0&&c.length>0&&l.length>0&&n2.length>0&&b.length>0&&c2.length>0&&e2.length>0;
}