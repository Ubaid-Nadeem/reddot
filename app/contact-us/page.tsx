import "./contact.css";

export default function ContactUs() {
  return (
    <div className="contact-us-container">
      <h2>Get in touch</h2>
      <p>
        You can contact us with any questions related to online sales through
        the following channels:
      </p>
      <h3>Call / Whatsapp us at 03022994444</h3>
      <h3>E-mail us on support@radstore.pk</h3>
      <h3>
        Alternatively, you can reach us by filling the contact form below.
      </h3>
      <p>
        Please note that our Customer Service Department Hours are Monday to
        Friday from 9.00am to 5.00pm PST. Please allow up to 24 hours for the
        representative to get back to you.
      </p>

      <div className="form-container py-20">
        <h2>Contact Us</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-medium text-gray-900 text-left"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900 text-left"
            >
             Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="Phone-number"
              className="block text-sm/6 font-medium text-gray-900 text-left"
            >
             Phone number
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="Phone-number"
                type="Phone-number"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="col-span-full">
              <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900 text-left">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              
            </div>
        </div>

      </div>
    </div>
  );
}
