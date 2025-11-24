import '../style/Form.css'


function Contact(){

    const form = () => {
        return (
            <div className='formRoot'>
                <h2>Contact David</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text"></input>
                        <p className="error"></p>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"></input>
                        <p className="error"></p>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea rows={5}></textarea>
                        <p className="error"></p>
                    </div>
                    <button> Submit </button>
                </form>
            </div>
        )
    }


    return (
       <>{form()}</>
    )
}

export default Contact