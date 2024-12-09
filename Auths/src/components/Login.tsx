import React,{useEffect,useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css'
import  {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface LoginFormProps {
  onSwitch: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitch }) => {


    
    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
        setInitialValues((prev) => ({ ...prev, email: savedEmail }));
        }
    }, []);
      
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
      

  const validate = (values: { email: string; password: string }) => {
    const errors: Partial<typeof values> = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const onSubmit = (values: typeof initialValues) => {

    if (values.rememberMe) {
        localStorage.setItem('rememberedEmail', values.email);
      } else {
        localStorage.removeItem('rememberedEmail');
    }


    toast.success("Login Successful");
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
            <div className='forgot'>
            Forget password? 
          </div>
          </div>
          <div className="remember-group">
            <Field id="rememberMe" name="rememberMe" type="checkbox" aria-label="Remember me" />
            <label htmlFor="rememberMe" className='remember-label'>Remember Me</label>
          </div>
          <button type="submit" className="btn">Login</button>
         
          <p>
            Don't have an account? <span onClick={onSwitch} className="link">Sign Up</span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
