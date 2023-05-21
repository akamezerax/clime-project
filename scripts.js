let chave = "53fec1e5d9df59835247c7e2be0162f2"

function botaNaTela(dados){
    document.querySelector(".nome-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".info").innerHTML = dados.weather[0].description
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    
}


async function buscarCidade(cidade){
        let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
         cidade +
         "&appid=" +
         chave +
        "&lang=pt_br" +
         "&units=metric"
        )
        .then(resposta => resposta.json())

        console.log(dados)

        botaNaTela(dados)

}




function cliqueiNoBotao(){
    let cidade = document.querySelector("input").value

    buscarCidade(cidade)
}
    