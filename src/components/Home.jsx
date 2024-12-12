import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AllVisa from "./AllVisa";


const Home = ({ visa }) => {

  const loadedVisa = useLoaderData();

  console.log('loded visa is here',loadedVisa)

  return (
    <div className="container mx-auto p-5">
      <Navbar></Navbar>
      <Banner></Banner>
      <main className="min-h-screen">

        {/* Latest Visas Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 justify-center items-center">Latest Visas:{loadedVisa.length} </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 m-10 gap-5">
            {
              loadedVisa.map(visa => <AllVisa
                key={visa._id}
                visa ={visa}
              ></AllVisa>)
            }
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