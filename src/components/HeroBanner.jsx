import React from 'react'
import { Link } from 'react-router'

const HeroBanner = () => {
    return (
        <div
            className="hero min-h-[80vh]"
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay  bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
                        Discover Stunning Island Adventures
                    </h1>
                    <p className="mb-5 text-gray-200">
                        Explore exclusive holiday packages, crystal-clear beaches, and unforgettable experiences.
                    </p>
                    <Link to="/all-packages">
                        <button className="btn btn-warning text-white px-6">
                            Explore All Packages
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
