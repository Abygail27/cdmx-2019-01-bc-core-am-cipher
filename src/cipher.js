window.cipher = {

    encode: (offset, text) => {
        let msj = ""
        for (let i = 0; i < text.length; i++) {
            const codigo_ascii = text.charCodeAt(i);
            const formula_ascii = (codigo_ascii - 65 + offset) % 26 + 65;
            const codigo_cifrado = String.fromCharCode(formula_ascii);
            msj += codigo_cifrado;


        }

        //  console.log(offset,msj);
        return msj;
    },
    decode: (offset, text) => {
        let msj = ""
        for (let i = 0; i < text.length; i++) {
            const codigo_ascii = text.charCodeAt(i);
            const formula_ascii = (codigo_ascii + 65 - offset) % 26 + 65;
            const codigo_descifrado = String.fromCharCode(formula_ascii);
            msj += codigo_descifrado;


        }

        //  console.log(offset,msj);
        return msj;
    }

};        
