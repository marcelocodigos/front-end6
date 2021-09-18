//Media de alunos
let n1 = parseFloat(window.prompt("Entre com a nota 1"));
let n2=  parseFloat(window.prompt("Entre com a nota 2"));
let n3 = parseFloat(window.prompt("Entre com a nota 3"));
let media = (n1+n2+n3)/3
if(media >=7){
    console.log("Aprovado! Média: "+media);
}else
console.log("Reprovado! media: "+media);

