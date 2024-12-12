// import Navbar  from'./Navbar'
// import Footer from './Footer';
// const AddVisa = () => {


//   const handleSubmit = event => {
//     event.preventDefault();

//     const form = event.target;

//     // const Image = form.Image.value;
//     // const Name = form.Name.value;
//     // const visaType = form.visaType.value;
//     // const Time = form.Time.value;
//     // const description = form.description.value;
//     // const ageRestriction = form.ageRestriction.value;
//     // const fee = form.fee.value;
//     // const validity = form.validity.value;
//     // const applicationMethod = form.applicationMethod.value;

//     // const AllDetails = { Image, Name, visaType, Time, description, ageRestriction, fee, validity, applicationMethod }

//     // console.log(AllDetails)

//   }

//   return (
//     <div className="container mx-auto">
//       <div>
//         <Navbar></Navbar>
//       </div>
//       <div className='container mx-auto  mb-10'>
//         <h2 className="text-3xl text-center mt-10">Add Visa Here</h2>

//         <div className="container mx-auto">
        
//           <form onSubmit={handleSubmit}>
//       <h2>Add Visa</h2>
//       <input type="text" name="countryImage" onChange={handleChange} placeholder="Country Image URL" required />
//       <input type="text" name=" countryName" onChange={handleChange} placeholder="Country Name" required />
//       <select name="visaType" onChange={handleChange} required>
//         <option value="">Select Visa Type</option>
//         <option value="Tourist visa">Tourist visa</option>
//         <option value="Student visa">Student visa</option>
//         <option value="Official visa">Official visa</option>
//       </select>
//       <input type="text" name="processingTime" onChange={handleChange} placeholder="Processing Time" required />
//       <textarea name="description" onChange={handleChange} placeholder="Description" required />
//       <input type="number" name="ageRestriction" onChange={handleChange} placeholder="Age Restriction" required />
//       <input type="number" name="fee" onChange={handleChange} placeholder="Fee" required />
//       <input type="text" name="validity" onChange={handleChange} placeholder="Validity" required />
//       <input type="text" name="applicationMethod" onChange={handleChange} placeholder="Application Method" required />
//       <button type="submit">Add Visa</button>
//     </form>
//           <button className='btn btn-accent w-1/2'>Add Visa</button>
//         </div>

//       </div>
//       <div>
//         <Footer></Footer>
//       </div>

//     </div>
//   );
// };

// export default AddVisa;
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import { db } from '../firebaseConfig'; // Import your Firebase configuration

const AddVisa = () => {
  const [formData, setFormData] = useState({
    countryImage: '',
    countryName: '',
    visaType: '',
    processingTime: '',
    description: '',
    ageRestriction: '',
    fee: '',
    validity: '',
    applicationMethod: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Save the visa data to Firestore
      await db.collection('visas').add(formData);
      alert('Visa added successfully!');
      // Optionally, reset the form
      setFormData({
        countryImage: '',
        countryName: '',
        visaType: '',
        processingTime: '',
        description: '',
        ageRestriction: '',
        fee: '',
        validity: '',
        applicationMethod: ''
      });
    } catch (error) {
      console.error('Error adding visa:', error);
      alert('Failed to add visa. Please try again.');
    }
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className='container mx-auto mb-10'>
        <h2 className="text-3xl text-center mt-10">Add Visa Here</h2>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit}>
            <h2>Add Visa</h2>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              placeholder="Country Image URL"
              required
            />
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              placeholder="Country Name"
              required
            />
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
            </select>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              placeholder="Processing Time"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              placeholder="Age Restriction"
              required
            />
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              placeholder="Fee"
              required
            />
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              placeholder="Validity"
              required
            />
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              placeholder="Application Method"
              required
            />
            <button type="submit" className='btn btn-accent w-1/2'>Add Visa</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddVisa;