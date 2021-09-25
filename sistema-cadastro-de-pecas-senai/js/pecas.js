

/* Um sistema de cadastro de peças 
Se a peça pussuir um peso superior a 100gramas, pode cadastrar
Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, 
imprima uma mensagem informando não ter capacidade suficiente.
caso a peça tenha um nome com quantiade inferior a 3 caractes
iforme uma mensagem de erro.  */

//Cria a lista de peças no array temos 3 peças 


var pecas =[ //Cria um  array superdimencional 
    { //Cria o objeto peça, com duas propiedades (nomePeca, e PesoPeca)
      //Não precisa criar o idice pois cada fechamento de chaves é um indice começando do 0
    nomePeca:"Peca1",
    pesoPeca:100
    },
    {
    nomePeca:"Peca2",
    pesoPeca:123  
    }
    ,
    {
    nomePeca:"Peça 3",
    pesoPeca:340   
    }
    ,
    {
    nomePeca:"Peca4",
    pesoPeca:12   
    }
    ,
    {
    nomePeca:"a123",
    pesoPeca:100
    } 
    
]; 

// pecas.push({nomePeca:"p7",pesoPeca:123}) //comando para cadastrar novas peças
 for(var i=0; i< pecas.length; i++){
        
     if(pecas.length<=10){ //Se o tamanho da caixa for menor ou = 10 permite o cadastro 
      
          if(pecas[i].pesoPeca<100){
                console.log("Peça não pode ser cadastrada \nO peso deve ser maior que 100g");
                console.log("Nome: -> "+pecas[i].nomePeca+"\nPeso: -> "+pecas[i].pesoPeca+"g")
                console.log("---------------------------");
          } 
        else if(pecas[i].nomePeca.length<3){ //Testo se a peça tem caracter menor que 3 e mando a mensagem
            console.log("A peça não pode ser cadastrada Nome Peça inferior a 3 carateres");
            console.log("Nome: -> "+pecas[i].nomePeca);
            console.log("---------------------------");
        
            
        }
    }
    else{//Se a caixa de peças for superior a 10 então não permitirár o cadastro
        console.log("Caixa de peças com limite de 10 peças atingido");
    } 
 }
 //Observações
 // 1- no enunciado não se pede para criar 
 // um sistema de cadastro de forma dinâmica, apenas a lógica por trás do código é pedida


 //2 - Se fosse criar um sistema de cadastro colhendo os dados em um formulário
 // ou em um array a diferênca seria que: Estas validações não seriam mais feitas
 //dentro do objeto array pecas... (lista), e sim fora do array antes de adicionar ao array.



 //3 - No exemplo eu até coloque dentro do array alguns dados invalidos 
 // tipo letras do nome inferior a 3 caracteres ou peso menor que 100 gramas
 //ou quantiade de objetos maiores que 10, fiz isso apenas para testar os if s
  


