console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully.');
}

let compliment = (evt) => {
	alert(`you're the prettiest aren't you`)
}


let form = document.querySelector('form#contact');

let ducky = document.querySelector('#ducky')

form.addEventListener('submit', handleSubmit);

ducky.addEventListener('mouseover',compliment )