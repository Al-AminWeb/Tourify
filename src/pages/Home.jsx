import HeroBanner from "../components/HeroBanner.jsx";
import HowToUseTourify from "../components/HowToUseTourify.jsx";
import AirlineShowcase from "../components/AirlineShowcase.jsx";

const Home = () => {
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
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-6 py-12 max-w-7xl mx-auto'>

      </div>
    </div>
  )
}

export default Home
