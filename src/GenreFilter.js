// GenreFilter.js
import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div>
      <h2>Genre</h2>
      <div>
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
