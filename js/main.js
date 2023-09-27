
const button = document.querySelector("main button")

const b2 = document.querySelector("main #b2")

const b3 = document.querySelector("main #b3") // This will TRAVAR and never execute next codes step 


// to use on b3 clicked
function stepsIntoFunctionB3(){
  while(true){
    setTimeout(console.log("Executando o while eternamente\n Isso representa a situação onde a função com uma call back que atrasa toda a aplicação",2000))
    
    console.log("::\nlog 1")
  
    console.log("log 2")
  
    console.log("log 3")
  
    
    console.log("log 4")
  }

}


b3.addEventListener("click", function OrdemDeExecucaoDentroDaStackFunctions(){

  stepsIntoFunctionB3()
  console.log("--LOG 5 \n")

})

// to use on b2 clicked:

function stepsIntoFunction(){
  console.log("\nlog 1")
  
  console.log("log 2")

  console.log("log 3")

  
  console.log("log 4")
}

b2.addEventListener("click", function OrdemDeExecucaoDentroDaStackFunctions(){

  stepsIntoFunction()
  console.log("--LOG 5 \n")
})

button.addEventListener("click", function executaNoClick(){
  console.log("Mensagem de log somente para testar ")
})
