import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import {AuthContext} from "../contexts/AuthContext.jsx";

const AddPackage = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    // Show a loading indicator while user data is being fetched
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-lg loading-spinner text-primary"></span>
            </div>
        );
    }

    // If loading is finished but there's still no user, you might want to redirect
    if (!user) {
        // This can be a redirect or a message
        return <div className="min-h-screen flex items-center justify-center"><p>Please log in to add a package.</p></div>;
    }

    const handleAddPackage = (e) => {
        e.preventDefault();
        const form = e.target;

        const tour_name = form.tour_name.value;
        const image = form.image.value;
        const duration = form.duration.value;
        const departure_location = form.departure_location.value;
        const destination = form.destination.value;
        const price = parseFloat(form.price.value);
        const departure_date = form.departure_date.value;
        const package_details = form.package_details.value;
        const guide_contact_no = form.guide_contact_no.value;

        const guide_name = user.displayName;
        const guide_email = user.email;
        const guide_photo = user.photoURL;

        const newPackage = {
            tour_name, image, duration, departure_location, destination, price,
            departure_date, package_details, guide_contact_no, guide_name,
            guide_email, guide_photo,
        };

        // This part is for when you connect the backend.
        // fetch('http://localhost:5000/packages', { // Replace with your actual server URL
        //   method: 'POST',
        //   headers: { 'content-type': 'application/json' },
        //   body: JSON.stringify(newPackage),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: 'Success!', text: 'Tour package has been added successfully.',
        //         icon: 'success', confirmButtonText: 'Cool', background: '#1a202c', color: '#e2e8f0',
        //       });
        //       form.reset();
        //       navigate('/all-packages');
        //     }
        //   })
        //   .catch(error => {
        //     console.error('Error:', error);
        //     Swal.fire({
        //       title: 'Error!', text: 'Something went wrong. Please try again.',
        //       icon: 'error', confirmButtonText: 'OK', background: '#1a202c', color: '#e2e8f0',
        //     });
        //   });

        // For now, let's just show a success message on the frontend.
        Swal.fire({
            title: 'Success!', text: 'Tour package has been added successfully.',
            icon: 'success', confirmButtonText: 'Cool', background: '#1a202c', color: '#e2e8f0',
        });
        form.reset();
        navigate('/all-packages');
    };

    return (
        <div
            className="min-h-screen p-6 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
            <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 my-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-800">Add a New Tour Package</h2>
                    <p className="text-gray-600 mt-2">Share your next amazing adventure with the world.</p>
                </div>

                <form onSubmit={handleAddPackage} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Form inputs for package details... */}
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Tour Name</span></label><input type="text" name="tour_name" placeholder="e.g., Sundarbans Expedition" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Image URL</span></label><input type="url" name="image" placeholder="https://example.com/image.jpg" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Duration</span></label><input type="text" name="duration" placeholder="e.g., 3 Days 2 Nights" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Departure Location</span></label><input type="text" name="departure_location" placeholder="e.g., Dhaka" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Destination</span></label><input type="text" name="destination" placeholder="e.g., Cox's Bazar" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Price (USD)</span></label><input type="number" name="price" placeholder="e.g., 350" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Departure Date</span></label><input type="date" name="departure_date" className="input input-bordered w-full" required /></div>
                        <div className="form-control"><label className="label"><span className="label-text font-semibold">Guide Contact No.</span></label><input type="tel" name="guide_contact_no" placeholder="e.g., 01712345678" className="input input-bordered w-full" required /></div>
                    </div>

                    <div className="form-control"><label className="label"><span className="label-text font-semibold">Package Details</span></label><textarea name="package_details" className="textarea textarea-bordered h-28 w-full" placeholder="Describe the tour itinerary, what's included..." required></textarea></div>

                    {/* --- NEW GUIDE PROFILE SECTION --- */}
                    <div className="divider pt-4">Guide Information</div>
                    <div className="bg-cyan-50/50 p-4 rounded-lg flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800">{user.displayName}</h3>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-600">This package will be listed under your profile.</p>
                        </div>
                    </div>

                    <div className="form-control mt-8">
                        <button type="submit" className="btn btn-primary bg-cyan-700 hover:bg-cyan-800 border-none text-white font-bold text-lg">
                            Add Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;
