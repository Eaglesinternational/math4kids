const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation() {
    // Generate larger numbers and ensure num1 is divisible by num2
    var num2 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    var num1 = Math.floor(Math.random() * 10 + 1) * num2; // num1 will be a multiple of num2

    var dummyAnswer1, dummyAnswer2;

    answer = num1 / num2; // Perform integer division

    // Ensure dummy answers are different from the correct answer
    do {
        dummyAnswer1 = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
    } while (dummyAnswer2 === answer || dummyAnswer2 === dummyAnswer1);

    var allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    var switchAnswers = [];

    // Shuffle answers
    while (allAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        switchAnswers.push(allAnswers.splice(randomIndex, 1)[0]);
    }

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function() {
    if (parseInt(option1.innerHTML) === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function() {
    if (parseInt(option2.innerHTML) === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function() {
    if (parseInt(option3.innerHTML) === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

generate_equation();
