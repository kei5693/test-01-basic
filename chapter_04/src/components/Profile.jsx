import React from "react";
import Avatar from "./Avatar";

// function Profile(){
//   return <h1>Profile</h1>
// }
// export default Profile;

// export를 함수 앞에 선언하는것이 편리
export default function Profile({image, name, title, isNew}){
  //Profile(props) 로 사용할 수 있지만 props.image로 선언하는것이 번거롭다.
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}