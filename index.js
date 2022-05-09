function Stock(atual,max,mini){
    let atual = 0
    let max = 0
    let mini = 0 

    let media = max + mini/2

    if(atual >= media ){
        return 'Não efetuar compra'
    }
    else{
       return 'Efetuar compra'
    }


}