console.log("Hola :)")

const button = document.getElementById("button")
button.addEventListener("click", calculate_bmi)

function calculate_bmi()
{
	let height = document.getElementById("height").value
	let weight = document.getElementById("weight").value

	let index = (weight / (height * height)).toFixed(2)

	let result = document.getElementById("result")
	result.innerHTML = `Your BMI is: ${index}`
	result.style.display = "block"
}