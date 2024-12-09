# **Better-Assignment: Authentication App**

A responsive and accessible authentication application built with React, TypeScript, and Formik, designed to provide a user-friendly Sign Up and Login experience. 

## **Features**
- **Login Form**:
  - Email and password fields with validation.
  - "Remember Me" checkbox to save the email to local storage.
- **Sign Up Form**:
  - Username, email, and password fields with validation.
  - Password strength indicator (Weak, Medium, Strong).

## **Tech Stack**
- **React**: For building the UI.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Formik**: For handling forms and validation.
- **Vite**: For fast development and optimized builds.
- **CSS**: For styling the application.

## **Assumptions**

1. Password strength indicator considers:
   - Weak: Fewer than 6 characters.
   - Medium: At least 6 characters.
   - Strong: At least 8 characters, including uppercase letters and numbers.
2. The application is desktop-first but responsive for smaller screens.

## **Installation**
Follow these steps to set up and run the project locally:

### **Prerequisites**
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Abhiifour/Better-Assignment.git
   cd Better-Assignment/Auth