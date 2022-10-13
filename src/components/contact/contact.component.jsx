import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';



const Contact = () => {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailjs.sendForm('contact_service', 'template_mizzseu', form.current, 'user_tWELKPjR62qHcFOOLxqsa')
      .then((result) => {
          console.log(result.text);
          alert("Message sent")
      }, (error) => {
          console.log(error.text);
      });
    }
              

    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="max-w-lg mx-auto">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                    <p className="mt-3 text-lg leading-6 text-gray-500">
                    We are always available 24/7
                    </p>
                    <dl className="mt-8 text-base text-gray-500">
                    <div>
                        <dt className="sr-only">Postal address</dt>
                        <dd>
                        <p>7715 Crittenden St, </p>
                        <p>Philadelphia, PA 19118</p>
                        </dd>
                    </div>
                    <div className="mt-6">
                        <dt className="sr-only">Phone number</dt>
                        <dd className="flex">
                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">267-900-7922</span>
                        </dd>
                    </div>
                    <div className="mt-3">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                        <EnvelopeIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">info@intercomstaffing.com</span>
                        </dd>
                    </div>
                    </dl>
                    
                </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="max-w-lg mx-auto lg:max-w-none">
                    <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="full-name" className="sr-only">
                        Full name
                        </label>
                        <input
                        type="text"
                        name="fullname"
                        id="full-name"
                        autoComplete="name"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                        Email
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">
                        Phone
                        </label>
                        <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Phone"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                        placeholder="Message"
                        defaultValue={''}
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-base font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-400 "
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;