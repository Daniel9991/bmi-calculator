const height_input = document.querySelector("#height");
const height_unit = document.querySelector("#height-unit");
const incorrect_height = document.getElementById("incorrect-height")
height_input.addEventListener('focus', focus_on_height)

const weight_input = document.querySelector("#weight");
const weight_unit = document.querySelector("#weight-unit");
const incorrect_weight = document.getElementById("incorrect-weight")
weight_input.addEventListener('focus', focus_on_weight)

const underweight = document.getElementById("underweight");
const normal = document.getElementById("normal");
const overweight = document.getElementById("overweight");
const obese = document.getElementById("obese");

const button = document.getElementById("button");
button.addEventListener("click", calculate_bmi);

const result = document.getElementById("result");


function calculate_bmi()
{
	//Validate data
	let height_warning = null;
	let weight_warning = null;

	if(height_input.value === '')
	{
		height_warning = "*Field cannot be empty.";
	}
	else if(isNaN(height_input.value))
	{
		height_warning = "*Must be a number.";
	}
	else if(height_input.value <= 0)
	{
		height_warning = "*Must be greater than 0.";
	}

	if(weight_input.value === '')
	{
		weight_warning = "*Field cannot be empty.";
	}
	else if(isNaN(weight_input.value))
	{
		weight_warning = "*Must be a number.";
	}
	else if(weight_input.value <= 0)
	{
		weight_warning = "*Must be greater than 0.";
	}

	if(height_warning != null || weight_warning != null)
	{
		if(height_warning != null){
			incorrect_height.textContent = height_warning;
			incorrect_height.style.visibility = "visible";
		}
		if(weight_warning != null){
			incorrect_weight.textContent = weight_warning;
			incorrect_weight.style.visibility = "visible";
		}
	}
	else
	{
		clean_table();
		hide_incorrect_message_text();

		height = height_input.value;
		weight = weight_input.value;

		if(height_unit.value === 'cm')
		{
			height = height / 100;
		}
		if(weight_unit.value === 'lb')
		{
			weight = weight / 2.2;
		}

		let index = (weight / (height * height)).toFixed(2);

		result.textContent = `Your BMI is: ${index}`;
		result.style.display = "block";
		result.scrollIntoView({behavior: "smooth"});

		if(index < 18.5)
		{
			id = "underweight";
		}
		else if(index < 25)
		{
			id = "normal";
		}
		else if(index < 30)
		{
			id = "overweight";
		}
		else{
			id = "obese";
		}

		highlight_table(id);
	}
}


function highlight_table(id)
{
	//Highlights table category where user belongs
	let row = document.getElementById(id);
	row.style.color = "black";
	row.style.backgroundColor = "rgb(214, 227, 255)";
}


function clean_table()
{
	//Clean table appearance before next calculation
	underweight.style.color = "#666";
	underweight.style.backgroundColor = "white";

	normal.style.color = "#666";
	normal.style.backgroundColor = "white";

	overweight.style.color = "#666";
	overweight.style.backgroundColor = "white";

	obese.style.color = "#666";
	obese.style.backgroundColor = "white";
}


function hide_incorrect_message_text()
{
	incorrect_height.style.visibility = "hidden";
	incorrect_weight.style.visibility = "hidden";
}


function focus_on_height()
{
	incorrect_height.style.visibility = "hidden";
}


function focus_on_weight()
{
	incorrect_weight.style.visibility = "hidden";
}