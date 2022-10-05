import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Greeting = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const getRandomGreeting = async () => {
    const URL = 'http://localhost:3000/greetings';
    const response = await axios(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.data;
    dispatch({ type: 'SET_GREETING', payload: data });
  };
  useEffect(() => {
    getRandomGreeting();
  }, []);
  return <h2>{name}</h2>;
};

export default Greeting;
