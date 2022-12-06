import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
    email: yup.string().min(8).required("enter email"),
    password: yup.string().min(4).required("enter password")
});

export function BasicForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: movieValidationSchema,
        onSubmit: (values) => {
            console.log("Submited", values);
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Basic Form</h1>
            <input
                type="email"
                value={formik.values.email}
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
            <input
                type="text"
                value={formik.values.password}
                placeholder="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            <button type="submit">Submit</button>
        </form>
    );
}
