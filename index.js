let computerNumber;
let userNumbers = [];

function compareNumber() {
    let userNumber = Number(document.getElementById('number').value)
    userNumbers.push(" " + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

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

    else{
        document.getElementById("your-guess").innerHTML = "You Lose! - the result was " + computerNumber
        document.getElementById("number").setAttribute("readOnly", "readOnly")
    }

}

function init() {
    document.getElementById("number").value = ""
    computerNumber = Math.floor(Math.random() * 100 + 1)

}

function newGame() {
    window.location.reload()
}
