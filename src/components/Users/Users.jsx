import React from "react";
import "./Users.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";



class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  // props.setUsers(response.data.items

  render() {
      let pagesCount = Math.ceil (this.props.totalUsersCount / this.pageSize);

      let pages = [];
      for (let i=1; i <= pagesCount; i++){
          pages.push(i);
      }


    return <div>
        <div>
        {pages.map((p) => { 
              return <span className = { this.props.currentPage ===  p ? "selectedPage" }>{p}</span>
        })}
        </div>
        {
        this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                {/* <img src={u.photoUrl} className="userPhoto" /> */}
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className="userPhoto"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name} </div>
                <div>{u.status}</div>
              </span>
              <span>
                <div> {"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    
  }
}

export default Users;
