import React, {useContext, useState} from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext.jsx';
import { Calendar, Clock, Phone } from 'lucide-react';

const PackageDetails = () => {
  const { data: tourPackage } = useLoaderData();
 const {user} = useContext(AuthContext);
  const [note, setNote] = useState('');

  const {
    _id,
    image,
    tour_name,
    guide_name,
    guide_photo,
    guide_contact_no,
    duration,
    departure_location,
    departure_date,
    destination,
    price,
    bookingCount,
    package_details
  } = tourPackage;

  const handleBooking = async () => {
    const bookingData = {
      tour_package_id: _id,
      tour_name,
      price,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      booking_date: new Date().toISOString(),
      special_note: note,
      status: 'pending'
    };

    //   try {
    //     const res = await axios.post('https://your-backend-api/bookings', bookingData);
    //     if (res.data.success) {
    //       alert('Booking request submitted successfully!');
    //       setNote('');
    //     }
    //   } catch (err) {
    //     console.error('Booking error:', err);
    //     alert('Something went wrong. Try again later.');
    //   }
    // };
  }
  return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <img src={image} alt={tour_name} className="rounded-xl w-full h-80 object-cover" />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{tour_name}</h1>
            <p className="text-gray-600">{package_details}</p>

            <div className="flex items-center gap-3 mt-4">
              <img src={guide_photo} alt={guide_name} className="w-14 h-14 rounded-full border-2 border-primary" />
              <div>
                <p className="text-sm text-gray-500">Guide</p>
                <h4 className="text-lg font-semibold text-gray-800">{guide_name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  {guide_contact_no}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mt-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> {duration}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> {departure_date} from {departure_location}
              </div>
              <div className="font-semibold">Destination: {destination}</div>
              <div className="font-semibold">Booking Count: {bookingCount || 0}</div>
              <div className="text-xl font-bold text-primary mt-2">${price}</div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Book This Tour</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Tour Package</label>
              <input type="text" className="input input-bordered w-full" value={tour_name} disabled />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input type="text" className="input input-bordered w-full" value={`$${price}`} disabled />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input type="text" className="input input-bordered w-full" value={user?.displayName} disabled />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input type="text" className="input input-bordered w-full" value={user?.email} disabled />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Special Note</label>
              <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Add any special request or note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleBooking} className="btn btn-primary mt-6">Book Now</button>
        </div>
      </div>
  );
};

export default PackageDetails;
