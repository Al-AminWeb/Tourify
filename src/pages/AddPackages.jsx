import React, {useContext} from 'react';

import Swal from 'sweetalert2';
import {useNavigate} from 'react-router';
import {AuthContext} from "../contexts/AuthContext.jsx";
import axios from "axios";

const AddPackage = () => {
    const {user, loading} = useContext(AuthContext);
    const navigate = useNavigate();


    if (loading) {
        return (<div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-lg loading-spinner text-primary"></span>
        </div>);
    }

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center"><p>Please log in to add a package.</p>
        </div>;
    }

    const handleAddPackage = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const newPackage = Object.fromEntries(formData.entries());


        newPackage.guide_email = user?.email;
        newPackage.guide_name = user?.displayName;
        newPackage.guide_photo = user?.photoURL;
        newPackage.bookingCount = 0;

        axios.post(`${import.meta.env.VITE_API_URL}/add-package`, newPackage)
            .then((res) => {
                const data = res.data;
                if (data.insertedId || data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Package added successfully.',
                        background: '#1a202c',
                        color: '#e2e8f0',
                    });
                    form.reset();
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: '#1a202c',
                    color: '#e2e8f0',
                });
            });


        // fetch(`${import.meta.env.VITE_API_URL}/add-package`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newPackage),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //
        //         if (data.insertedId || data.acknowledged) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Success!',
        //                 text: 'Package added successfully.',
        //                 background: '#1a202c',
        //                 color: '#e2e8f0',
        //             });
        //             form.reset();
        //             navigate('/'); // or wherever you want
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //         Swal.fire({
        //             title: 'Error!',
        //             text: 'Something went wrong. Please try again.',
        //             icon: 'error',
        //             confirmButtonText: 'OK',
        //             background: '#1a202c',
        //             color: '#e2e8f0',
        //         });
        //     });

    };

    return (<div
            className="min-h-screen p-6 bg-cover bg-center flex items-center justify-center"
            style={{backgroundImage: "url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
        >
            <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 my-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-800">Add a New Tour Package</h2>
                    <p className="text-gray-600 mt-2">Share your next amazing adventure with the world.</p>
                </div>

                <form onSubmit={handleAddPackage} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Form inputs for package details... */}
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Tour Name</span></label><input type="text"
                                                                                                name="tour_name"
                                                                                                placeholder="e.g., Sundarbans Expedition"
                                                                                                className="input input-bordered w-full"
                                                                                                required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Image URL</span></label><input type="url" name="image"
                                                                                                placeholder="https://example.com/image.jpg"
                                                                                                className="input input-bordered w-full"
                                                                                                required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Duration</span></label><input type="text"
                                                                                               name="duration"
                                                                                               placeholder="e.g., 3 Days 2 Nights"
                                                                                               className="input input-bordered w-full"
                                                                                               required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Departure Location</span></label><input type="text"
                                                                                                         name="departure_location"
                                                                                                         placeholder="e.g., Dhaka"
                                                                                                         className="input input-bordered w-full"
                                                                                                         required/>
                        </div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Destination</span></label><input type="text"
                                                                                                  name="destination"
                                                                                                  placeholder="e.g., Cox's Bazar"
                                                                                                  className="input input-bordered w-full"
                                                                                                  required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Price (USD)</span></label><input type="number"
                                                                                                  name="price"
                                                                                                  placeholder="e.g., 350"
                                                                                                  className="input input-bordered w-full"
                                                                                                  required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Departure Date</span></label><input type="date"
                                                                                                     name="departure_date"
                                                                                                     className="input input-bordered w-full"
                                                                                                     required/></div>
                        <div className="form-control"><label className="label"><span
                            className="label-text font-semibold">Guide Contact No.</span></label><input type="tel"
                                                                                                        name="guide_contact_no"
                                                                                                        placeholder="e.g., 01712345678"
                                                                                                        className="input input-bordered w-full"
                                                                                                        required/></div>
                    </div>

                    <div className="form-control"><label className="label"><span className="label-text font-semibold">Package Details</span></label><textarea
                        name="package_details" className="textarea textarea-bordered h-28 w-full"
                        placeholder="Describe the tour itinerary, what's included..." required></textarea></div>

                    {/* --- NEW GUIDE PROFILE SECTION --- */}
                    <div className="divider pt-4">Guide Information</div>
                    <div className="bg-cyan-50/50 p-4 rounded-lg flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt={user.displayName}/>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800">{user.displayName}</h3>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-600">This package will be listed under your profile.</p>
                        </div>
                    </div>

                    <div className="form-control mt-8">
                        <button type="submit"
                                className="btn btn-primary bg-cyan-700 hover:bg-cyan-800 border-none text-white font-bold text-lg">
                            Add Package
                        </button>
                    </div>
                </form>
            </div>
        </div>);
    };
    export default AddPackage;
