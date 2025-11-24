import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import '../style/Form.css'


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

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    const[submitted, setSubmitted] = useState(false)

    const nameValidator = (name: string) => { 
        return (name.length) >= 2 && /^[A-Za-z]+$/.test(name)
    }

    const emailValidator = (email: string) => {
        return /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d]))*$/i.test(email)
    }


    // const form = () => {
    //     return (                
    //             <form noValidate>
    //                 <div>
    //                     <label htmlFor='name'>Name</label>
    //                     <input name="name" id="name" type="text"></input>
    //                     <p className="error"></p>
    //                 </div>
    //                 <div>
    //                     <label htmlFor='email'>Email</label>
    //                     <input name="email" id="email" type="email"></input>
    //                     <p className="error"></p>
    //                 </div>
    //                 <div>
    //                     <label htmlFor='message'>Message</label>
    //                     <textarea name="message" id="message" rows={5}></textarea>
    //                     <p className="error"></p>
    //                 </div>
    //                 <button> Submit </button>
    //             </form>
    //     )
    // }
    const form = () => {
        return (                
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input id="name" type="text" 
                            {
                                ...register(
                                    "name",
                                    {
                                        required:true,
                                        pattern: /^[A-Za-z]+$/,
                                        min: 2
                                    }
                                )
                            }
                        />
                        <span className="error"></span>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id="email" type="email" 
                            {
                                ...register(
                                    "email",
                                    {   
                                        required:true,
                                        pattern: /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d]))*$/i
                                    }
                                ) 
                            }
                        />
                        <p className="error"></p>
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea id="message" rows={5} 
                            {
                                ...register(
                                    "message",
                                    {
                                        required: true,
                                        min:10,
                                        max: 100
                                    }
                                )
                            }
                        />
                        <p className="error"></p>
                    </div>
                    <button  type="submit"> Submit </button>
                </form>
        )
    }


    return (
        <div className='formRoot'>
            <h2>Contact David</h2>
            {submitted ? <div>Thank you for your message.</div> : form()}
        </div>

    )
}

export default Contact