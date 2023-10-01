import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  /*
    컴포넌트명은 대문자로 시작
    return은 하나의 태그로 반환해야 하며
    2개 이상의 태그를 반환한다면
    부모태그(div, 비어있는 태그, Fragment 태그) 안에 감싸서 반환하면 된다.

    class대신 className으로 사용

    자바스크립트 코드는 중괄호 안에 사용해야 한다.

    map 사용법에는 두 가지가 있습니다.
    1) array.map((data) ⇒ ( ))
    2) array.map((data)) ⇒ {return})

    첫 번째 방식은 로직을 사용하지 않고 바로 렌더링 할 부분이 들어갈 때 사용하며,
    두 번째 방법은 렌더링 할 부분은 return 뒤에 넣어주고 그 앞에 변수 선언이나 조건을 처리할 때 사용합니다.

    기존 코드에는 return 하는 부분이 없어서 warning이 발생하게 되었습니다. return을 하고 싶지 않고 로직을 사용하고 싶다면 map 대신에 forEach를 사용하면 됩니다.
  */

  const handleClick = (event) => {
    console.log(event);
  }
  return (
    <>
      <button type="button" onClick={handleClick}>버튼</button>
      <Avatar
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna Young'
        title='백엔드 개발자'
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob Yu'
        title='프론트엔드 개발자'
      />
    </>
  );
}

export default AppProfile;
