import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, login} from './actions';


function App() {

    const dispatch = useDispatch();

    const counter = useSelector( (state) => {
        return state.counterReducer.counter
    });

    const isLoggedIn = useSelector( (state) => {
        return state.isLoggedInReducer.isloggedIn
    });

  return (
    <div className="App">
         <h2>Counter : {
             counter
         }
         </h2>
         <br />
         <button onClick={ ()=>  dispatch(increment(5)) } >+</button>

        <button onClick={ ()=>  dispatch(decrement(5)) }>-</button>

        <br />
        <br />

        { isLoggedIn ? <h2>LoggedIn</h2> : <h2>Not loggedin</h2>}
        <button onClick={ ()=>  dispatch(login()) } > Change Login Status</button>

    </div>
  );
}

export default App;
