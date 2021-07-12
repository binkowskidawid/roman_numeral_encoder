let arabicInput = document.querySelector(".arabic_input");
let romanNumber = document.querySelector(".roman_number");

let num;

const romanEncoder = (num) => {
	if (num === 0) {
		return (romanNumber.innerHTML = "");
	}

	const romanValues = [
		{
			roman: "M",
			value: 1000
		},
		{
			roman: "CM",
			value: 900
		},
		{
			roman: "D",
			value: 500
		},
		{
			roman: "CD",
			value: 400
		},
		{
			roman: "C",
			value: 100
		},
		{
			roman: "XC",
			value: 90
		},
		{
			roman: "L",
			value: 50
		},
		{
			roman: "XL",
			value: 40
		},
		{
			roman: "X",
			value: 10
		},
		{
			roman: "IX",
			value: 9
		},
		{
			roman: "V",
			value: 5
		},
		{
			roman: "IV",
			value: 4
		},
		{
			roman: "I",
			value: 1
		}
	];

	const result = [];

	romanValues.forEach((element) => {
		const check = num / element.value;
		const repeat = element.roman.repeat(check);
		num = num % element.value;
		result.push(repeat);
	});
	return result.join().match(/[A-Z]/g).join("");
};

const arabNum = arabicInput.addEventListener("input", (e) => {
	e.preventDefault();
	num = Number(e.target.value);
	if (num > 3000) return;
	romanNumber.innerHTML = `${romanEncoder(num)}`;
});
