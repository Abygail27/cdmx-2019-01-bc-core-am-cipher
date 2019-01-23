    
    // crear variables globales para llamarlas en funciones

    const mensaje_principal = document.getElementById ('text');
    const offset = document.getElementById ('offset');
    const en_code = document.getElementById ('encode');
    const de_code = document.getElementById ('decode');
    const clean = document.getElementById ('three');
    //const print_text = document.getElementById ('print');

        
    //crear botones con funcionalidad para encode, decode
    en_code.addEventListener ('click', ( )  => {
    let des_pla = parseInt(offset.value);
    let msj = mensaje_principal.value;
    document.getElementById('print_text').textContent = window.cipher.encode (des_pla,msj);
    //console.log(en_code);
    }); 

    de_code.addEventListener ('click' , ( ) => {
    let des_pla = parseInt (offset.value);
    let msj = mensaje_principal.value.toUpperCase();
    document.getElementById ('print_text').textContent = window.cipher.decode (des_pla,msj);
    //console.log(de_code); 
    });

    //funcion para refrescar la pagina 
    const refrescar = () => {
        location.reload (true);
    };
    clean.addEventListener ('click', refrescar); 