function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    //msg.innerHTML= `Agora são ${hora} horas`
    if (hora >= 6 &&  hora < 12) {
        //bom dia
        img.src = 'manha.png'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        window.document.body.style.background = "#e6fa78"
     } else if (hora >= 12 && hora <= 18) {
         //boa tarde
         img.src = 'tarde.png'
         msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
         window.document.body.style.background = "#f75f3a"
     } else if (hora > 18 && hora < 24) {
         //boa noite
         img.src = 'noite.png'
         msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
         document.body.style.background = "#240557"
     } else {
         //boa madrugada 
         img.src = 'madrugada.png'
         msg.innerHTML = `Agora são ${hora} horas. Boa madrugada!`
         document.body.style.background = "#2c283b"
     }
  
 }
