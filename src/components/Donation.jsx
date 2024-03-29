import React, {useEffect, useState} from 'react';
import ModalComponent from '../utils/ModalComponent';
import image from '../images/background_donations3.jpg';
import "../css/donation.css"

function Donation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => 
    {
      setDate(new Date());
    }, 1);
  }, []);

  const hours = date.toLocaleString('en-US', { hour: 'numeric', hour12: false });
  const minutes = date.toLocaleString('en-US', { minute: '2-digit' });
  const seconds = date.toLocaleString('en-US', { second: '2-digit' });
  const miliseconds = date.getMilliseconds();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=''>

      <div className="holder h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>

        <div className="show-counter">

          <a className='countdown-link'>
            <p> Every second that passes is a chance to help someone</p>
          </a>

          <a
            className="countdown-link"
          >
            <div className='countdown'>
              <p>{("0" + hours).slice(-2)}</p>
              <span>Hours</span>
            </div>
            <p>:</p>
            <div className='countdown'>
              <p>{("0" + minutes).slice(-2)}</p>
              <span>Minutes</span>
            </div>
            <p>:</p>
            <div className='countdown'>
              <p>{("0" + seconds).slice(-2)}</p>
              <span>Seconds</span>
            </div>
            <p>:</p>
            <div className='countdown'>
              <p>{("0" + miliseconds).slice(-2)}</p>
              <span>Miliseconds</span>
            </div>
          </a>
        </div>

        <div className="donationContainer">
          <h1 className="text-3xl mb-4">Donate to OOTS</h1>
          <p className="text-gray-700 mb-6"> Your support can make a difference in the lives of children around the world.</p>
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
