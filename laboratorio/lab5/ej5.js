function cinco(array){
    var inicio;
    var final;
    var cont=0;

    for(var i=0; i<array.length; i++){
        if(array[i]===array[array.length-i-1]){
            cont++;
        }
    }

    if(cont===array.length){
        console.log("Es palindrome");
    }else{
        console.log("no es palindroma");
    }
}
