



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashboardLayout from "./components/Dashboard";

// import Dashboard from "./pages/Dashboard";
// import MyBookings from "./pages/MyBookings";
// import Profile from "./pages/Profile";
// import Payments from "./pages/Payments";
// import Notifications from "./pages/Notifications";
// import Settings from "./pages/Settings";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<DashboardLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="bookings" element={<MyBookings />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="payments" element={<Payments />} />
//           <Route path="notifications" element={<Notifications />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { useState } from "react";


const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required";

    if (name === "email") {
  const gmailRegex = /^[^\s@]+@gmail\.com$/i;
  if (!gmailRegex.test(value)) {
    return "Only Gmail addresses are allowed";
  }
    
}


    if (name === "password" && value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("✅ Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">
          User Registration
        </h2>

        {success && (
          <p className="text-green-600 text-center font-medium">
            {success}
          </p>
        )}

        
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
              ${
                errors.name
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
              ${
                errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
          />

          <button
            type="button"
            className="absolute right-3 top-2.5 text-sm text-blue-600 hover:underline"
            
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-1 rounded-full hover:bg-blue-300 transition hover:text-green-900 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
