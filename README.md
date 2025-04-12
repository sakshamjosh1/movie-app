# 🎬 PrimeFlix - Movie App

## 1. Project Overview

A responsive web app that:
* Fetches movies from TMDB API
* Allows searching by movie name
* Displays ratings, overviews, and posters
* Deployed on GitHub Pages

### Tech Stack:

* HTML, CSS, JavaScript
* **API:** [The Movie Database](https://www.themoviedb.org/)

## 2. Setup & Installation

### Prerequisites

* TMDB API Key ([Get it here](https://www.themoviedb.org/settings/api))
* A modern browser (Chrome, Firefox, Edge)
*  Git (optional, for cloning)

### Running Locally

**1. Clone the repository**

```
git clone https://github.com/sakshamjosh1/movie-app.git
```
```
cd movie-app
```

**2. Add your TMDB API key**
Add:
```
const API_KEY = "YOUR_TMDB_API_KEY"; // Replace with your key
```

**3. Open `index.html` in a browser**

## 3. Features

### 🔍 Search Movies
* Type in the search bar to filter movies.
* Results update instantly (or on button press).

### ⭐ Ratings & Overview

Each movie card shows:
* Poster image
* Title
* TMDB rating (e.g., ⭐ 7.8/10)
* Overview (short description)

### 🎥 Responsive Design
Works on desktop of any resolution.



## 4. Project Structure

```
movie-app/  
├── index.html          # Main HTML file  
├── styles/  
│   └── style.css       # All CSS styles  
├── scripts/  
│   ├── script.js       # Fetches & displays movies 
├── assets/             # Logos, icons, etc.  
└── README.md           # Basic project info  
```


## 5. Deployment

### GitHub Pages

* Go to Settings > Pages in your GitHub repo.
* Select main branch (or gh-pages).
* Wait a minute, then visit:
```
https://sakshamjosh1.github.io/movie-app/
```



