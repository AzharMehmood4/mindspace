import React from "react";
import ProfileCard from "../components/profileCard";

function Profile() {
  return (
    <div className="min-h-screen bg-green-50">

      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Your Profile</h1>
        <ProfileCard />
      </div>
    </div>
  );
}

export default Profile;
