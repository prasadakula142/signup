import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234 567 890",
    image: null,
  });

  const [addresses, setAddresses] = useState([
    { id: 1, text: "221B Baker Street, London" },
  ]);

  const [newAddress, setNewAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  /* Form validation */
  const validate = () => {
    const errs = {};
    if (!profile.name) errs.name = "Name is required";
    if (!profile.email) errs.email = "Email is required";
    if (!profile.phone) errs.phone = "Phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      alert("Profile updated (UI only)");
    }
  };

  /* Image preview */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  /* Address handlers */
  const addAddress = () => {
    if (!newAddress) return;
    setAddresses([...addresses, { id: Date.now(), text: newAddress }]);
    setNewAddress("");
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Profile Management
        </h1>
        <p className="text-gray-500">
          View and update your personal information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Image
              </div>
            )}
          </div>

          <label className="cursor-pointer text-blue-600 text-sm font-medium">
            Upload Image
            <input
              type="file"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Name"
            value={profile.name}
            error={errors.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <Input
            label="Email"
            value={profile.email}
            error={errors.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />

          <Input
            label="Phone"
            value={profile.phone}
            error={errors.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Address Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="font-semibold text-gray-800 mb-4">
          Addresses
        </h2>

        <div className="space-y-3 mb-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="flex justify-between items-center border rounded p-3"
            >
              <p className="text-sm text-gray-600">{address.text}</p>
              <button
                onClick={() => deleteAddress(address.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Add new address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
          <button
            onClick={addAddress}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable Input */
const Input = ({ label, value, onChange, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <input
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 w-full ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && (
      <p className="text-xs text-red-500 mt-1">{error}</p>
    )}
  </div>
);

export default Profile;
