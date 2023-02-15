import pokePic from "../images/poke-project.png";
import rpsPic from "../images/rps-project.png";
import countriesPic from "../images/country-project.png";
import listingsPic from "../images/listings-project.png";

export const cardData = [
    {
        id: 1,
        img: pokePic,
        title: 'PokeAPI PokeDex',
        build: ['React', 'MUI'],
        description: 'Fully responsive website built to consume the free pokeAPI. Used Material UI for styling and components. Page allows the user to query the API for informtion about pokemon and berries, and returns that information in a clean and concise UI.',
        code: 'https://github.com/jeff343/poke-api',
        live: 'https://jeff343.github.io/frem-rps-game/'
    },
    {
        id: 2,
        img: rpsPic,
        title: 'Rock, Paper, Scissors',
        build: ['React', 'Styled Components'],
        description: 'Web app to play a game of Rock, Paper, Scissors agianst a computer opponent. Keeps a running score which is updated based on the outcome of each round. Possible outcomes are win/draw/lose.',
        code: 'https://github.com/jeff343/frem-rps-game',
        live: 'https://jeff343.github.io/frem-rps-game/'
    },
    {
        id: 3,
        img: countriesPic,
        title: 'RestCountriesAPI',
        build: ['React', 'Styled Components'],
        description: 'Informational site built consuming the free rest countries API. Allows the user to search based on country name, and click on each card for more information about each country.',
        code: 'https://github.com/jeff343/frem-countries',
        live: 'https://jeff343.github.io/frem-countries/'
    },
    {
        id: 4,
        img: listingsPic,
        title: 'Job Listings Page',
        build: ['React', 'Styled Components'],
        description: 'Sample single page layout of a job listings site. Clicking on filter tabs allows the user to filter the listings. Page was built to the design of a mockup provided.',
        code: 'https://github.com/jeff343/frem-job-listings',
        live: 'https://jeff343.github.io/frem-job-listings/'
    },
]