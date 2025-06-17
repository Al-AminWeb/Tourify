import { useLoaderData } from "react-router";
import {use, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext.jsx";

const MyBookings = () => {
    const{user}=use(AuthContext);
    const data = useLoaderData();
    const token = localStorage.getItem('token');
    const [bookings, setBookings] = useState(data.data || []);

    useEffect(() => {
        if (!user?.email) return;
        axios.get(`${import.meta.env.VITE_API_URL}/my-bookings/${user.email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                setBookings(res.data);
            })
            .catch(err => {
                console.error('Unauthorized access or token invalid', err.response?.data);
            });
    }, []);
    const handleConfirm = async (id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/booking-status/${id}`, {
                status: 'completed',
            });

            setBookings(prev =>
                prev.map(b => b._id === id ? { ...b, status: 'completed' } : b)
            );
        } catch (err) {
            console.error('Update failed', err);
        }
    };

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border text-left">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="p-2">Tour Name</th>
                        <th className="p-2">Guide</th>
                        <th className="p-2">Contact</th>
                        <th className="p-2">Departure Date</th>
                        <th className="p-2">Departure Location</th>
                        <th className="p-2">Destination</th>
                        <th className="p-2">Note</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings.map((b) => (
                        <tr key={b._id} className="border-t">
                            <td className="p-2">{b.tour_name}</td>
                            <td className="p-2">{b.guide_name}</td>
                            <td className="p-2">{b.guide_contact_no}</td>
                            <td className="p-2">{new Date(b.departure_date).toLocaleDateString()}</td>
                            <td className="p-2">{b.departure_location}</td>
                            <td className="p-2">{b.destination}</td>
                            <td className="p-2">{b.special_note || 'None'}</td>
                            <td className="p-2 capitalize">{b.status}</td>
                            <td className="p-2">
                                {b.status === 'pending' && (
                                    <button
                                        onClick={() => handleConfirm(b._id)}
                                        className="bg-green-600 text-white px-3 py-1 rounded"
                                    >
                                        Confirm
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
