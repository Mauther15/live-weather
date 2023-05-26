const key = "e9d58f3b130b24fcef794401c297b73b"

function completarDados (dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name + ", " +dados.sys.country
    document.querySelector(".temperatura").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    
}

async function buscarCidade (cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    completarDados(dados)
}


function cliqueNoBotao () {
    const cidade = document.querySelector('#pesquisar').value

    buscarCidade(cidade)
}   