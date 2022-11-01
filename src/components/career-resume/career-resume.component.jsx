import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';

import Spinner from '../../assets/spinner.svg';

const validate = values => {

    const errors = {};
 
    if (!values.role) {
      errors.role = 'Required*';
    } 

    if (!values.file) {
        errors.file = 'Required*';
    } 

    return errors;
 
};

const CareerResumeModal = ({ showForm, setShowForm }) => {

    const [open, setOpen] = useState(showForm)
    const cancelButtonRef = useRef(null)

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const formik = useFormik({

        initialValues: {
         role:"",
         file:""
   
        },
        validate,
        onSubmit: values => {
           setIsSubmitting(true);
            emailjs.sendForm('contact_service', 'resume_careers', form.current, '5yp609nAmXIULb-Yf')
            .then((result) => {
                setMessage('Resume has been sent Thank you')
              setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
            });
        },
   
      });

    return (
        <Transition.Root show={showForm} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setShowForm}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <form onSubmit={formik.handleSubmit} ref={form}>
                <div>
                
                <div className="sm:col-span-3">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Role
                    </label>
                    <div className="mt-1">
                        <select
                        id="role"
                        name="role"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.role}
                        >
                        <option>Digital Marketing</option>
                        <option>Email Marketing</option>
                        <option>Outside Sales</option>
                        <option>Lead Generator</option>
                        <option>Appointment Setter</option>
                        <option>Closer</option>
                        <option>Real Estate VA</option>
                        </select>
                    </div>
                    {formik.touched.role && formik.errors.role ? (
                    <div><p className="text-red-600 text-sm">{formik.errors.role}</p></div>
                    ) : null}
                </div>

                <div className="sm:col-span-3 mt-5">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Upload Resume
                    </label>
                    <div className="mt-1">
                        <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.file}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                        />
                    
                    </div>
                    {formik.touched.file && formik.errors.file ? (
                    <div><p className="text-red-600 text-sm">{formik.errors.file}</p></div>
                    ) : null}
                </div>
                </div>

                <div>
                    <p className='text-green-600 text-base pt-5'>{message}</p>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-full border border-transparent bg-yellow-300 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    
                  >
                    { isSubmitting ? <> <img className="-ml-0.5 mr-2 h-4 w-4" src={Spinner} alt="spinner" /> Submitting </> : 'Submit'}  
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setShowForm(false)}
                    ref={cancelButtonRef}
                    disabled={isSubmitting}
                  >
                    Close
                  </button>
                  
                </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    )
}

export default CareerResumeModal;