import React, {useState} from 'react';
import "../styles/contact.css";


export default function Contact(){
    const [form, setForm]= useState({
        // state
        fname:"",
        tel:"",
        email:"",
        comment:""

    });

    const handleSubmit = (event) => {
        console.log(form);
        
    }

    function handleChange(e){
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    
    
    return(
    <>
        <div>

        <h3 class="contact">Contact</h3>
    </div>


    <form onSubmit={handleSubmit}>
        <label for="fname">Full Name</label>
        <input onChange={handleChange} type="text" id="fname" value={form.fname} name="fname" placeholder="Full name" required />

        <label for="tel">Telephone</label>
        <input onChange={handleChange} type="tel" id="tel" value={form.tel}  name="tel" placeholder="Phone number" required />

        <label for="email">Email</label>
        <input onChange={handleChange} type="text" id="email" value={form.email} name="email" placeholder="Email" required />

        <label for="textarea">Comment</label>
        {/* disabled is what not allowing the user to submit  */}
        <textarea onChange={handleChange} id="textarea" value={form.comment}  name="comment" />
        <input class="submit" type="submit" value="Submit" disabled={!form.comment || !form.fname || !form.tel || !form.email} />
    </form>

    </>
    )
}








