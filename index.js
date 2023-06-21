let computerNumber;
let userNumbers = [];
let english = true;


function compareNumber() {
    let userNumber = Number(document.getElementById('number').value)
    userNumbers.push(" " + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    if (english === true) {
        if (userNumbers.length <= 10) {
            if (userNumber > computerNumber) {
                document.getElementById("your-guess").innerHTML = "Your number is too high!"
                document.getElementById("number").value = ""
            }
            else if (userNumber < computerNumber) {
                document.getElementById("your-guess").innerHTML = "Your number is too low!"
                document.getElementById("number").value = ""
            }
            else {
                document.getElementById("your-guess").innerHTML = "You Win!"
                document.getElementById("number").setAttribute("readOnly", "readOnly")
            }

            document.getElementById("attempts").innerHTML = userNumbers.length
        }

        else {
            document.getElementById("your-guess").innerHTML = "You Lose! - the result was " + computerNumber
            document.getElementById("number").setAttribute("readOnly", "readOnly")
        }
    }
    else {
        if (userNumbers.length <= 10) {
            if (userNumber > computerNumber) {
                document.getElementById("your-guess").innerHTML = "Seu número é alto!"
                document.getElementById("number").value = ""
            }
            else if (userNumber < computerNumber) {
                document.getElementById("your-guess").innerHTML = "Seu número é baixo!"
                document.getElementById("number").value = ""
            }
            else {
                document.getElementById("your-guess").innerHTML = "Você ganhou!"
                document.getElementById("number").setAttribute("readOnly", "readOnly")
            }

            document.getElementById("attempts").innerHTML = userNumbers.length
        }

        else {
            document.getElementById("your-guess").innerHTML = "Você perdeu! - o resultado é  " + computerNumber
            document.getElementById("number").setAttribute("readOnly", "readOnly")
        }
    }

}

function init() {
    document.getElementById("number").value = ""
    computerNumber = Math.floor(Math.random() * 100 + 1)
    document.querySelector("#button").classList.toggle('underline')

}

function newGame() {
    window.location.reload()
}

//Botão de modo de cor
document
    .querySelector(".dark")
    .addEventListener("click", function () {

        //cores de fundo
        document.querySelector("#containt").classList.toggle('darkmode-containt')
        document.querySelector("body").classList.toggle('darkmode')

        //borda nos botoes de opções
        const buttons = document.querySelectorAll(".options button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('darkmode-button')
        }
        //bordas das estatisticas
        document.querySelector(".second-left").classList.toggle('darkmode-border')
        document.querySelector(".second-right").classList.toggle('darkmode-border')
        document.querySelector("#submit").classList.toggle('darkmode-newGame')

    })

//Botão para idioma portugues
document
    .querySelector(".portuguese")
    .addEventListener("click", function () {
        english = false;

        let tip = document.getElementById("your-guess").innerText

        document.querySelector("div.first h1").innerHTML = "Descubra o número <br>1 - 100"
        document.querySelector("div.first #your-guess").innerHTML = "Sua tentativa:"
        document.querySelector(".second-right p").innerHTML = "Suas tentativas"
        document.querySelector(".second-left p").innerHTML = "Número de tentativas:"
        document.querySelector("#submit").innerHTML = "Novo jogo"

        if (tip == "Your number is too low!") {
            console.log(tip)
            document.getElementById("your-guess").innerHTML = "Seu número é baixo!"
        }
        else if (tip == "Your number is too high!") {
            console.log(tip)
            document.getElementById("your-guess").innerHTML = "Seu número é alto!"
        }

        document.querySelector(".portuguese").classList.add('underline')
        document.querySelector(".english").classList.remove('underline')


    })
//botao para idioma ingles
document
    .querySelector(".english")
    .addEventListener("click", function () {
        english = true;

        let tip = document.getElementById("your-guess").innerText

        document.querySelector("div.first h1").innerHTML = "Guess the number <br>1 - 100"
        document.querySelector("div.first #your-guess").innerHTML = "Your Guess:"
        document.querySelector(".second-right p").innerHTML = "Your guesses:"
        document.querySelector(".second-left p").innerHTML = "Number of attempts:"
        document.querySelector("#submit").innerHTML = "New game"

        if (tip == "Seu número é baixo!") {
            console.log(tip)
            document.getElementById("your-guess").innerHTML = "Your number is too low!"
        }
        else if (tip == "Seu número é alto!") {
            console.log(tip)
            document.getElementById("your-guess").innerHTML = "Your number is too high!"
        }

        document.querySelector(".portuguese").classList.remove('underline')
        document.querySelector(".english").classList.add('underline')
    })

