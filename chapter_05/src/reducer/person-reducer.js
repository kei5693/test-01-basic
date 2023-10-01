export default function personReducer(person, action) {
  // personReducer(person, action)의 action에
  // dispatch({ type: 'updated', prev, current }); 의
  // ({ type: 'updated', prev, current })가 전달 된다
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      /*
        const prev = action.prev;
        const current = action.current;
      */
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
