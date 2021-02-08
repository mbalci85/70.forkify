import showRecipe from './recipeView.js';

const apiKey = '555299b7-3ca7-470d-baf4-eb2b4f58b162';
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes';

const renderResult = (recipe) => {
	const results = document.querySelector('.results__list');
	let names = recipe.data.recipes;

	results.innerHTML = '';
	console.log(names);
	names.forEach((name) => {
		results.innerHTML += `<li>
        <a id = '${name.id}' class="results__link results__link--active" href="#23456">
            <figure class="results__fig">
                <img src="${name.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${name.title}</h4>
                <p class="results__author">${name.publisher}</p>
            </div>
        </a>
    </li>`;
	});
	let myA = document.getElementsByTagName('a');

	for (let i = 0; i < myA.length; i++) {
		myA[i].addEventListener('click', () => {
			let id = myA[i].id;
			getOneRecipe(id);
		});
	}
};
const getOneRecipe = (id) => {
	let urlToFetch = `${url}/${id}?key=${apiKey}`;
	fetch(urlToFetch)
		.then((res) => res.json())
		.then((data) => showRecipe(data))
		.catch((err) => console.log(err));
};

export default renderResult;
