import React, { useState } from 'react';
import './EmployerAuthForm.css'; // Import the CSS for styling

const EmployerAuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [userType, setUserType] = useState('individual');
    const [formData, setFormData] = useState({
        businessName: '',
        fullName: '',
        contact: '',
        email: '',
        location: '',
        password: '',
        confirmPassword: ''
    });

    const toggleFormType = () => {
        setIsSignUp(!isSignUp);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            console.log('Sign Up:', formData);
            // Here you would send the data to your backend for sign-up
        } else {
            console.log('Login:', { contact: formData.contact, password: formData.password });
            // Here you would send the login data to your backend for sign-in
        }
    };

    return (
        <div className="auth-container">
            <h2>{isSignUp ? 'Employer Sign Up' : 'Employer Login'}</h2>
            <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <>
                        <div className="form-group">
                            <label>Sign Up as:</label>
                            <select value={userType} onChange={handleUserTypeChange}>
                                <option value="individual">Individual</option>
                                <option value="business">Business/Organization</option>
                            </select>
                        </div>

                        {userType === 'business' && (
                            <div className="form-group">
                                <label>Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>Full Names</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Contact Phone</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                )}

                {!isSignUp && (
                    <>
                        <div className="form-group">
                            <label>Contact Phone</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                )}

                <div className="form-group">
                    <button type="submit" className="submit-btn">
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                </div>

                <div className="form-group toggle-auth">
                    {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
                    <span onClick={toggleFormType}>
                        {isSignUp ? ' Login' : ' Sign Up'}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default EmployerAuthForm;
