
const API_KEY = "ff71d3459172c77ef2406661423bf765";
const endpoint = "https://api.themoviedb.org/3/search/movie?api_key=ff71d3459172c77ef2406661423bf765&query=christ"




const buttonElement = document.querySelector('#searchb')
const inputElement = document.querySelector('#inputt')
const movieSearchable = document.querySelector('#movie-searchable')

buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;
    
    fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            const movies =data.results;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild (movieBlock);
            console.log ('Data: ' , data);
        })
        .catch((error) => {
            console.log ('Error: ' , error);
        });
}

function movieSection (movies) {
    return movies.map((movie) => {
        return `
        <img src = ${movie.poster_path} data-movie-id=${movie.id}/>
        `;
 
    
})
}

function createMovieContainer () {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class , movie');

    const movieTemplate = `
    <section class= 'section'>
     ${movieSection (movies)};
  </section>
  <div class="content">
    <p id='content-close'>X</p>
  </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

















