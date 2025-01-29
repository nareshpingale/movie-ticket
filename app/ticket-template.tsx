import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface TicketTemplateProps {
  movieName: string;
  imageUrl: string;
  movieDateTime: string;
  bookingId: string;
}

const TicketTemplate: React.FC<TicketTemplateProps> = ({ movieName, imageUrl, movieDateTime, bookingId }) => {
  return (
    <div
      className="jsConTent"
      data-ogsc=""
      style={{ color: "rgba(237, 238, 240, 0.8)" }}
    >
      {/* ... rest of the TicketTemplate component code ... */}
      {/* Pass the props to the component */}
      <p>{movieName}</p>
      <img src={imageUrl} alt={movieName} />
      <p>{movieDateTime}</p>
      <p>{bookingId}</p>
      {/* ... rest of the TicketTemplate component code ... */}
    </div>
  );
};

export default TicketTemplate;