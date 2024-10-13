function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert ('Verifique os dados e tente novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if ( fsex [0].checked){
        gênero = 'Homem'
        if (idade >= 0 && idade < 10 ) {
          img.setAttribute ('src', 'imagens/bebeo.jpg')
        } else if ( idade < 21 ) {
            img.setAttribute ('src', 'imagens/menino.jpg')
        } else if (idade < 50) {
            img.setAttribute ('src', 'imagens/homem.jpg')
        } else {
            img.setAttribute ('src', 'imagens/idoso.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10 ) {
            img.setAttribute ('src', 'imagens/bebea.jpg')
        } else if ( idade < 21 ) {
            img.setAttribute ('src', 'imagens/menina.jpg')
        } else if (idade < 50) {
            img.setAttribute ('src', 'imagens/mulher.jpg')
        } else {
            img.setAttribute ('src', 'imagens/idosa.jpg')
        }
}
res.style.textAlign = 'center'
res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
res.appendChild(img)


}

}