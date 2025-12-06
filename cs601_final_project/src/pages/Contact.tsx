import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import style from '../style/Form.module.css'
import GHLogo from '../media/github-mark.svg';
import  LILogo from '../media/LinkedIn_icon.svg';

type Inputs = {
  name: string,
  email: string,
  message: string,
  reason: string,
  urgent: boolean,
  favorite: string,
}

function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({defaultValues: {favorite: "other"}})

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setSubmitted(true)
    }


    const[submitted, setSubmitted] = useState(false)


    const form = () => {
        return (                
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input className={style.formElementWidth} id="name" type="text" autoComplete='true'
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
                        <input className={style.formElementWidth} id="email" type="email" autoComplete='true'
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
                        <textarea className={style.formElementWidth} id="message" rows={5} 
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
                    <div>
                        <label htmlFor='reason'>Reason</label>
                            <select  className={style.formElementWidth} id="reason"
                                {
                                    ...register(
                                        "reason",
                                        {
                                                required: "Reason must be included",
                                                pattern: 
                                                {
                                                    value: /^work|Pathfinder|chat$/i,
                                                    message: "Must be one of the listed reasons"
                                                } 
                                        }
                                    )
                                }
                            >
                                    <option value="work">Work</option>
                                    <option value="Pathfinder">Pathfinder</option>
                                    <option value="chat">Chat</option>
                            </select>
                        {errors.reason && <p className={style.error}>{errors.reason?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='urgent'>Urgent</label>
                        <div className={`${style.formElementWidth} ${style.checkboxContainer}`} id={style.urgent}>
                            <input type='checkbox' id="urgent"
                                {
                                    ...register(
                                        "urgent"
                                    ) 
                                }
                            />
                        </div>
                        {errors.urgent && <p className={style.error}>{errors.urgent?.message}</p>}
                    </div>
                    <div>
                        <fieldset>
                            <legend>What is your favorite animal?</legend>

                            <label htmlFor='dog'>Dog</label>
                            <div className={style.formElementWidth} >
                                <input type='radio' value="dog" id="dog"
                                    {
                                        ...register(
                                            "favorite"
                                        ) 
                                    }
                                />
                            </div>
                             <label htmlFor='cat'>Cat</label>
                            <div className={style.formElementWidth}>
                                <input type='radio' value="cat" id="cat"
                                    {
                                        ...register(
                                            "favorite"
                                        ) 
                                    }
                                />
                            </div>
                             <label htmlFor='spider'>Spider</label>
                            <div className={style.formElementWidth}>
                                <input type='radio' value="spider" id="spider"
                                    {
                                        ...register(
                                            "favorite"
                                        ) 
                                    }
                                />
                            </div>
                            <label htmlFor='other'>Other</label>
                            <div className={style.formElementWidth}>
                                <input type='radio' value="other" id="other"
                                    {
                                        ...register(
                                            "favorite"
                                        ) 
                                    }
                                />
                            </div>
                            {errors.favorite && <p className={style.error}>{errors.favorite?.message}</p>}
                        </fieldset>
                    </div>
                    <button  type="submit" >Submit</button>
                </form>
        )
    }


    return (
        <div className={style.formRoot}>
            <h2>Contact David</h2>
            <address>
                You can find David Metraux at the following locations:
                <ul className={style.links}>
                    <li><img src={LILogo} height={100} alt='linkedin logo'/><a href='https://www.linkedin.com/in/david-metraux-a46559120/' target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li><img src={GHLogo} height={100} alt='github logo'/><a href='https://github.com/davidmetraux' target='_blank' rel="noreferrer">Github</a></li>
                </ul>
            </address>
            {submitted ? 
                <div className={style.response}>
                    <p>Thank you, {watch().name}, for your message with the reason of {watch().reason}:</p>
                    <p>{watch().message}</p>
                    <p>We will get back to you at {watch().email} {watch().urgent ? "immediately, since it's urgent" : "shortly"}. {watch().favorite !== "other" && `Hopefully with a ${watch().favorite}.`}</p>
                </div>
                : 
                <><p>Or can otherwise contact him here:</p> <section><h3>Contact Form</h3>{form()}</section></>}
        </div>

    )
}

export default Contact