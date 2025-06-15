import { Link } from 'react-router';
import { Calendar, Clock } from 'lucide-react';

const PackageCard = ({ tourPackage }) => {
  if (!tourPackage) return null;

  const {
    _id,
    image,
    tour_name,
    guide_name,
    guide_photo,
    duration,
    departure_date,
    price,
  } = tourPackage;

  return (
      <div className="card bg-white shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all rounded-xl">
        <figure className="relative h-56">
          <img src={image} alt={tour_name} className="w-full h-full object-cover rounded-t-xl" />
          <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full px-4 py-1 text-sm font-semibold shadow-lg">
            ${price}
          </div>
        </figure>

        <div className="card-body p-5">
          {/* Guide */}
          <div className="flex items-center gap-3 mb-3">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                    src={guide_photo || 'https://placehold.co/64x64/a3e635/ffffff?text=G'}
                    alt={guide_name}
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Tour Guide</p>
              <h4 className="font-bold text-sm text-gray-700">{guide_name}</h4>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 h-14 overflow-hidden mb-3">{tour_name}</h2>

          {/* Info */}
          <div className="space-y-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{departure_date}</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-5">
            <Link to={`/package/${_id}`}>
              <button className="btn btn-primary w-full rounded-md text-sm">View Details</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default PackageCard;
