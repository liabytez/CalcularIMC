function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value)
    var height = parseFloat(document.getElementById("height").value)

    var bmi = weight / (height * height)

    var result = document.getElementById("result")

    if (bmi < 18.5) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (Underweight)"
        result.style.color = "purple";
    } else if (bmi < 25) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (Normal weight)"
        result.style.color = "green";
    } else if (bmi < 30) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (Overweight)"
        result.style.color = "blue";
    } else {
        result.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (Obese)"
        result.style.color = "red";
    }
}

/*
notes:
- toFixed: fixed decimals for aesthetic viewing
- result.style.color: change variable css color (text), not the best way but quickest lol
- parseFloat: changes string (.value) to numbers (again, in this case)
*/