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

const cinemas = [
  `Cinepolis: Fun Republic Mall, Andheri (W)`,
  `Movietime: The Hub, Goregaon`,
  `INOX: Thakur Movie, Kandivali (E)`,
  `Carnival: Sangam, Andheri`,
  `Miraj Anupam Cinemas: Goregaon (E)`,
  `PVR ICON: Oberoi Mall, Goregaon (E)`,
  `PVR: Infiniti, Malad 4DX Mumbai`,
]

const generateSeatNumber = () => {
  const rows = ["M", "N", "O", "P", "Q"];
  const row = rows[Math.floor(Math.random() * rows.length)];
  const seat = Math.floor(Math.random() * 15) + 1;
  return `${row}${seat} ${row}${seat+1} `;
};

const generateBookingId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 8 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

const getNowPlayingMovies = async (movieFilter:any) => {
  // Define the API endpoint and the authorization token
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?certification_country=${movieFilter.country}&include_adult=${movieFilter.includeAdult}&page=1&region=${movieFilter.country}&release_date.gte=${movieFilter.releaseDateGt}&release_date.lte=${movieFilter.releaseDateLt}&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&watch_region=IN&with_original_language=hi&with_release_type=3`;

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
  const [seatNos, setSeatNos] = useState<any>("");
  const [cinema , setCinema] = useState("")
  const [quantity , setQuantity] = useState(2)
  const [price , setPrice] = useState(550);

  const [movieFilter, setMovieFilter] = useState({
    country: "IN",
    includeAdult: "true",
    releaseDateGt: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0],
    releaseDateLt: new Date().toISOString().split('T')[0],
  })

  const fetchMovies = ()=>{
    getNowPlayingMovies(movieFilter).then(data=>{
      setMovies(data);
      if(data.length){
        setSelectedMovie({...data[0], poster_path: `https://image.tmdb.org/t/p/w500/${data[0].poster_path}`, aRating: data[0].adult ? "(A)" : "(U/A)"});
      }
    });
  }
  

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    fetchMovies();
   
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

    setCinema(cinemas[Math.floor(Math.random()) * cinemas.length])
    setSeatNos(generateSeatNumber());
    setBookingId(generateBookingId());
    setPrice((Math.floor(Math.random()*30)+45)*10);
  }, []);


  return (
    <div>
      <div>
        <div className="bg-gray-200 flex justify-center flex-col items-center">
          <ul className="flex bg-gray-300 p-4 gap-4 flex-wrap w-full">
            <li className="flex flex-col">
              <label>Country</label>
              <input className="border-gray-400 px-2 border" value={movieFilter.country} onChange={(v)=>{setMovieFilter({...movieFilter, country: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Include Adult</label>
              <input className="border-gray-400 px-2 border" value={movieFilter.includeAdult} onChange={(v)=>{setMovieFilter({...movieFilter, includeAdult: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Release Date After</label>
              <input className="border-gray-400 px-2 border" value={movieFilter.releaseDateGt} onChange={(v)=>{setMovieFilter({...movieFilter, releaseDateGt: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Release Date Before</label>
              <input className="border-gray-400 px-2 border" value={movieFilter.releaseDateLt} onChange={(v)=>{setMovieFilter({...movieFilter, releaseDateLt: v.target.value})}}/>
            </li>
            <li >
              <button className="bg-white p-4 border border-gray-200 rounded-lg cursor-pointer" onClick={()=>{fetchMovies()}}>Fetch</button>
            </li>
          </ul>
        </div>
        <ul className="flex gap-4 p-4 overflow-y-auto">
          {movies.map(movie=>(
            <li
              key={movie.title} 
              className={`w-[300px] p-2 cursor-pointer flex flex-col ${selectedMovie.title === movie.title ? "border border-green":""}`}
              onClick={()=>{setSelectedMovie({...movie, poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, aRating: movie.adult ? "(A)" : "(U/A)"})}}
            >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              <div>{movie.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200 flex justify-center flex-col items-center">
        <div>
          <ul className="flex bg-gray-300 p-4 gap-4 flex-wrap w-full">
            <li className="flex flex-col">
              <label>Movie Title</label>
              <input className="border-gray-400 px-2 border" value={selectedMovie.title} onChange={(v)=>{setSelectedMovie({...selectedMovie, title: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Poster URL</label>
              <input className="border-gray-400 px-2 border" value={selectedMovie.poster_path} onChange={(v)=>{setSelectedMovie({...selectedMovie, poster_path: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Rating</label>
              <input className="border-gray-400 px-2 border" value={selectedMovie.aRating} onChange={(v)=>{setSelectedMovie({...selectedMovie, aRating: v.target.value})}}/>
            </li>
            <li className="flex flex-col">
              <label>Movie DateTime</label>
              <input className="border-gray-400 px-2 border" value={movieDateTime} onChange={(v)=>{setMovieDateTime(v.target.value)}}/>
            </li>
            <li className="flex flex-col">
              <label>Booking DateTime</label>
              <input className="border-gray-400 px-2 border" value={bookingDateTime} onChange={(v)=>{setBookingDateTime(v.target.value)}}/>
            </li>
            <li className="flex flex-col">
              <label>Booking ID</label>
              <input className="border-gray-400 px-2 border" value={bookingId} onChange={(v)=>{setBookingId(v.target.value)}}/>
            </li>
            <li className="flex flex-col">
              <label>Seat Numbers</label>
              <input className="border-gray-400 px-2 border" value={seatNos} onChange={(v)=>{setSeatNos(v.target.value)}}/>
            </li>
            <li className="flex flex-col">
              <label>Price</label>
              <input type="number" min={100}  className="border-gray-400 px-2 border" value={price} onChange={(v)=>{setPrice(parseInt(v.target.value))}}/>
            </li>
            <li className="flex flex-col">
              <label>Cinema</label>
              <input className="border-gray-400 px-2 border" value={cinema} onChange={(v)=>{setCinema(v.target.value)}}/>
            </li>
            <li className="flex flex-col">
              <label>Quantity</label>
              <input type="number" min={1} className="border-gray-400 px-2 border" value={quantity} onChange={(v)=>{setQuantity(parseInt(v.target.value))}}/>
            </li>
          </ul>
        </div>
        <div className="w-[600px] p-4 mx-auto">
          <TicketTemplate
            movieName={selectedMovie.title}
            imageUrl={selectedMovie.poster_path}
            aRating={selectedMovie.aRating}
            movieDateTime={movieDateTime}
            bookingDateTime={bookingDateTime}
            bookingId={bookingId}
            seatNos={seatNos}
            cinema={cinema}
            price={price}
            quantity={quantity}
          ></TicketTemplate>
        </div>

        <div>
        </div>
        
      </div>
    </div>
  );
}
