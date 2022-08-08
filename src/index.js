import cipher from './cipher.js';

const acao_encode = document.getElementById("encode");
const acao_decode = document.getElementById("decode");

let set_output = function(msg){
    document.getElementById("cipher-output").value = msg;
    document.getElementById("msg").value = "";
}

let callback = function (evento) {
    const msg = document.getElementById("msg").value;
    const desloc = document.getElementById("deslocamento").value
    console.log(evento.target.id)
    console.log(`O evento chamado foi "${evento.target.id}", mensagem "${msg}" e deslocamento "${desloc}"`);

    if (evento.target.id == "encode")
        set_output(cipher.encode(parseInt(desloc), msg.toUpperCase()));
    else
        set_output(cipher.decode(parseInt(desloc), msg.toUpperCase()));
}
acao_encode.addEventListener("click",callback);

acao_decode.addEventListener("click",callback);
