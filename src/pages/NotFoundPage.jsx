import React from 'react';
import { Link } from 'react-router';



const NotFoundPage = () => {
    return (

        <div className="bg-custom">

            <div className="hero min-h-screen bg-black/30">
                <div className="hero-content text-center">


                    <div className="card w-full max-w-lg bg-base-100/90 shadow-2xl backdrop-blur-sm">
                        <div className="card-body items-center text-center p-8 md:p-12">

                            {/* Icon */}
                            <div className="text-primary mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>

                            {/* Error Code */}
                            <h1 className="text-8xl md:text-9xl font-black text-secondary tracking-tight">
                                404
                            </h1>

                            {/* Main Message */}
                            <h2 className="card-title text-3xl font-bold mt-4">
                                Oops! This trail went cold.
                            </h2>

                            {/* Helper Text */}
                            <p className="py-6">
                                The page you were looking for doesn't exist. Maybe it was moved, or you mistyped the address. Let's get you back to a familiar path.
                            </p>

                            {/* Action Button using React Router's Link */}
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
