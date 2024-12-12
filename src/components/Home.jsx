import { Link } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

const Home = () => {
  const latestVisas = [
    {
      country: "USA",
      image: "https://via.placeholder.com/150",
      visa_type: "Tourist",
      processing_time: "7 Days",
      fee: "$150",
      validity: "6 Months",
      application_method: "Online",
    },
    {
      country: "Canada",
      image: "https://via.placeholder.com/150",
      visa_type: "Work",
      processing_time: "15 Days",
      fee: "$250",
      validity: "1 Year",
      application_method: "Offline",
    },
    {
      country: "Australia",
      image: "https://via.placeholder.com/150",
      visa_type: "Study",
      processing_time: "10 Days",
      fee: "$200",
      validity: "2 Years",
      application_method: "Online",
    },
    {
      country: "Germany",
      image: "https://via.placeholder.com/150",
      visa_type: "Business",
      processing_time: "5 Days",
      fee: "$300",
      validity: "3 Months",
      application_method: "Offline",
    },
    {
      country: "Japan",
      image: "https://via.placeholder.com/150",
      visa_type: "Tourist",
      processing_time: "7 Days",
      fee: "$100",
      validity: "6 Months",
      application_method: "Online",
    },
    {
      country: "UK",
      image: "https://via.placeholder.com/150",
      visa_type: "Work",
      processing_time: "20 Days",
      fee: "$350",
      validity: "1 Year",
      application_method: "Offline",
    },
  ]
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <main className="min-h-screen">
        
        {/* Latest Visas Section */}
        <section className="mb-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Latest Visas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVisas.map((visa, index) => (
              <div key={index} className="card w-full bg-base-100 shadow-md">
                <figure>
                  <img src={visa.image} alt={`${visa.country} Visa`} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{visa.country}</h3>
                  <p>Visa Type: {visa.visa_type}</p>
                  <p>Processing Time: {visa.processing_time}</p>
                  <p>Fee: {visa.fee}</p>
                  <p>Validity: {visa.validity}</p>
                  <p>Application Method: {visa.application_method}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/visa-details/${index}`} className="btn btn-primary">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/all-visas" className="btn btn-outline">
              See All Visas
            </Link>
          </div>
        </section>

        {/* Extra Section 1 */}
        <section className="bg-gray-100 py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="lg:w-1/2">
              <img src="https://i.ibb.co/Wk9nXKj/pexels-taryn-elliott-5405598.jpg" alt="Why Choose Us" className="rounded-lg w-3/5 h-96" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg">
                We offer a seamless visa application process, expert advice, and fast processing times. Our platform is trusted by thousands of travelers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Extra Section 2 */}
        <section className="py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
          <div className="carousel w-full">
            <div id="review1" className="carousel-item w-full text-center">
              <p className="text-lg italic">
                "The service was exceptional! I got my visa in just 5 days. Highly recommended!"
              </p>
              <p className="mt-2 text-sm">- John Doe</p>
            </div>
            <div id="review2" className="carousel-item w-full text-center">
              <p className="text-lg italic">
                "I appreciate the transparency and ease of use. Great experience overall."
              </p>
              <p className="mt-2 text-sm">- Jane Smith</p>
            </div>
            <div id="review3" className="carousel-item w-full text-center">
              <p className="text-lg italic">
                "Excellent support team! They guided me through every step of the process."
              </p>
              <p className="mt-2 text-sm">- Michael Brown</p>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;