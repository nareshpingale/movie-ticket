
"use client";

import { useEffect, useState } from "react";
import TicketTemplate from "./ticket-template";

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

  return ( <TicketTemplate movieName={movieName} imageUrl={imageUrl} movieDateTime={movieDateTime} bookingId={bookingId}></TicketTemplate>
  );
}