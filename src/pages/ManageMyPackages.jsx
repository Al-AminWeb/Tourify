import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext'; // adjust path if needed

const ManageMyPackages = () => {
    const { user } = useContext(AuthContext); // assuming user object has email
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    // For edit modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editPackage, setEditPackage] = useState(null);

    useEffect(() => {
        if (!user?.email) return;

        // Fetch packages by guide email
        const fetchPackages = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/packages?guide_email=${user.email}`);
                setPackages(res.data);
            } catch (err) {
                console.error(err);
                Swal.fire('Error', 'Failed to load your packages', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchPackages();
    }, [user?.email]);

    // Open edit modal with selected package data
    const handleEditClick = (pkg) => {
        setEditPackage(pkg);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setEditPackage(null);
    };

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditPackage((prev) => ({ ...prev, [name]: value }));
    };

    // Submit updated package to backend
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedPackage = {
                ...editPackage,
                price: parseInt(editPackage.price),
                guide_contact_no: parseInt(editPackage.guide_contact_no),
            };

            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/packages/${editPackage._id}`,
                updatedPackage
            );

            if (res.data.success) {
                Swal.fire('Success', 'Package updated successfully', 'success');
                // Update packages state locally to reflect changes without refetching
                setPackages((prev) =>
                    prev.map((pkg) => (pkg._id === editPackage._id ? updatedPackage : pkg))
                );
                closeModal();
            } else {
                throw new Error('Update failed');
            }
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'Failed to update package', 'error');
        }
    };

    // Delete package with confirmation
    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirm.isConfirmed) {
            axios.delete(`${import.meta.env.VITE_API_URL}/package/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted!',
                            text: 'Package deleted successfully',
                            timer: 2000,
                            showConfirmButton: false
                        });
                        setPackages(prev => prev.filter(p => p._id !== id));
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed!',
                            text: 'Could not delete the package',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
                });
        }
    };


    if (loading) return <p className="text-center mt-10">Loading your packages...</p>;

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6">Manage My Packages</h2>
            {packages.length === 0 ? (
                <p>You have no packages added yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th>Tour Name</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Departure Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {packages.map((pkg) => (
                            <tr key={pkg._id}>
                                <td>{pkg.tour_name}</td>
                                <td>{pkg.duration}</td>
                                <td>${pkg.price}</td>
                                <td>{new Date(pkg.departure_date).toLocaleDateString()}</td>
                                <td className="space-x-2">
                                    <button
                                        onClick={() => handleEditClick(pkg)}
                                        className="btn btn-sm btn-primary"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pkg._id)}
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Edit Modal */}
            {isModalOpen && editPackage && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-3xl relative">
                        <h3 className="font-bold text-lg mb-4">Edit Package: {editPackage.tour_name}</h3>
                        <form onSubmit={handleUpdate} className="space-y-4 max-h-[70vh] overflow-auto">
                            <div>
                                <label className="block mb-1 font-semibold">Tour Name</label>
                                <input
                                    name="tour_name"
                                    value={editPackage.tour_name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Image URL</label>
                                <input
                                    name="image"
                                    value={editPackage.image}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Duration</label>
                                <input
                                    name="duration"
                                    value={editPackage.duration}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Departure Location</label>
                                <input
                                    name="departure_location"
                                    value={editPackage.departure_location}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Destination</label>
                                <input
                                    name="destination"
                                    value={editPackage.destination}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={editPackage.price}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Departure Date</label>
                                <input
                                    type="date"
                                    name="departure_date"
                                    value={editPackage.departure_date.slice(0, 10)}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Guide Contact No.</label>
                                <input
                                    type="number"
                                    name="guide_contact_no"
                                    value={editPackage.guide_contact_no}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">Package Details</label>
                                <textarea
                                    name="package_details"
                                    value={editPackage.package_details}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered w-full"
                                    required
                                    rows={4}
                                />
                            </div>

                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                                <button type="button" className="btn btn-outline" onClick={closeModal}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageMyPackages;
