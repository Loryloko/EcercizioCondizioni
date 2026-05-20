let temperatura = Number(prompt('inserisci temperatura'));

//if(temperatura < -10){
//    console.log('copriti... ancora ti raffreddi');
//}else if(temperatura >= -10 && temperatura < 0){
//    console.log("non è tanto freddo quanto l'umidità");
//}else if(temperatura >= 0 && temperatura < 20){
//    console.log('non ci sono le mezze stagioni')
//}else if(temperatura >= 20 && temperatura < 30){
//    console.log('mi dia una peroni sudata')
//}else if( temperatura >= 30){
//    console.log('lu mare, lu sole, lu ientu')
//}

let descrizione

switch(true){
    case temperatura < -10:
    descrizione = 'copriti... ancora ti raffreddi'
    break;
    case temperatura >= -10 && temperatura < 0:
    descrizione = "non è tanto freddo quanto l'umidità"
    break;
    case temperatura >= 0 && temperatura < 20:
    descrizione = 'non ci sono le mezze stagioni'
    break; 
    case temperatura >= 20 && temperatura < 30:
    descrizione = 'mi dia una peroni sudata'
    break;
    case temperatura >= 30:
    descrizione = 'lu mare, lu sole, lu ientu'
}

console.log(descrizione)