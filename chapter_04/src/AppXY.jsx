import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className='container'
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        // ({ ...prev, x: e.clientX }) 중괄호만 있을 경우 코드불록인지 객체인지 알 수 없으므로 괄호 안에 표기
        //setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
