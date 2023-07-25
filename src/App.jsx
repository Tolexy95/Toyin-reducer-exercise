import { useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FormReducer from './ReducerFolder/FormReducer';

const initialState ={
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

function App() {
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const [step, setStep] = useState(1);

  function changeFirstName (e) {
    dispatch({ type: "CHANGE_FIRST", payload: e.target.value });
  }

  function changeLastName (e) {
    dispatch({ type: "CHANGE_LAST", payload: e.target.value });
  }

  function changeEmailAddress (e) {
    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value });
  }

  function changePassword (e) {
    dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value });
  }

  const handleNextStep = () => {
    setStep(step + 1);
  }

  return (
    <div className='App'>
      <form action="">
        {step === 1 && (
          <>
            <div>
              <label>firstName:</label>
              <input type="text" onInput={changeFirstName} value={state.firstName} />
            </div>
            <div>
              <label>LastName:</label>
              <input type="text" onInput={changeLastName} value={state.lastName} />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label>Email Address:</label>
              <input type="email" onInput={changeEmailAddress} value={state.email} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" onInput={changePassword} value={state.password} />
            </div>
          </>
        )}
      </form>

      {step === 1 && <button onClick={handleNextStep} className='button'>Next</button>}
      {step === 2 && <button onClick={handleNextStep} className='button'>Next</button>}

      {step === 3 && (
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
