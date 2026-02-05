import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ define here

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome, Sarah!
        </h1>
        <p className="text-gray-500">
          Manage your bookings and account details.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Bookings" value="12" />
        <StatCard title="Upcoming Services" value="3" />
        <StatCard title="Completed Services" value="7" />
        <StatCard title="Cancelled Bookings" value="2" danger />
      </div>

      {/* Recent Bookings */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Bookings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <BookingCard
          title="Home Cleaning"
          date="May 20, 2024 | 2:00 PM"
          price="$80"
          status="In Progress"
          statusColor="bg-green-500"
        />
        <BookingCard
          title="Yoga Session"
          date="May 18, 2024 | 10:00 AM"
          price="$50"
          status="Completed"
          statusColor="bg-blue-600"
        />
        <BookingCard
          title="Plumbing Repair"
          date="May 15, 2024 | 4:00 PM"
          price="$120"
          status="Cancelled"
          statusColor="bg-red-500"
        />
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActionCard
          title="My Bookings"
          description="View and manage all your bookings."
          button="Manage Bookings"
          redirect="/bookings"
          navigate={navigate}
        />

        <ActionCard
          title="Payments & Invoices"
          description="Track your payments and download invoices."
          button="View Payments"
          redirect="/payments"
          navigate={navigate}
        />

        <ActionCard
          title="Profile Settings"
          description="Edit your profile and addresses."
          button="Edit Profile"
          redirect="/profile"
          navigate={navigate}
        />

        <ActionCard
          title="Notifications"
          description="Latest updates & offers."
          button="View Notifications (3)"
          redirect="/notifications"
          navigate={navigate}
          danger
        />
      </div>
    </div>
  );
};

export default Dashboard;


/* Components */

const StatCard = ({ title, value, danger }) => (
  <div className="bg-white rounded-lg shadow-sm p-5">
    <p className="text-gray-500 text-sm">{title}</p>
    <h3
      className={`text-3xl font-semibold mt-2 ${
        danger ? "text-red-500" : "text-gray-800"
      }`}
    >
      {value}
    </h3>
  </div>
);

const BookingCard = ({ title, date, price, status, statusColor }) => (
  <div className="bg-white rounded-lg shadow-sm p-5">
    <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{date}</p>

    <div className="flex items-center justify-between">
      <span className="font-semibold text-gray-800">{price}</span>
      <span
        className={`text-white text-sm px-3 py-1 rounded ${statusColor}`}
      >
        {status}
      </span>
    </div>
  </div>
);

const ActionCard = ({ title, description, button, redirect, danger, navigate }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>

    <button
      onClick={() => navigate(redirect)}
      className={`mt-6 self-end px-4 py-2 text-sm rounded text-white ${
        danger ? "bg-red-500" : "bg-blue-600"
      }`}
    >
      {button}
    </button>
  </div>
);


