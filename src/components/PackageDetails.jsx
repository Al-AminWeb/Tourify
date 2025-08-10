import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { Calendar, Clock, Phone, MapPin, Users, Star, ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';

const PackageDetails = () => {
  const { data: tourPackage } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [note, setNote] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localBookingCount, setLocalBookingCount] = useState(tourPackage.bookingCount || 0);
  const [activeTab, setActiveTab] = useState('overview');

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
    package_details,
    highlights = [],
    itinerary = [],
    reviews = [],
    rating = 4.5,
  } = tourPackage;

  const handleBooking = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Login Required',
        text: 'Please login to book this tour.',
        confirmButtonText: 'OK'
      });
      return;
    }

    const bookingData = {
      tour_package_id: _id,
      tour_name,
      price,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      booking_date: new Date().toISOString(),
      special_note: note,
      status: 'pending',
    };

    try {
      const res = await axios.post(`https://tourify-server.vercel.app/bookings`, bookingData);
      if (res.data?.success || res.data?.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Booking Confirmed!',
          text: 'Your booking request has been submitted successfully.',
          showConfirmButton: false,
          timer: 2000,
          background: '#f8fafc',
          backdrop: `
            rgba(0,0,0,0.5)
            url("/images/celebrate.gif")
            center top
            no-repeat
          `
        });
        setLocalBookingCount(prev => prev + 1);
        setNote('');
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error('Booking error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: err.response?.data?.message || 'Something went wrong. Please try again later.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="hover:text-primary cursor-pointer">Home</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="hover:text-primary cursor-pointer">Tours</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary font-medium">{tour_name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tour Image with Gallery (placeholder for future enhancement) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 group">
            <img 
              src={image} 
              alt={tour_name} 
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              {rating} ({reviews.length} reviews)
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'itinerary' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Reviews ({reviews.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{package_details}</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-primary pl-6 relative pb-6">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Day {index + 1}: {day.title}</h3>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      {day.activities && (
                        <ul className="space-y-2">
                          {day.activities.map((activity, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0 mr-4">
                            <img 
                              src={review.user.avatar || '/images/default-avatar.jpg'} 
                              alt={review.user.name} 
                              className="w-12 h-12 rounded-full object-cover" 
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.user.name}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                                />
                              ))}
                              <span className="text-sm text-gray-500 ml-2">{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Booking Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Departure Date</p>
                      <p className="font-medium">{departure_date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Departure Location</p>
                      <p className="font-medium">{departure_location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Bookings</p>
                      <p className="font-medium">{localBookingCount} people booked</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Price per person</span>
                    <span className="text-2xl font-bold text-primary">${price}</span>
                  </div>
                  
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Guide Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Guide</h3>
                
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={guide_photo} 
                    alt={guide_name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{guide_name}</h4>
                    <div className="flex items-center text-gray-500 mt-1">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{guide_contact_no}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">Certified tour guide with 5+ years of experience. Fluent in English and Spanish. Passionate about sharing local culture and history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div 
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={() => setIsModalOpen(false)}
              ></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Your Booking</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tour Package</label>
                    <input 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                      value={tour_name} 
                      disabled 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                        value={`$${price}`} 
                        disabled 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                        value={new Date().toLocaleDateString()} 
                        disabled 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                        value={user?.displayName || ''} 
                        disabled 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                        value={user?.email || ''} 
                        disabled 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      rows={3}
                      placeholder="Dietary restrictions, accessibility needs, etc."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleBooking}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;