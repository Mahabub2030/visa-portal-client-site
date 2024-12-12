import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const AllVisa = ({ visa }) => {
  console.log(visa)

  const lodedVisa = useLoaderData();

  // const {  name, ProccingTime, age, fee, document, } = visa;
  return (
    <div className="container m-20 mx-auto">
      {/* <Navbar></Navbar> */}

      <div className="card card-compact bg-base-100 w-[200px] shadow-xl">
        <figure>
          <img
            // src={photo}
            alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllVisa;