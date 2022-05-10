function  getScore ( nota )  { 
  deixe  notaA  =  nota  >= 90 
  deixe  notaB  =  nota  >= 80 
  deixe  notaC  =  nota  >= 70 
  deixe  notaD  =  nota  >= 60 
  deixe  notaF  =  nota  <  60  
  deixe  notaFinal ;

  if  ( notaA )  { 
      scoreFinal  =  'A' 
  }  else  if ( notaB )  { 
      scoreFinal  =  'B' 
  }  else  if ( notaC )  { 
      scoreFinal  =  'C' 
  }  else  if ( notaD )  { 
      scoreFinal  =  'D' 
  }  else  if ( notaF )  { 
      scoreFinal  =  'F' 
  }  else  { 
      scoreFinal  = "Nota inválida" 
  }  
  return  scoreFinal 
}  
console . log ( getScore ( 100 ) )


// Sistema de gastos familiares //

deixe  família  =  { 
  renda : [ 200 ,  700 ,  424 ,  333 ] , 
  despesas : [ 555 ,  122 ,  8888 ] 
}

função  soma ( array ) { 
  deixe  total  =  0

  for ( deixe o  valor  do  array )  { 
      total  +=  valor 
  } 
  return  total 
}

função  calcularSaldo ( )  { 
  const  calcularReceitas  =  soma ( família . rendas ) 
  const  calcularDespesas  =  soma ( família . despesas )

  const  total  =  calcularReceitas  -  calcularDespesas

  constante  positivo  =  total  >=  0

  let  balanceText  =  "negativo"

  if ( positivo )  { 
      balanceText  =  "positivo" 
  }

  consola . log ( `Seu saldo é ${ balanceText } , uma quantidade de: ${ total } .` )
  
}

calcular Saldo ( )

// Transformador de temperatura //

function  transformDegree ( grau )  { 
  const  celsiusExists  =  grau . paraUpperCCase ( ) . inclui ( "C" ) 
  const  fahrenheitsExists  =  grau . paraUpperCase ( ) . inclui ( "F" )


  if ( ! celsiusExists  &&  ! fahrenheitsExists )  { 
      throw  new  Error ( 'Grau não identificado' ) 
  }

  let  updatedDegree  =  Number ( degree . toUpperCase ( ) . replace ( "F" ,  "" ) ) 
  let  formula  =  fahrenheit  = >  ( fahrenheit  -  32 )  *  5/9 let degreeSign = " C"
     

  if ( celsiusExists )  { 
      updatedDegree  =  Number ( degree . toUpperCase ( ) . replace ( "C" ,  "" ) ) 
      formula  =  celsius  =>  celsius  *  9/5 + 32 degreeSign = " F " } return formula ( updatedDegree ) + degreeSign }  
        
  
     


tente  { 
  console . log ( transformDegree ( "25C" ) ) 
}  catch ( Erro )  { 
  console . log ( erro . mensagem ) 
}