import React from "react";

function MovieCard({ movie }) {
  return (
    <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
      <div className="border rounded-lg p-4 shadow hover:shadow-lg">
        <img
          src={movie.image}
          alt={movie.movie}
          className="w-full h-48 object-cover rounded-t"
        />
        <div className="p-2">
          <h2 className="text-xl font-semibold">{movie.movie}</h2>
          <p className="text-gray-600">Rating: {movie.rating}</p>
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
