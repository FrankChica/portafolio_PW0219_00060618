var arreglo = [5,10,36,7];
numero= 4;

function ocurrencias [arreglo,numero]{
    var contador= 0;

    for(var i=0; i<arreglo.length; i++){
        if(arreglo[i]==numero){
            contador++;
        }
    }
    console.log("numero de ocurrencia:"+" "+contador)
}

