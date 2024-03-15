import React from 'react';

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="relative border-b border-primary py-10 px-8 md:py-16 md:px-12">

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-black mb-2">Stay in the loop</h3>
              <p className="text-gray-500 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" className="w-full appearance-none bg-[#1B75B0] border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white-100 placeholder-white-100" placeholder="Your best email…" aria-label="Your best email…" />
                <a className="btn text-white-100 bg-[#1B75B0] hover:bg-white shadow" href="#0">Subscribe</a>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;
