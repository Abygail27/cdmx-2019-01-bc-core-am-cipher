    
    // crear variables globales para llamarlas en funciones

    const mensaje_principal = document.getElementById ('text');
    const offset = document.getElementById ('offset');
    const en_code = document.getElementById ('encode');
    const de_code = document.getElementById ('decode');
    const clean = document.getElementById ('three');
    
        
    //crear botones con funcionalidad para encode, decode
    en_code.addEventListener ('click', ( )  => {
    let des_pla = parseInt(offset.value);
    let msj = mensaje_principal.value;
    document.getElementById('print_text').textContent = window.cipher.encode (des_pla,msj);

    }); 

    de_code.addEventListener ('click' , ( ) => {
    let des_pla = parseInt (offset.value);
    let msj = mensaje_principal.value;
    document.getElementById ('print_text').textContent = window.cipher.decode (des_pla,msj);

    });

    //funcion para refrescar la pagina 
    const refrescar = () => {
        location.reload (true);
    };
    clean.addEventListener ('click', refrescar); 

    //funcion pagina instrucciones
    const caja_principal = document.getElementById ('caja_principal');
    const caja_dos =document.getElementById ('instrucciones');
    
     //show and hide al hacer click 
    document.getElementById ('help').addEventListener ('click',( ) => {
        caja_principal.style.display = 'none';
        caja_dos.style.display = 'block';   
    });

    document.getElementById('menu').addEventListener ('click' , ( ) => { 
        caja_principal.style.display = 'block';
        caja_dos.style.display = 'none';  
    });
    


   
       
