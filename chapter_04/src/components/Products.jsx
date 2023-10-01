import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

	// 데이터 상태가 변경 => 함수 재호출 => fetch 실행되면서 데이터 다시 받아와서 상태 변경 => 함수 재호출의 반복
	// useEffect을 사용해야 위 문제를 방지 할 수 있음
  useEffect(() => {
		// 경로를 지정하지 않으면 public을 바라본다
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    // unmount
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]); // [] : 컴포넌트가 최초 마운트 될 때만 실행 , [checked] : checked 값이 변경 될 때 마다 실행

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label> {/* label for => label htmlFor */}
      <ul>
        {products.map((product, index) => (
					// 고유한 key 값 선언 필수
          <li key={index}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}