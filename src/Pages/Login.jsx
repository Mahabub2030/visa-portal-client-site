import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { Link } from "react-router-dom";



const Login = () => {

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  // google login here
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <h2 className="text-3xl text-center mt-5 p-2 font-bold">Please Login Here</h2>
        <div className="">
          <div className="card bg-base-100 w-1/3 container shrink-0 shadow-2xl mx-auto m-20 py-10 px-5">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5 text-center items-center">
                <button className="btn btn-primary w-full">Login</button>
                <p> Dont have an Account Please Regiser<Link to='/register' className="btn text-base p-2">register</Link></p>
                <div className="w-full flex items-center justify-center gap-2 btn text-xl">
                  <h2 >Login With</h2>
                <div className="font-bold text-red-800">
                <FaGoogle></FaGoogle>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;