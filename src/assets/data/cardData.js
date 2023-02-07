import pokePic from "../images/poke-project.png";
import rpsPic from "../images/rps-project.png";
import countriesPic from "../images/country-project.png";
import listingsPic from "../images/listings-project.png";

export const cardData = [
    {
        id: 1,
        img: pokePic,
        title: 'PokeAPI PokeDex',
        build: ['react', 'MUI', 'pokeAPI'],
        description: 'Fully responsive website built to consume the free pokeAPI. Used Material UI for styling and components. Page allows the user to query the API for informtion about pokemon and berries, and returns that information in a clean and concise UI.'
    },
    {
        id: 2,
        img: rpsPic,
        title: 'Rock, Paper, Scissors',
        build: ['react', 'styled components'],
        description: 'Web app to play a game of Rock, Paper, Scissors agianst a computer opponent. The app keeps a running score which is updated based on the outcome of each round. Possible outcomes are win/draw/lose.'
    },
    {
        id: 3,
        img: countriesPic,
        title: 'RestCountriesAPI',
        build: ['react', 'styled components', 'rest countries API'],
        description: 'Informational site built consuming the free rest countries API. Allows the user to search based on country name, and click on each card for more information about each country.'
    },
    {
        id: 4,
        img: listingsPic,
        title: 'Job Listings Page',
        build: ['react', 'styled components'],
        description: 'Sample single page layout of a job listings site. Clicking on filter tabs allows the user to filter the listings. Page was built to the design of a mockup provided.'
    },
]