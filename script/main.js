//carrega após carregar a página
window.onload = () =>{

    'use strict';

    if('serviceWoker' in navigator){

        //registra o Service Worker no navegador
           
        navigator.serviceWoker
            .register('.sw/js');
    }


}