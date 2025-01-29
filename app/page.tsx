"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [movieName, setMovieName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [movieDateTime, setMovieDateTime] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMovieName(searchParams.get("movieName") || "Kalki 2898 AD (3D Hindi) (U/A)");
    setImageUrl(searchParams.get("imageUrl") || "https://in.bmscdn.com/events/moviecard/ET00402192.jpg");

    const defaultDateTime = new Date();
    defaultDateTime.setDate(defaultDateTime.getDate() - 1);
    defaultDateTime.setHours(21, 0, 0, 0); // Set to 9:00 PM
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
      return date.toLocaleString("en-US", options).replace(",", " |");
    };
    setMovieDateTime(searchParams.get("movieDateTime") || formatDateTime(defaultDateTime));

    const generateBookingId = () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return Array.from({ length: 8 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
    };
    setBookingId(generateBookingId());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div
          className="jsConTent"
          data-ogsc=""
          style={{ color: "rgba(237, 238, 240, 0.8)" }}
        >
          <meta content="text/html; charset=UTF-8" />
          <meta content="width=device-width" name="viewport" />
          <div
            data-ogsb="rgb(255, 255, 255)"
            style={{
              backgroundAttachment: "initial",
              backgroundClip: "initial",
              backgroundColor: "rgb(38, 38, 38) !important",
              backgroundImage: "initial",
              backgroundOrigin: "initial",
              backgroundPosition: "initial",
              backgroundRepeat: "initial",
              backgroundSize: "initial",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {/* ... (rest of the original HTML structure) ... */}
            {/* Replace static content with variables, ensuring correct placement */}
            {/* Example: */}
            {/* ... (other elements) ... */}
            <span>{movieName}</span>
            <img src={imageUrl} alt={movieName} />
            <span>{movieDateTime}</span>
            <span>{bookingId}</span>
            {/* ... (other elements) ... */}
          </div>
        </div>
      </div>
    </main>
  );
}
