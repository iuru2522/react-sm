import React from "react";
import Paginator from "../common/Paginator/Paginator.jsx";
import User from "./User.jsx";


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];

  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return <div>

    {/* <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && "selectedPage"}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}

    <Paginator currentPage={currentPage}
      onPageChanged={onPageChanged}
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
    />
    <div>
      {users.map(
        u =>
          <User user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
      )
      }
    </div>
  </div>
}


export default Users;






//   <div key={u.id}>
      //     <span>
      //       <div>
      //         <NavLink to={"/profile" + u.id}>
      //           <img
      //             src={u.photos.small != null ? u.photos.small : userPhoto}
      //             className="userPhoto"
      //           />
      //         </NavLink>
      //       </div>
      //       <div>
      //         {u.followed ? (
      //           <button
      //             disabled={props.followingInProgress.some((id) => id === u.id)}
      //             onClick={() => {
      //               props.unfollow(u.id);
      //             }}
      //           >
      //             Unfollow
      //           </button>
      //         ) : (
      //             <button
      //               disabled={props.followingInProgress.some((id) => id === u.id)}
      //               onClick={() => {
      //                 props.follow(u.id);
      //               }}
      //             >
      //               {" "}
      //             Follow
      //             </button>
      //           )}
      //       </div>
      //     </span>
      //     <span>
      //       <span>
      //         <div>{u.name} </div>
      //         <div>{u.status}</div>
      //       </span>
      //       <span>
      //         <div> {"u.location.country"}</div>
      //         <div>{"u.location.city"}</div>
      //       </span>
      //     </span>
      //   </div>
      // )