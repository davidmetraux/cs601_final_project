import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import style from '../style/Form.module.css'


type Inputs = {
  name: string,
  email: string,
  message: string
}

function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setSubmitted(true)
    }


    const[submitted, setSubmitted] = useState(false)


    const form = () => {
        return (                
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input id={style.name} type="text" 
                            {
                                ...register(
                                    "name",
                                    {
                                        required:"Name is required",
                                        pattern: 
                                            { 
                                                value:/^[a-z\s]+$/i,
                                                message:"Name must use English alphabet"
                                            },
                                        minLength: 
                                            {
                                                value: 2,
                                                message: "Must be two or more characters"
                                            }   
                                    }
                                )
                            }
                        />
                         {errors.name && <p className={style.error}>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id={style.email} type="email" 
                            {
                                ...register(
                                    "email",
                                    {   
                                        required:"Email is required",
                                        pattern: 
                                            {
                                                value: /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d]))*$/i,
                                                message: "Must be valid email address"
                                            } 
                                    }
                                ) 
                            }
                        />
                        {errors.email && <p className={style.error}>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea id={style.message} rows={5} 
                            {
                                ...register(
                                    "message",
                                        {
                                            required: "Message must be included",
                                            minLength: 
                                                { 
                                                    value: 10,
                                                    message: "Must be ten or more characters"
                                                },
                                            maxLength:
                                                { 
                                                    value: 230,
                                                    message: "Must be less than or equal to 230 characters"
                                                }
                                        }
                                )
                            }
                        />
                        {errors.message && <p className={style.error}>{errors.message?.message}</p>}
                    </div>
                    <button type="submit" >Submit</button>
                </form>
        )
    }


    return (
        <div className={style.formRoot}>
            <h2>Contact David</h2>
            <div>
                You can find David Metraux at the following locations:
                <ul className={style.links}>
                    <li><a href='https://www.linkedin.com/in/david-metraux-a46559120/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li><a href='https://github.com/davidmetraux' target='_blank' rel="noreferrer">Github</a></li>
                </ul>
            </div>
            {submitted ? 
                <div className={style.response}>
                    <p>Thank you, {watch().name}, for your message:</p>
                    <p>{watch().message}</p>
                    <p>We will get back to you at {watch().email} shortly.</p>
                </div>
                : 
                <><p>Or can otherwise contact him here:</p> {form()}</>}
        </div>

    )
}

export default Contact