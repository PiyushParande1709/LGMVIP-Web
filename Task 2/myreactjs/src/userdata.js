import React from "react";

const UserData = ({users, loading}) => {
  const Style = {
    display: "flex"
  };
  return loading ? (
    <div id="loader" align="center">
      <img src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp" />  
    </div>
  ) :(
    <div id="main" style={Style}>
      {users.map((user) => (
        <div className="profile" key={user.id}>
          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h5>User ID: {user.id}</h5>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <h4 className="email">{user.email}</h4>
        </div>
      ))}
    </div>
  );
};
export default UserData;