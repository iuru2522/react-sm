import React from "react";
import "./Users.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1,
          photoUrl: "https://tinyurl.com/y44qb46d",
          followed: true,
          fullName: "Romko",
          status: "Me is a boss",
          location: { city: "Minsk", country: "Belarus " },
        },
        {
          id: 2,
          photoUrl: "https://tinyurl.com/y44qb46d",
          followed: true,
          fullName: "Olko",
          status: "Me is a boss",
          location: { city: "Minsk", country: "Belarus " },
        },
        {
          id: 3,
          photoUrl: "https://tinyurl.com/y44qb46d",
          followed: false,
          fullName: "Dimon",
          status: "Right there",
          location: { city: "Minsk", country: "Belarus " },
        }
      ])
    
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className="userPhoto" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName} </div>
              <div>{u.status}</div>
            </span>
            <span>
              <div> {u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
