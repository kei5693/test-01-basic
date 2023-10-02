import React, { useState } from 'react';
import './01-AppXY.css';

export default function AppXY() {
	// const [x, setX] = useState(0);
	// const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className='container'
      onPointerMove={(e) => {
				console.log(e.clientX, e.clientY);

				// 연관있는 데이터는 하나의 객체로 묶어서 관리
				// 개별로 해도 문제는 없고 리액트에서 처리 가능하지만 비동기 방식으로 여러번 호출될 경우 효율적으로 동작하지 않을 수 있다.
				// setX(e.clientX);
				// setY(e.clientY);
        //setPosition({ x: e.clientX, y: e.clientY });

        // 만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({ ...prev, x: e.clientX, y: 200 }));
				//setPosition((prev) => ({ x: e.clientX, y: prev.y }));
				// ...prev : 각각의 데이터의 이전값을 하나씩 받아서 사용하지 않고 전체를 복사해서 한번에 사용
        // ({ ...prev, x: e.clientX }) : 중괄호만 있을 경우 코드불록인지 객체인지 알 수 없으므로 괄호 안에 표기
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
