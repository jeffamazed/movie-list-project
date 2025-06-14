# Movie List Project

A React-based web application for discovering and managing your favorite movies!  
Inspired by [Tech With Tim's YouTube tutorials](https://www.youtube.com/@TechWithTim), this project demonstrates how to interact with [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data and create a modern, responsive movie list app.

## Features

- **Browse Popular Movies:** See what's trending with real-time data from TMDb.
- **Search for Films:** Instantly search for movies by title.
- **Detailed Movie Pages:** View movie details including synopsis, release date, rating, and poster.
- **Responsive Design:** Looks great on desktop and mobile devices.
- **Add to Favorites:** Click the heart icon to save your favorite movies for easy access.

## Technologies Used

- **React** – For building the user interface
- **CSS** – For layout and styling
- **Fetch API** – For HTTP requests to TMDb

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### TMDb API Key

This project uses data from [The Movie Database (TMDb)](https://www.themoviedb.org/).  
**You must register for a free API key:**

1. Go to [themoviedb.org](https://www.themoviedb.org/documentation/api)
2. Sign up for an account and request an API key.
3. After approval, you'll receive a key (e.g., `abcd1234...`).

**Add your API key**  
Open the `src/services/api.js` file and replace `"YOUR_API_KEY_HERE"` with your actual TMDb API key:

```js
// src/services/api.js
const API_KEY = "YOUR_API_KEY_HERE";
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jeffamazed/movie-list-project.git
   cd movie-list-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## Usage

- Use the search bar to look up any movie.
- Click on a movie to see more details.
- Click the heart icon on any movie to add it to your favorites.

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

- [Tech With Tim YouTube Channel](https://www.youtube.com/@TechWithTim) - for inspiration & tutorials
- [The Movie Database (TMDb)](https://www.themoviedb.org/) - for the movie API

_This product uses the TMDb API but is not endorsed or certified by TMDb._
