import React, {useState} from 'react';
import ModalComponent from '../utils/ModalComponent';
import image from '../images/background.jpg';
import "../css/donation.css"

function Donation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const values = [
    'Day',
    'Hour',
    'Minutes',
    'Seconds',
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      <div className="flex flex-rows h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        
        <div id="countdown" className='countdownHolder'>
          {values.map((value, index) => (
            <span className={`count${value}`}>
              <span className='position'>
                <span className='digit static'>
                  0
                </span>
              </span>
              <span className='position'>
                  <span className='digit static'>
                    0
                  </span> 
                </span>
            </span>
          ))}
        </div>

        <div className="mt-auto mb-[15%] pl-[5%] h-[20%] w-[30%] bg-red-100">
          <h3 className='text-white-100 text-justify text-xl'>
            Out of the Shadows (OOTS) is organized as a nonprofit corporation operating under section 501(c)(3);
            therefore, OOTS is exempt from federal and state income taxes; however to the extent OOTS incurs
            unrelated business income this form of income would be taxable to OOTS.
            <br/>
            <br/>
            Contributions to Out of the Shadows are deductible by the donor in accordance with section 170 of the
            Internal Revenue Code. 
          </h3>           
        </div>

        <div className="bg-white-100 rounded-lg p-8 ml-auto mr-[5%] mb-auto mt-[5%] shadow-md max-w-md w-full text-center">
          <h1 className="text-3xl mb-4">Donate to OOTS</h1>
          <p className="text-gray-700 mb-6"> Your support can make a difference in the lives of children around the world.</p>
          <p className="text-gray-700 mb-6"> Out of the Shadows’ Federal Taxpayer I.D. Number is 36‐4975843. </p>
          <button className="rounded-[100vh] bg-target hover:bg-gray-200 text-white font-bold py-2 px-4 rounded" onClick={handleModalOpen}>Donate Now</button>
        </div>
        
        

      </div>

      

      <ModalComponent isOpen={isModalOpen} onClose={handleModalClose}>
        <div className='w-[50vh] h-[50vh] bg-white-100'>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
            <form id="donation-form" action="submit-donation.php" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full py-2 px-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full py-2 px-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Add more form fields here */}
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

export default Donation;
