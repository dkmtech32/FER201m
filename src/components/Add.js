import React, { useState } from 'react'
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Switch, Button, Typography, FormGroup, Dialog, DialogTitle, DialogContent, DialogContentText, Alert, AlertTitle, DialogActions } from '@mui/material';
import * as Yup from 'yup';
import { Link, NavLink } from 'react-router-dom';
export default function Add() {
    const baseUrl = `https://64901b431e6aa71680ca9595.mockapi.io/film`;
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            nation: "",
            year: "",
            img: "",
            description: "",
            director: "",
            cast: [],
            genre: [],
            duration: "",
            clip: "",
            agree: false,

        },

        onSubmit: (values) => {
            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(values), headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
                .then(data => setOpen(true))
                .catch(error => console.log(error.message));
        },

        //Convert to JSON string and show in alert box.


        validationSchema: Yup.object({
            title: Yup.string().required("Required."),
            nation: Yup.string().required("Required."),
            year: Yup.date().max(new Date().getFullYear(), "Must be lower than current year"),
            img: Yup.string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}/,
                    'Enter correct url!')
                .required('Please enter image link'),
            description: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            director: Yup.string().required("Required."),
            cast: Yup.string().required("Required."),
            genre: Yup.string().required("Required."),
            duration: Yup.string().required("Required."),
            clip: Yup.string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}/,
                    'Enter correct url!')
                .required('Please enter image link'),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),

        }),

    });
    return (
        <><div class="container">
            <NavLink to={`/dashboard`}><button className='btn-primary'>Back to dashboard</button></NavLink>
            <form onSubmit={formik.handleSubmit} id="contact-form">
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                sx={{ div: { backgroundColor: '#ffd18c' } }}
                                fullWidth
                                id="title"
                                name="title"
                                label="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                sx={{ div: { backgroundColor: '#ffd18c' } }}
                                fullWidth
                                id="nation"
                                name="nation"
                                label="Nation"
                                value={formik.values.nation}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nation && Boolean(formik.errors.nation)}
                                helperText={formik.touched.nation && formik.errors.nation} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                sx={{ div: { backgroundColor: '#ffd18c' } }}
                                fullWidth
                                id="year"
                                name="year"
                                label="Year"
                                type="number"
                                value={formik.values.year}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.year && Boolean(formik.errors.year)}
                                helperText={formik.touched.year && formik.errors.year} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="img"
                                name="img"
                                label="Image"
                                value={formik.values.img}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.img && Boolean(formik.errors.img)}
                                helperText={formik.touched.img && formik.errors.img} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description ? formik.errors.description : null} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="director"
                                name="director"
                                label="Director"
                                type="text"
                                value={formik.values.director}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.director && Boolean(formik.errors.director)}
                                helperText={formik.touched.director && formik.errors.director ? formik.errors.director : null} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="cast"
                                name="cast"
                                label="Cast"
                                type="text"
                                value={formik.values.cast}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cast && Boolean(formik.errors.cast)}
                                helperText={formik.touched.cast && formik.errors.cast ? formik.errors.cast : null} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="genre"
                                name="genre"
                                label="Genre"
                                type="text"
                                value={formik.values.genre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.genre && Boolean(formik.errors.genre)}
                                helperText={formik.touched.genre && formik.errors.genre ? formik.errors.genre : null} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="duration"
                                name="duration"
                                label="Duration"
                                type="text"
                                value={formik.values.duration}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.duration && Boolean(formik.errors.duration)}
                                helperText={formik.touched.duration && formik.errors.duration ? formik.errors.duration : null} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form">
                            <TextField
                                fullWidth
                                id="clip"
                                name="clip"
                                label="Video Clip"
                                type="text"
                                value={formik.values.clip}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.clip && Boolean(formik.errors.clip)}
                                helperText={formik.touched.clip && formik.errors.clip ? formik.errors.clip : null} />
                        </div>
                    </div>
                </div>

                <FormControlLabel control={<div class="switch">
                    <label>
                        <input type="checkbox" name='agree' value={formik.values.agree} onClick={formik.handleChange} />
                        <span class="lever"></span>
                        Agree to terms and conditions.
                    </label>
                </div>}
                    value={formik.values.agree} onClick={formik.handleChange} />
                {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}

                <button type="submit">Submit</button>
            </form>
        </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


        </>

    )
}
