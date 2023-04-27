function tabuada(){
    let n = Number (prompt('Informe um numero '))
    let cont = 1

    while (cont <= 10){
        console.log (n + 'x' + cont + '=' + cont * n)
        cont ++
    }
}
