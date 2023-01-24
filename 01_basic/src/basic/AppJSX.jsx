import './App.css';

function AppJSX() {
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
  const name = '엘리';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>Hellow!</h1>
      <h1 className='orange'>{`Hellow! ${name}`}</h1>
      <h2>Hellow!</h2>
      <p>{name}</p>

      <hr />

      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>

      <ul>
        {/* {list.map((item)=>{
          <li>{item}</li>
        })} */}
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <img 
        style={{width: '170px', height: '114px'}}
        src='https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20230106_1095%2Fupload_1672970755010tY40C.jpg%22&type=nf340_228'
        alt=''
      />
    </>
  );
}

export default AppJSX;
