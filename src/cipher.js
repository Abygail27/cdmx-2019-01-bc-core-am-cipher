window.cipher = {

    encode: (offset, text) => {
        let msj_vacio = "";

        //primera parte mayusculas ascii
        for (let i = 0; i < text.length; i++) {
            if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
             let asciicode = (text.charCodeAt(i) - 65 + offset) % 26 + 65; 
             let resultado_formula = String.fromCharCode(asciicode);
             msj_vacio += resultado_formula; 
            
    
            }
           //primera parte minusculas ascii
           else if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
         let asciicode = (text.charCodeAt(i) - 97 + offset) % 26 + 97; 
        let resultado_formula = String.fromCharCode(asciicode );
         msj_vacio += resultado_formula;

            }
            //primera parte signos ascii
            else{
            let resultado_formula = String.fromCharCode(text.charCodeAt(i));
            msj_vacio += resultado_formula; 
            


            }
        }

        //console.log(offset,msj_vacio);
        return msj_vacio;
    },
    decode: (offset, text) => {
        let msj_vacio = "";

        //segunda parte mayusculas ascii
        for (let i = 0; i < text.length; i++) {
            if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
             let asciicode = (text.charCodeAt(i) + 65 - offset) % 26 + 65; 
             let resultado_formula = String.fromCharCode(asciicode);
             msj_vacio += resultado_formula; 
            
    
            }
           //segunda parte minusculas ascii
           else if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){
            let asciicode = (text.charCodeAt(i) - 122 - offset) % 26 + 122; 
               let resultado_formula = String.fromCharCode(asciicode);
               msj_vacio += resultado_formula;

            }
            //segunda parte signos ascii
            else{
            let resultado_formula = String.fromCharCode(text.charCodeAt(i));
            msj_vacio += resultado_formula; 


            }
        }

        //console.log(offset,msj_vacio);
        return msj_vacio; 
    }

};  