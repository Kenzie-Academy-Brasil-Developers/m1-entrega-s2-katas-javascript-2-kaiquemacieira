// comece a criar a sua função add na linha abaixo
function add(a,b){
    let soma = a + b;
    return soma;
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let multi = 0;
        for (i = 0; i < b; i++){
            multi = add(a,multi);
        }
        return multi;
}

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a, b){
    let potencia = 1;
    for(let i = 0; i < b; i++){
        potencia = multiply(potencia, a);
    } return potencia;
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n){
    let result = 1;
        if (n !== 0 && n !== 1){
        result = multiply(n,factorial(n-1));
        }
        return result;    

}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
