import { useState } from "react";
import { useNavigate } from "react-router-dom";

const bookingsData = [
  {
    id: 1,
    service: "Home Cleaning",
    date: "2024-05-20",
    time: "2:00 PM",
    price: "$80",
    status: "In Progress",
  },
  {
    id: 2,
    service: "Yoga Session",
    date: "2024-05-18",
    time: "10:00 AM",
    price: "$50",
    status: "Completed",
  },
  {
    id: 3,
    service: "Plumbing Repair",
    date: "2024-05-15",
    time: "4:00 PM",
    price: "$120",
    status: "Cancelled",
  },
];

const statusColors = {
  Booked: "bg-blue-100 text-blue-600",
  "In Progress": "bg-green-100 text-green-600",
  Completed: "bg-indigo-100 text-indigo-600",
  Cancelled: "bg-red-100 text-red-600",
};

const MyBookings = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookingsData.filter((booking) => {
    return (
      booking.service.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || booking.status === statusFilter)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Bookings</h1>
        <p className="text-gray-500">View and manage all your bookings.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search service..."
          className="border rounded px-3 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded px-3 py-2 w-full md:w-1/4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Booked</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {booking.service}
              </h3>
              <p className="text-sm text-gray-500">
                {booking.date} | {booking.time}
              </p>
            </div>

            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="font-semibold">{booking.price}</span>

              <span
                className={`text-sm px-3 py-1 rounded-full ${statusColors[booking.status]}`}
              >
                {booking.status}
              </span>

              <div className="flex gap-3">
                <button
  onClick={() => navigate(`/bookings/${booking.id}`)}
  className="text-blue-600 text-sm font-medium"
>
  View
</button>

                {booking.status !== "Cancelled" && (
                  <>
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="text-indigo-600 text-sm font-medium"
                    >
                      Reschedule
                    </button>

                    <button className="text-red-500 text-sm font-medium">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reschedule Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Reschedule Booking
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              {selectedBooking.service}
            </p>

            <input
              type="date"
              className="border rounded w-full px-3 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;

