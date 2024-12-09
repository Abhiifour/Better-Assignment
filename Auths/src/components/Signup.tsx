import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css'
import  {toast} from 'react-toastify';



interface SignUpFormProps {
  onSwitch: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSwitch }) => {

   const [passwordStrength, setPasswordStrength] = useState('Weak');

   const getPasswordStrength = (password: string) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        return 'Strong';
    } else if (password.length >= 6) {
        return 'Medium';
    } else {
        return 'Weak';
    }
    };

  const validate = (values: { username: string; email: string; password: string }) => {
    const errors: Partial<typeof values> = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const onSubmit = (values: { username: string; email: string; password: string }) => {
    
    toast.success("Sign Up Successful");

    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ values }) => {
        const strength = getPasswordStrength(values.password);
        setPasswordStrength(strength);

        return (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" type="text" aria-label="Enter your username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" aria-label="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                aria-label="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <div
               
                className='strength-div'
               
              >
                Password Strength: <span  className={`password-strength ${passwordStrength.toLowerCase()}`}>{passwordStrength}</span> 
              </div>
            </div>
            <button type="submit" className="btn">Sign Up</button>
            <p>
              Already have an account? <span onClick={onSwitch} className="link">Login</span>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
};




export default SignUpForm;
