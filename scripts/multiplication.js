const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;

function generate_equation() {
    const num1 = Math.floor(Math.random() * 13);
    const num2 = Math.floor(Math.random() * 13);
    let dummyAnswer1;
    let dummyAnswer2;

    // Calculate the correct answer
    answer = num1 * num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    // Log the calculated values for debugging
    console.log(`num1: ${num1}, num2: ${num2}, answer: ${answer}`);

    // Ensure dummy answers are different from the correct answer
    do {
        dummyAnswer1 = Math.floor(Math.random() * 169); // Expanded range
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 169); // Expanded range
    } while (dummyAnswer2 === answer || dummyAnswer2 === dummyAnswer1);

    const allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    option1.innerHTML = shuffledAnswers[0];
    option2.innerHTML = shuffledAnswers[1];
    option3.innerHTML = shuffledAnswers[2];
}

// Event listener for option1
option1.addEventListener("click", function() {
    const clickedValue = parseInt(option1.innerHTML);
    console.log(`Clicked option1 value: ${clickedValue}`); // Log clicked value
    if (clickedValue === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

// Event listener for option2
option2.addEventListener("click", function() {
    const clickedValue = parseInt(option2.innerHTML);
    console.log(`Clicked option2 value: ${clickedValue}`); // Log clicked value
    if (clickedValue === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

// Event listener for option3
option3.addEventListener("click", function() {
    const clickedValue = parseInt(option3.innerHTML);
    console.log(`Clicked option3 value: ${clickedValue}`); // Log clicked value
    if (clickedValue === answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

// Initial call to populate the first equation
generate_equation();
