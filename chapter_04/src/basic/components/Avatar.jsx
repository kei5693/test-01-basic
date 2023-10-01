import React from "react";

export default function Avatar({image, isNew}){
  return (
    <div className='avatar'>
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New </span>}
      {/* https://ko.reactjs.org/docs/conditional-rendering.html
        JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다.
        따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시하고 건너뜁니다.
      */}
    </div>
  )
}