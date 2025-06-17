import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="bg-custom">
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="card w-full max-w-lg  shadow-2xl backdrop-blur-sm">
                        <div className="card-body items-center text-center p-8 md:p-12">

                            {/* Animated Image/GIF */}
                            <img
                                src="https://i.gifer.com/7VE.gif"
                                alt="Lost in the Himalayas"
                                className="w-48 h-48 object-cover mb-4 rounded-lg shadow"
                            />

                            {/* Error Code */}
                            <h1 className="text-8xl md:text-9xl font-black text-secondary tracking-tight">
                                404
                            </h1>

                            {/* Main Message */}
                            <h2 className="card-title text-primary text-2xl md:text-3xl font-bold mt-4">
                                Oops! You seem lost in the Himalayas.
                            </h2>

                            {/* Helper Text */}
                            <p className="py-6 text-sm text-base-content/80">
                                The page you’re looking for doesn’t exist. Maybe you took a wrong turn or the path was removed.
                            </p>

                            {/* Action Button */}
                            <div className="card-actions">
                                <Link to="/" className="btn btn-primary btn-wide group">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H16a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                                        />
                                    </svg>
                                    Go Back Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
