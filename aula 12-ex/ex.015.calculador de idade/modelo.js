function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('foto')
        if (fsex[0].checked) {
            genero = 'Homem'
          if (idade >= 0 && idade <= 3) {
                //bebe
                img.src ='bebeh.png'
            } else if (idade < 8) {
                //crianca
                img.src = 'criancah.png'
            } else if (idade < 13) {
                //pre adolescente
                img.src = 'menino.png'
            } else if (idade < 18) {
                //adolescente
                img.src = 'adolescenteh.png'
            } else if (idade < 35) {
                //jovem
                img.src = 'homemjovem.png'
            } else if (idade < 60) {
                //experiente
                img.src = 'homemmaduro.png'
            } else {
                //idoso
                img.src = 'idoso.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                //bebe
                img.src = 'bebem.png'
            } else if (idade < 8) {
                //crianca
                img.src = 'criancam.png'
            } else if (idade < 13) {
                //preadolescente
                img.src = 'menina.png'
            } else if (idade < 18) {
                //adolescente
                img.src = 'adolescentem.png'
            } else if (idade < 35) {
                //jovem
                img.src = 'mulherjovem.png'
            } else if (idade < 60 ) {
                //experiente
                img.src = 'mulhermadura.png'
            } else {
                //idoso
                img.src = 'idosa.png'
            }
       } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    