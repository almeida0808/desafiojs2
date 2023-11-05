let listaAlunos = [
    {
        name:"Rogerio",
        mediaUm:10,
        mediaDois:7,
    },
    {   name:"Lucas",
        mediaUm:4,
        mediaDois:9,
    },
    {   name:"Rodrigo",
        mediaUm:9,
        mediaDois:5,
    },
    {   name:"Guilherme",
        mediaUm:5,
        mediaDois:6,},
]

function CalcularNotas(aluno){
    let media = (aluno.mediaUm + aluno.mediaDois) / 2;
    return`
    O aluno ${aluno.name} teve a media de ${media}`;
}


for(let aluno of listaAlunos){
    if((aluno.mediaUm + aluno.mediaDois) / 2 >= 7){
        alert(`${CalcularNotas(aluno)}. Foi aprovado, Parabéns!`)
    }else{
        alert(`${CalcularNotas(aluno)}. Foi reprovado, Estude para recuperação!`)
    }
}