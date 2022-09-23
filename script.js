// define global variable:
let attractions;

// fetch to load attraction dataset
fetch('attractions.json')
	.then(response => response.json())
	.then( d => {
		attractions = d;
		filterData();
	})

// choose select_box from HTML by ID
const which_category = document.querySelector("#attraction-category");
which_category.addEventListener("change", e => {
	let currentCategory = e.target.value;

  // call filterData given selected category from user
	filterData(currentCategory);
});

function filterData(selected_category) {
  let filterCategory;
	if (selected_category != undefined) {
		filterCategory = attractions.filter(a => a.Category === selected_category)}
	else {
		filterCategory = attractions;
	}

	let fiveMostVisit = filterCategory.sort((firstPlace, secondPlace) => secondPlace.Visitors - firstPlace.Visitors);
	fiveMostVisit = fiveMostVisit.slice(0,5);

  // call renderBarChart given the 5 most visited place in given category
	renderBarChart(fiveMostVisit);
}



