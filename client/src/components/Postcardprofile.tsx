import { useRef, useState } from "react";
import { Pencil } from "lucide-react";
import axios from "axios";

export default function ProfileCard({ user }) {
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState(user.profilePic);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    const token = localStorage.getItem("userToken");
    if (user.allowed){
       const res = await axios.post(
      "http://localhost:5000/api/auth/profilepic",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProfilePic(res.data.url);

    }

   
  };

  return (
  <div
  className={`relative mx-auto ${
    user.small ? "w-10 h-10" : "w-40 h-40"
  }`}
>
  {/* Thin premium gradient border */}
  <div className="absolute inset-0 rounded-full p-[1.2px] bg-gray-500 shadow-md
">
    
    <img
      src={profilePic || "/default-user.png"}
      alt="Profile"
      className="
        w-full h-full rounded-full object-cover bg-white  border-2 border-gray-300
      "
    />
  </div>

  {user.allowed && (
    <>
      <button
        className="absolute bottom-2 right-2 bg-black/60 p-2 rounded-full"
        onClick={() => fileInputRef.current?.click()}
      >
        <Pencil className="w-4 h-4 text-white" />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  )}
</div>

  );
}
