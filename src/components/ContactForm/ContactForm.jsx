import s from './ContactForm.module.css'
import { Field, Formik, Form, ErrorMessage} from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'

const ContactForm = ({onAdd}) => {
    const nameFildId = useId();
    const numberFildId = useId();
    const initialValues = {
        name: '',
        number: '',
    };

    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
        number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    })

    const handleSubmit = (values, actions) =>{
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        console.log(values);
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
        
            <Form>
                <div>
                    <label htmlFor={nameFildId}>Name</label>
                    <Field type='text' name='name' id={nameFildId} />
                    <ErrorMessage name='name' component='span' />
                </div>
                <div>
                    <label htmlFor={numberFildId}>Number</label>
                    <Field type='tel' name='number' />
                    <ErrorMessage name='number' component='span' />
                </div>
                <button type='submit'>Add contact</button>
            </Form>
        
            
        </Formik>
    )
}

export default ContactForm;