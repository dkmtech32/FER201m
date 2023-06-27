import React from 'react'
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Switch, Button, Typography, FormGroup } from '@mui/material';
import * as Yup from 'yup';
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false

    },
  
      onSubmit: (values)=>{alert(JSON.stringify(formik.values))},
      //Convert to JSON string and show in alert box.
      
  
    validationSchema: Yup.object({
      name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),

  });

  return (
    <div class="container">

      <form id="contact-form" name="contact-form" onSubmit={formik.handleSubmit} method="POST">
        <h3>Quick Contact</h3>
        <h4>Contact us today, and get reply with in 24 hours!</h4>

        <div class="row">
          <div class="col-md-6">
            <div class="md-form">
              <TextField
                fullWidth
                color='warning'
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="md-form">
              <TextField
                fullWidth
                color='warning'
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}

            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-12">
            <div class="md-form ">
              <TextField
                fullWidth
                color='warning'
                label="Phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange} />
              {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="md-form ">
              <TextField
                fullWidth
                color='warning'
                label="Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange} />
              {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
            </div>
          </div>
        </div>



        <FormControlLabel control={
          <div class="switch" >
          <label>
            <input type="checkbox" name='agree' value={formik.values.agree} onClick={formik.handleChange} />
            <span class="lever"></span>
            Agree to terms and conditions.
          </label>
        </div>
        } 
          value={formik.values.agree} onClick={formik.handleChange} />
        {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
        
        
        <Button
          type='submit'>
          Send
        </Button>

      </form>

    </div>

  )

}
