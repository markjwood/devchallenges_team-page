const people = [
	{
		name: 'Bill Mahoney',
		title: 'Product Owner',
		photo: '/images/photo1.png',
	},
	{
		name: 'Saba Cabrera',
		title: 'Art Director',
		photo: '/images/photo2.png',
	},
	{
		name: 'Shae Le',
		title: 'Tech Lead',
		photo: '/images/photo3.png',
	},
	{
		name: 'Skyla Lu',
		title: 'UX Designer',
		photo: '/images/photo4.png',
	},
	{
		name: 'Griff Richards',
		title: 'Developer',
		photo: '/images/photo5.png',
	},
	{
		name: 'Stan John',
		title: 'Developer',
		photo: '/images/photo6.png',
	},
];

const gallery = document.getElementById('gallery');
const personCount = people.length;

const columnCount = () => {
	// mobile breakpoint = 730px
	return window.innerWidth < 730 ? 2 : 3;
};
function setRows(persons, columns) {
	console.log(Math.ceil(persons / columns) * 6);
	gallery.style = `--rows: ${Math.ceil(persons / columns) * 6}`;
}

window.onload = () => {
	setRows(personCount, columnCount());
	people.forEach(person => {
		const personDiv = document.createElement('div');
		personDiv.className = 'person';
		personDiv.innerHTML = `
    <figure>
      <img src="${person.photo}" alt="${person.name}" />
      <figcaption>${person.name}</figcaption>
    </figure>
    <h3 class="job-title">${person.title}</h3>
  `;
		gallery.appendChild(personDiv);
	});
};
window.addEventListener('resize', () => {
	setRows(personCount, columnCount());
});
