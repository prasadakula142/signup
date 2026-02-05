import { createContext, useContext, useEffect, useState } from "react";
import bookingsData from "../data/bookings.json";



const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    } else {
      localStorage.setItem("bookings", JSON.stringify(bookingsData));
      setBookings(bookingsData);
    }
  }, []);

  const updateBookings = (updated) => {
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const cancelBooking = (id) => {
    updateBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      )
    );
  };

  const rescheduleBooking = (id, date, time) => {
    updateBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, date, time } : b
      )
    );
  };

  return (
    <BookingContext.Provider
      value={{ bookings, cancelBooking, rescheduleBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext); 