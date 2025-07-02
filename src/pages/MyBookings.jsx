import { useLoaderData } from "react-router";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext.jsx";

const MyBookings = () => {
    const { user } = use(AuthContext);
    const data = useLoaderData();
    const token = localStorage.getItem('token');
    const [bookings, setBookings] = useState(data.data || []);

    useEffect(() => {
        if (!user?.email) return;
        axios.get(`https://tourify-server.vercel.app/${user.email}`, {
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
            await axios.patch(`https://tourify-server.vercel.app/booking-status/${id}`, {
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
        <div className=" bg-blue-300 py-10 px-4">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">My Bookings</h2>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full table-auto text-sm text-gray-700">
                        <thead className="bg-blue-100 text-blue-800 font-semibold">
                        <tr>
                            <th className="px-4 py-3">Tour Name</th>
                            <th className="px-4 py-3">Guide</th>
                            <th className="px-4 py-3">Contact</th>
                            <th className="px-4 py-3">Departure Date</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Destination</th>
                            <th className="px-4 py-3">Note</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {bookings.length === 0 ? (
                            <tr>
                                <td colSpan="9" className="text-center py-6 text-gray-500">
                                    No bookings found.
                                </td>
                            </tr>
                        ) : (
                            bookings.map((b) => (
                                <tr key={b._id} className="hover:bg-blue-50 transition">
                                    <td className="px-4 py-3 font-medium">{b.tour_name}</td>
                                    <td className="px-4 py-3">{b.guide_name}</td>
                                    <td className="px-4 py-3">{b.guide_contact_no}</td>
                                    <td className="px-4 py-3">
                                        {new Date(b.departure_date).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3">{b.departure_location}</td>
                                    <td className="px-4 py-3">{b.destination}</td>
                                    <td className="px-4 py-3">{b.special_note || 'None'}</td>
                                    <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    b.status === 'completed'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}
                                            >
                                                {b.status}
                                            </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {b.status === 'pending' && (
                                            <button
                                                onClick={() => handleConfirm(b._id)}
                                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded transition"
                                            >
                                                Confirm
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
