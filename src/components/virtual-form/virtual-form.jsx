import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
const validate = values => {

    const errors = {};
 
    if (!values.firstname) {
      errors.firstname = 'Required*';
    } 

    // if (!values.lookingfor) {
    //     errors.lookingfor = 'Required';
    // } 

    if (!values.phone) {
        errors.phone = 'Required*';
      } 
 
    if (!values.lastname) {
      errors.lastname = 'Required*';
    }
 
    if (!values.email) {
      errors.email = 'Required*';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
 
  };

export default function VirtualForm() {

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({

        initialValues: {
          lookingfor:'',
          firstname: '',
          lastname: '',
          email: '',
          phone:''
   
        },
        validate,
        onSubmit: values => {
           setIsSubmitting(true);
            emailjs.sendForm('contact_service', 'va_template', form.current, '5yp609nAmXIULb-Yf')
            .then((result) => {
              toast.success('Email Has been sent!');
              setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
            });
        },
   
      });

  
    return (
        <div className="mt-0">
        <form onSubmit={formik.handleSubmit} ref={form} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
            <fieldset className="mt-6">
              <legend className="contents text-base font-medium text-gray-900">What are you looking to do with Intercom Staffing?</legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="looking-for"
                    name="lookingfor"
                    type="radio"
                    value="I am looking to hire an assistant"
                    onChange={formik.handleChange}
                    className="h-4 w-4 border-gray-300 text-yellow-300 focus:ring-yellow-300"
                  />
                  <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                    I am looking to hire an assistant
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="looking-for"
                    name="lookingfor"
                    type="radio"
                    onChange={formik.handleChange}
                    value="I am looking to apply for a job"
                    className="h-4 w-4 border-gray-300 text-yellow-300 focus:ring-yellow-300"
                  />
                  <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                    I am looking to apply for a job
                  </label>
                </div>
                {/* {formik.touched.lookingfor && formik.errors.lookingfor ? (
                <div><p className="text-red-600 text-sm">{formik.errors.lookingfor}</p></div>
                ) : null} */}
              </div>
            </fieldset>
            </div>
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstname"
                id="first-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-yellow-300 focus:ring-yellow-300"
              />
            </div>
                {formik.touched.firstname && formik.errors.firstname ? (
                <div><p className="text-red-600 text-sm">{formik.errors.firstname}</p></div>
                ) : null}
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastname"
                id="last-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-yellow-300 focus:ring-yellow-300"
              />
            </div>
            {formik.touched.lastname && formik.errors.lastname ? (
                <div><p className="text-red-600 text-sm">{formik.errors.lastname}</p></div>
                ) : null}
          </div>
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Company Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-yellow-300 focus:ring-yellow-300"
              />
            </div>
                {formik.touched.email && formik.errors.email ? (
                <div><p className="text-red-600 text-sm">{formik.errors.email}</p></div>
                ) : null}
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-yellow-300 focus:ring-yellow-300"
              />
            </div>
                {formik.touched.phone && formik.errors.phone ? (
                <div><p className="text-red-600 text-sm">{formik.errors.phone}</p></div>
                ) : null}
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              
              className="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-yellow-300 px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            >
              {
                isSubmitting ?
                <Cog6ToothIcon className="animate-spin -ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                : null
              }
              
              Let's talk
            </button>
          </div>
        </form>
      </div>
    )
}