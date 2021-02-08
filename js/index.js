import renderResult from './searchView.js';

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const apiKey = '555299b7-3ca7-470d-baf4-eb2b4f58b162';
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes';

// Add AJAX functions here:
const getRecipe = async () => {
	const recipeInput = input.value;
	const urlToFetch = `${url}?search=${recipeInput}&key=${apiKey}`;

	try {
		const res = await fetch(urlToFetch);
		if (res.ok) {
			const jsonResponse = await res.json();
			renderResult(jsonResponse);
		}
	} catch (error) {
		console.log(error);
	}
};

submitBtn.addEventListener('click', getRecipe);
