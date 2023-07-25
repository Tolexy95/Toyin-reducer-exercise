import { useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FormReducer from './ReducerFolder/FormReducer';

const initialState ={
  firstName: "Oluwatoyin",
  lastName: "Olubayo",
  email: "toyin95.olubayo@gmail.com",
  password: "Ifeoluwa@23",
}

function App() {
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const [showInput, setShowInput] = useState(1);

  const showNextPage = () => {
    setShowInput(showInput + 1);
  }

  function changeFirstName (e) {
    dispatch ({type: "CHANGE_FIRST", payload: e.target.value});
  }

  function changeLastName (e) {
    dispatch ({type: "CHANGE_LAST", payload: e.target.value});
  }

  function changeEmailAddress (e) {
    dispatch ({type: "CHANGE_EMAIL", payload: e.target.value});
  }

  function changePassword (e) {
    dispatch ({type: "CHANGE_PASSWORD", payload: e.target.value});
  }

  return (
    <div className='App'>
      <form action="">
        {showInput === 1 && (
          <div>
            <label>firstName:</label>
            <input type="text" onInput={changeFirstName} value={state.firstName} />
          </div>
        )}

        {showInput === 1 && (
          <div>
            <label>LastName:</label>
            <input type="text" onInput={changeLastName} value={state.lastName} />
          </div>
        )}

        {showInput === 2 && (
          <div>
            <label>Email Address:</label>
            <input type="email" onInput={changeEmailAddress} value={state.email} />
          </div>
        )}

        {showInput === 2 && (
          <div>
            <label>Password:</label>
            <input type="text" onInput={changePassword} value={state.password} />
          </div>
        )}
      </form>

      {showInput === 1 && <button onClick={showNextPage} className='button'>Next</button>}

      {showInput === 2 && <button onClick={showNextPage} className='button'>Next</button>}

      {showInput === 3 && (
        
        <div className='pContainer'>
          <p>{state.firstName}</p>
          <p>{state.lastName}</p>
          <p>{state.email}</p>
          <p>{state.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
