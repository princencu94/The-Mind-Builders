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

  if (!values.companyname) {
      errors.companyname = 'Required*';
  }

  if (!values.jobtitle) {
    errors.jobtitle = 'Required*';
  } 

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

const RequestNewTalentForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({

        initialValues: {
  
          firstname: '',
          lastname: '',
          email: '',
          companyname:'',
          jobtitle:'',
          phone:'',
          seeking:'',
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
        <div className="container  mx-auto w-5/6 lg:max-w-2xl py-16">
        <form className="space-y-8 divide-y divide-gray-200" encType="multipart/form-data" ref={form} onSubmit={formik.handleSubmit}>
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
                    id="firstname"
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
                    id="lastname"
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

              <div className="sm:col-span-3">
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyname}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.companyname && formik.errors.companyname ? (
                <div><p className="text-red-600 text-sm">{formik.errors.companyname}</p></div>
                ) : null}
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobtitle}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.jobtitle && formik.errors.jobtitle ? (
                <div><p className="text-red-600 text-sm">{formik.errors.jobtitle}</p></div>
                ) : null}
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Company email address
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

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                <div><p className="text-red-600 text-sm">{formik.errors.phone}</p></div>
                ) : null}
              </div>

              <fieldset className="sm:col-span-4">
              <legend className="text-lg leading-6 font-medium text-gray-900">What are you seeking to learn more about?</legend>
              <div className="mt-4 space-y-4 ">
                <div className="flex items-center">
                  <input
                    id="talent-solutions"
                    name="seeking"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="Talent Solutions"
                    className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label htmlFor="talent-solutions" className="ml-3 block text-sm font-medium text-gray-700">
                    Talent Solutions
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="employee-contractor-benefits"
                    name="seeking"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="Employee/Contractor Benefits"
                    className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label htmlFor="employee-contractor-benefits" className="ml-3 block text-sm font-medium text-gray-700">
                    Employee/Contractor Benefits
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="training-services"
                    name="seeking"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="Training Services"
                    className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label htmlFor="training-services" className="ml-3 block text-sm font-medium text-gray-700">
                    Training Services
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="team-building-through-improv"
                    name="seeking"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="Team Building Through Improv!"
                    className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label htmlFor="team-building-through-improv" className="ml-3 block text-sm font-medium text-gray-700">
                    Team Building Through Improv!
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="other"
                    name="seeking"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="Other"
                    className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">
                    Other: Comment box below
                  </label>
                </div>
                
              </div>
            </fieldset>
            <div className="sm:col-span-6">
                <label htmlFor="other" className="sr-only text-sm font-medium text-gray-700">
                  Comment
                </label>
                <div className="mt-1">
                  <textarea
                    id="other"
                    name="seeking"
                    rows={3}
                    className="shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border border-gray-300 rounded-md"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.seeking}
                  />
                </div>
                {formik.touched.other && formik.errors.other ? (
                <div><p className="text-red-600 text-sm">{formik.errors.other}</p></div>
                ) : null}
              
              </div>
            </div>
          </div>

        </div>
  
        <div className="pt-5">
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mx-auto  inline-flex justify-center py-3  border border-transparent shadow-sm text-sm font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-400 "
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