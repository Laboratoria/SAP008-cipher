const cipher = {
  decode: function (desloc, msg) {
    this.valida_parametros(desloc, msg);
    let decoded = "";
    let msg_len = msg.length;
    const ultima_letra = 90;

    for (let contador= 0; contador < msg_len; contador++){
      let codigo_letra_atual = msg.charCodeAt(contador);
      let letra_atual = msg[contador];

      if (codigo_letra_atual == 32) {
        decoded += " "
        continue
      }

      let codigo_letra_decodada = ((codigo_letra_atual - ultima_letra - desloc) % 26) + ultima_letra;
      let letra_decodada = String.fromCharCode(codigo_letra_decodada);

      decoded += letra_decodada

      console.log(`${letra_atual} com codigo ${codigo_letra_atual} vira ${letra_decodada} codigo: ${codigo_letra_decodada}`);
    }
    return decoded;
  },
  encode: function (desloc,msg){
    this.valida_parametros(desloc,msg)
    let encoded = ""
    let msg_len = msg.length
    const primeira_letra = 65;

    for (let contador= 0; contador < msg_len; contador++) {
      let codigo_letra_atual = msg.charCodeAt(contador);
      let letra_atual = msg[contador];

      if (codigo_letra_atual == 32) {
        encoded += " "
        continue
      }

      let codigo_letra_encodada = ((codigo_letra_atual - primeira_letra + desloc) % 26) + primeira_letra;
      let letra_encodada = String.fromCharCode(codigo_letra_encodada);

      encoded += letra_encodada
      console.log(`${letra_atual} com codigo ${codigo_letra_atual} vira ${letra_encodada}, codigo: ${codigo_letra_encodada}`);
    }
    return encoded;
  },
  valida_parametros: function (desloc, msg){
    if ('number' != typeof (desloc) || 'string' != typeof (msg))
      throw TypeError();
  }

};

export default cipher;