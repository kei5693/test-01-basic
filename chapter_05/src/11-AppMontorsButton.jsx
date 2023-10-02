import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

/*
	1. React.memo: 단순 UI 컴포넌트의 리렌더링 방지 (props가 들어가는 순간 리렌더링 된다)
	2. useMemo: props로 전달받은 함수를 실행해서, 그 결과값을 보존 (deps=의존인자가 하나라도 변하면 함수를 다시 실행해서 그 결과값을 보존)
	3. useCallback: props로 전달받은 함수를 보존 (deps가 하나라도 변하면 그에 맞는 새로운 함수를 리턴)

	1번 React.memo로 전부 커버가 안되는 이유는 props=함수 또한 객체이기 때문에 부모 컴포넌트가 리렌더링 될때마다 얘도 같이 새로운 참조값(주소값)을 가지게 됩니다. 따라서 React.memo는 "아, 새로운 객체(함수)가 props로 들어왔구나" 라고 인식해서 리렌더링이 되어버립니다.
	2번 useMemo와 3번 useCallback은 사실 거의 비슷합니다만, 굳이 차이점을 적어보자면 아래와 같습니다.
	2번 useMemo의 경우에는 함수의 결과값을 가지고 있기 때문에 컴포넌트의 인라인 스타일에 쓰이기도 합니다 (물론 인라인 스타일은 가능하면 쓰지 않는게 좋습니다..)
	3번 useCallback의 경우에는 함수 자체를 가지고 있다 => 함수 재생성 방지라는 차이를 가지고 있습니다

	리액트 공식문서에 따르면 useMemo와 useCallback은 다음과 같은 식으로 같은 동작을 수행한다네요..
	useMemo((...)=>fn, deps) === useCallback(fn, deps)



	1. React.memo : 단순 UI 컴포넌트 리렌더링 방지
	2. useMemo: 함수의 연산량이 많아서 그 결과값의 재사용(보존)
	3. useCallback: 함수의 재생성 방지
*/



export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='삭제하기' onClick={handleDelete} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
    </div>
  );
}

// useMemo : 전달되는 값이 동일하면 다시 랜더링하지 않도록 메모(기억)
const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering 😜');
  const result = useMemo(() => calculateSomething(), []); // [] 디펜던시 : 캐시처럼 저장해서 한 번만 실행
  // const result = useMemo(() => calculateSomething(), [text]); // text가 변경 될 때 실행
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😆');
  }
  return 10;
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
