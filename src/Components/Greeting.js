import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGreetings } from '../Redux/Slices/greetingSlice';

function Greeting() {
  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <p>test</p>
      <p>{console.log(greetings)}</p>
      <p>{greetings.greeting}</p>
    </div>
  );
}

export default Greeting;
