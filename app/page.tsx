"use client";

import { useEffect, useState } from "react";
import TicketTemplate from "./ticket-template";

const formatDateTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = date.toLocaleString("en-US", options);
  const [weekday, datePart, year, time] = formattedDate.split(",");
  return `${time.toLowerCase()} | ${weekday}, ${datePart}, ${year}`;
};

const generateBookingId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 8 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

const getNowPlayingMovies = async () => {
  // Define the API endpoint and the authorization token
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?certification_country=IN&include_adult=true&include_video=false&page=1&region=IN&release_date.gte=2024-12-25&release_date.lte=2025-01-30&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&watch_region=IN&with_original_language=hi&with_release_type=3&with_runtime.gte=0&with_runtime.lte=400`;

  const authToken = process.env.NEXT_PUBLIC_THE_MOVIE_DB_TOKEN || "";

  // Send a GET request to the API endpoint with the authorization token
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: authToken,
      "Content-Type": "application/json",
    },
  });

  // Check if the response is not successful and throw an error if so
  if (!response.ok) throw new Error("Failed to fetch data from TMDB API");

  // Parse the JSON response
  const data = await response.json();

  // Prepare the output with the fetched data
  const movie = data.results;
  return movie;
};
export default function Home() {
  const [movieName, setMovieName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [movieDateTime, setMovieDateTime] = useState("");
  const [bookingDateTime, setBookingDateTime] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [movies, setMovies] = useState<Array<any>>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>({});
  

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    getNowPlayingMovies().then(data=>{
      setMovies(data);
      if(data.length){
        setSelectedMovie({...data[0], poster_path: `https://image.tmdb.org/t/p/w500/${data[0].poster_path}`});
      }
    });

    setMovieName(
      searchParams.get("movieName") || "Kalki 2898 AD (3D Hindi) (U/A)"
    );
    setImageUrl(
      searchParams.get("imageUrl") ||
        "https://in.bmscdn.com/events/moviecard/ET00402192.jpg"
    );

    const movieDefaultDateTime = new Date();
    movieDefaultDateTime.setDate(movieDefaultDateTime.getDate() - 1);
    const defaultHour = Math.random() * 12 + 12;
    movieDefaultDateTime.setHours(defaultHour, 0, 0, 0); // Set to 9:00 PM

    const bookingDefaultDateTime = new Date();
    bookingDefaultDateTime.setDate(bookingDefaultDateTime.getDate() - 1);
    bookingDefaultDateTime.setHours(defaultHour - 1, 0, 0, 0);

    setMovieDateTime(
      searchParams.get("movieDateTime") || formatDateTime(movieDefaultDateTime)
    );
    setBookingDateTime(
      searchParams.get("bookingDateTime") ||
        formatDateTime(bookingDefaultDateTime)
    );

    setBookingId(generateBookingId());
  }, []);


  useEffect(()=>{

  }, [])

  return (
    <div>
      <div>
        <ul className="flex gap-4 p-4 overflow-y-auto">
          {movies.map(movie=>(
            <li
              key={movie.title} 
              className={`w-[300px] p-2 cursor-pointer flex flex-col ${selectedMovie.title === movie.title ? "border border-green":""}`}
              onClick={()=>{setSelectedMovie({...movie, poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`})}}
            >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              <div>{movie.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200 p-4 flex justify-center">
        <div className="w-[600px] ">
          <TicketTemplate
            movieName={selectedMovie.title || movieName}
            imageUrl={selectedMovie.poster_path || imageUrl}
            movieDateTime={movieDateTime}
            bookingDateTime={bookingDateTime}
            bookingId={bookingId}
            isAdult={selectedMovie.adult}
          ></TicketTemplate>
        </div>
        
      </div>
    </div>
  );
}
