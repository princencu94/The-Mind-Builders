import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import Spinner from '../../assets/spinner.svg';
import toast from 'react-hot-toast';
const validate = values => {

  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required*';
  } 

  if (!values.streetaddress) {
      errors.streetaddress = 'Required*';
  }

  if (!values.city) {
    errors.city = 'Required*';
  } 

  if (!values.previousjobtitle) {
    errors.previousjobtitle = 'Required*';
  } 

  if (!values.region) {
    errors.region = 'Required*';
  } 

  if (!values.postalcode) {
    errors.postalcode = 'Required*';
  } 

  if (!values.jobstartdate) {
    errors.jobstartdate = 'Required*';
  } 

  if (!values.jobenddate) {
    errors.jobenddate = 'Required*';
  } 

  if (!values.about) {
    errors.about = 'Required*';
  } 

  if (!values.file) {
    errors.file = 'Required*';
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

const RequestNewTalentForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({

        initialValues: {
  
          firstname: '',
          lastname: '',
          email: '',
          streetaddress:'',
          city:'',
          region:'',
          postalcode:'',
          previousjobtitle:'',
          jobstartdate:'',
          jobenddate:'',
          about:'',
          file:'',
        },
        validate,
        onSubmit: values => {
          setIsSubmitting(true);
          emailjs.sendForm('contact_service', 'resume_template', form.current, '5yp609nAmXIULb-Yf')
          .then((result) => {
              toast.success('Email Has been sent!');
              setIsSubmitting(false);
          }, (error) => {
              console.log(error.text);
          });
        },
   
      });


  const form = useRef();

  
  
    return (
        <div className="container  mx-auto w-1/2 py-16">
        <form className="space-y-8 divide-y divide-gray-200" enctype="multipart/form-data" ref={form} onSubmit={formik.handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will not be shared with any other individuals without your Consent
              </p>
            </div>
  
  
          </div>
  
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
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
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.firstname && formik.errors.firstname ? (
                <div><p className="text-red-600 text-sm">{formik.errors.firstname}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-3">
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
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.lastname && formik.errors.lastname ? (
                <div><p className="text-red-600 text-sm">{formik.errors.lastname}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                <div><p className="text-red-600 text-sm">{formik.errors.email}</p></div>
                ) : null}
              </div>
  
  
              <div className="sm:col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="streetaddress"
                    id="streetaddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.streetaddress}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.streetaddress && formik.errors.streetaddress ? (
                <div><p className="text-red-600 text-sm">{formik.errors.streetaddress}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.city && formik.errors.city ? (
                <div><p className="text-red-600 text-sm">{formik.errors.city}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.region}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.region && formik.errors.region ? (
                <div><p className="text-red-600 text-sm">{formik.errors.region}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postalcode"
                    id="postalcode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postalcode}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.postalcode && formik.errors.postalcode ? (
                <div><p className="text-red-600 text-sm">{formik.errors.postalcode}</p></div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Work History</h3>
              <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>

            <div className="sm:col-span-6 mt-5">
                <label htmlFor="previousjobtitle" className="block text-sm font-medium text-gray-700">
                    Previous Job Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="previousjobtitle"
                    id="previousjobtitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.previousjobtitle}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {formik.touched.previousjobtitle && formik.errors.previousjobtitle ? (
                <div><p className="text-red-600 text-sm">{formik.errors.previousjobtitle}</p></div>
                ) : null}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="jobstartdate" className="block text-sm font-medium text-gray-700">
                    Date Previous Job Started
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="jobstartdate"
                    id="jobstartdate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobstartdate}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.jobstartdate && formik.errors.jobstartdate ? (
                <div><p className="text-red-600 text-sm">{formik.errors.jobstartdate}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="jobenddate" className="block text-sm font-medium text-gray-700">
                    Date Previous Job Ended
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="jobenddate"
                    id="jobenddate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobenddate}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.jobenddate && formik.errors.jobenddate ? (
                <div><p className="text-red-600 text-sm">{formik.errors.jobenddate}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border border-gray-300 rounded-md"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.about}
                  />
                </div>
                {formik.touched.about && formik.errors.about ? (
                <div><p className="text-red-600 text-sm">{formik.errors.about}</p></div>
                ) : null}
                <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                  Resume
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-yellow-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-300"
                      >
                        
                        <input 
                        id="file-upload" 
                        name="file" 
                        type="file" 
                        
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.file}
                        />
                      </label>
                      <p className="pl-1"></p>
                    </div>
                    <p className="text-xs text-gray-500">PDF/Docx/Doc up to 10MB</p>

                  </div>
                </div>
                {formik.touched.file && formik.errors.file ? (
                <div><p className="text-red-600 text-sm">{formik.errors.file}</p></div>
                ) : null}
              </div>
         
            </div>
          </div>
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-3 inline-flex justify-center py-3 px-16 border border-transparent shadow-sm text-sm font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-400 "
            >
              {
                isSubmitting ?
                  <>
                    <img src={Spinner} className="-ml-0.5 mr-2 h-4 w-4" alt="Spinner"/> Submitting
                  </>
                  
                : "Submit"
              }
            
            </button>
          </div>
        </div>
      </form>
      </div>
    )
}

export default RequestNewTalentForm;