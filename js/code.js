const height_input = document.querySelector("#height")
const height_unit = document.querySelector("#height-unit")

const weight_input = document.querySelector("#weight")
const weight_unit = document.querySelector("#weight-unit")

const underweight = document.getElementById("underweight")
const normal = document.getElementById("normal")
const overweight = document.getElementById("overweight")
const obese = document.getElementById("obese")

const button = document.getElementById("button")
button.addEventListener("click", calculate_bmi)


function calculate_bmi()
{
	//Validate data
	if(height_input.value === '' || weight_input.value === '')
	{
		alert('You must fill both fields.')
	}
	else if(isNaN(height_input.value) || isNaN(weight_input.value))
	{
		alert("Both height and weight must be numbers.")
	}
	else if(height_input.value <= 0 || weight_input.value <= 0)
	{
		alert("Both numbers must be greater than zero.")
	} 
	else
	{
		clean_table()

		height = height_input.value
		weight = weight_input.value

		if(height_unit.value === 'cm')
		{
			height = height / 100
		}
		if(weight_unit.value === 'lb')
		{
			weight = weight / 2.2
		}

		let index = (weight / (height * height)).toFixed(2);

		let result = document.getElementById("result")
		result.textContent = `Your BMI is: ${index}`
		result.style.display = "block"

		if(index < 18.5)
		{
			id = "underweight"
		}
		else if(index < 25)
		{
			id = "normal"
		}
		else if(index < 30)
		{
			id = "overweight"
		}
		else{
			id = "obese"
		}

		highlight_table(id)
	}
}


function highlight_table(id)
{
	//Highlights table category where user belongs
	let row = document.getElementById(id)
	row.style.color = "black"
	row.style.backgroundColor = "rgb(214, 227, 255)"
}


function clean_table()
{
	//Clean table appearance before next calculation
	underweight.style.color = "#666"
	underweight.style.backgroundColor = "white"

	normal.style.color = "#666"
	normal.style.backgroundColor = "white"

	overweight.style.color = "#666"
	overweight.style.backgroundColor = "white"

	obese.style.color = "#666"
	obese.style.backgroundColor = "white"
}