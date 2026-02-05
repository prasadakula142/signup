import payments from "../data/bookings.json";

export default function Payments() {
  return (
    <div className="grid gap-4">
      {payments.map(p => (
        <div key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded">
          <p>Booking ID: {p.bookingId}</p>
          <p>Amount: ${p.amount}</p>
          <p>Status: {p.status}</p>
        </div>
      ))}
    </div>
  );
}
