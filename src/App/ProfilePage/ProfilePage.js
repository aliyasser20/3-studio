import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const ProfilePage = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <img src={user.picture} alt="Profile" />
      <h2>Testing id (sub): {user.sub}</h2>
      <h2>Name of user: {user.name}</h2>
      <p>Email of user: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
