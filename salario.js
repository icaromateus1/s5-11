function calculateSalary(salariofixo,venda){
    let bonus = (venda + 1200*3)/100
    let extra = ((venda-1200)*5)/100


    if(venda<=1200){
        return salariofixo + bonus 
    }

    else if (venda>1200) {
        return salariofixo + bonus + extra 

    }
    
}


function cashMachine(saque){

    let totalAvailable = calculateSalary
    let cedulas = [200,100,50]

    if (isNaN(saque) || typeof(saque) === 'string' || saque < 1 || saque > totalAvailable || saque === 3 || saque === 1) {
        return console.log(
          "Valor incorreto!!" 
        );
      }
    
      const newArrCedulas = cedulas.map(function(cedula) {
        cedulas = Math.floor(saque / cedula)
        if ((saque == 6 || saque == 8) && cedula == 5) {
          return 0;
        }
        saque -= cedulas * cedula
        return cedulas
      })
    
      console.log(
        `Notas entregues:
        ${newArrCedulas[0]} nota(s) de R$200,00, ${newArrCedulas[1]} nota(s) de R$100,00, ${newArrCedulas[2]} nota(s) de R$50,00 `
      )
    
    }
    