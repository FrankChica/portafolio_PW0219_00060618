function Ordenamiento(arreglo){
   
    for (var i = 0; i < arreglo.length; i++) {

        for (var j = 0; j < arreglo.length-i-1; j++) {
           
            if(arreglo[j] > arreglo[j+1]){
                var tempo = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = tempo;
            }
        }
    }

    return arreglo;
}