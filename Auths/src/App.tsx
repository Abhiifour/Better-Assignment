import React, { useState } from 'react';
import SignUpForm from './components/Signup';
import LoginForm from './components/Login';
import './components/style.css';
import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<'signup' | 'login'>('signup');

  return (
    <div className="container">
      <h1>{currentForm === 'signup' ? 'Sign Up' : 'Login'}</h1>
      {currentForm === 'signup' ? (
        <SignUpForm onSwitch={() => setCurrentForm('login')} />
      ) : (
        <LoginForm onSwitch={() => setCurrentForm('signup')} />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
