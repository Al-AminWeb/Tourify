import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
                confirmButtonColor: '#f59e0b'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address!',
                confirmButtonColor: '#f59e0b'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post('https://tourify-server.vercel.app/newsletter', formData);
            
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Thank you for subscribing to our newsletter!',
                    confirmButtonColor: '#f59e0b',
                    timer: 3000,
                    timerProgressBar: true
                });
                
                // Reset form
                setFormData({ name: '', email: '' });
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Subscription Failed',
                text: error.response?.data?.message || 'Something went wrong. Please try again later.',
                confirmButtonColor: '#f59e0b'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Beautiful Heading */}
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Stay Updated with{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                                Tourify
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Subscribe to our newsletter and be the first to discover exclusive travel deals, 
                            hidden gems, and exciting adventures around the world.
                        </p>
                    </div>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email Address"
                                    className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Subscribing...
                                </span>
                            ) : (
                                'Subscribe Now'
                            )}
                        </button>
                    </form>

                    {/* Additional Info */}
                    <p className="text-sm text-gray-500 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter; 