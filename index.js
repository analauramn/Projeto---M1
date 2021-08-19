function EscolhaOpcoes (a,b, proximaFase, gameOver){
    while (true){
        var escolha = Number (prompt("Qual é a tua escolha?"))
        if ([1,2,3,4,5 ].includes(escolha)){
            if (escolha === a || escolha === b){
                location.replace (proximaFase)
            } 
            else {
                while (true){
                    escolha = Number (prompt("Tente novamente! Qual é a tua escolha?"))
                    if ([1,2,3,4,5 ].includes(escolha)){
                        if (escolha === a || escolha === b){
                            location.replace (proximaFase)
                        } 
                        else { 
                            location.replace (gameOver)
                        }
                    }
                    break
                }   
            }
            return
        }
    }
}
// Função Página Principal
function EscolhaPersonagens (){
    while (true){
        var escolha = Number (prompt("Qual é a tua escolha?"))
        if ([1,2,3 ].includes(escolha)){
            if (escolha === 1) { 
                location.replace ("P1/index.html")
            }
            if (escolha === 2) { 
                location.replace ("P2/index.html")
            }
            if (escolha === 3) { 
                location.replace ("P3/index.html")
            }
        }
        return
    }
}