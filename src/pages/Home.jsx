import HeroBanner from "../components/HeroBanner.jsx";
import HowToUseTourify from "../components/HowToUseTourify.jsx";
import AirlineShowcase from "../components/AirlineShowcase.jsx";
import {NavLink, useLoaderData} from "react-router";
import {useState} from "react";
import PackageCard from "../components/PackageCard.jsx";

const Home = () => {
    const data = useLoaderData()
    const [packages, setPackages] = useState(data?.data || [])
  return (
    <div>
       <div className='w-full py-5'>
           <HeroBanner />
       </div>
        <div className='flex items-center justify-center'>
            <HowToUseTourify/>
        </div>
        <div>
            <AirlineShowcase/>
        </div>
        <section className="py-12 px-4 lg:px-16 ">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">🌍 Featured Tour Packages</h2>
                <p className="text-gray-500 text-sm md:text-base">Top selected trips for your next adventure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {
                    packages.slice(0, 6).map(tourPackage => (
                        <PackageCard key={tourPackage._id} tourPackage={tourPackage} />
                    ))
                }
            </div>

            {/* Show All Button */}
            <div className="text-center mt-10">
                <NavLink to="/all-packages">
                    <button className="btn btn-outline btn-primary px-8 text-lg">Show All</button>
                </NavLink>
            </div>
        </section>

    </div>
  )
}

export default Home
