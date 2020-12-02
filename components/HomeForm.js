import React, {useState} from 'react';
import Container from './Container';
import style from './form.module.css';

const styles = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px',
        
}

const input = {
     marginTop: 5,
     padding: 8,
}

export default function HomeForm(){

    const [contact, setContact] = useState({
        fullname: '',
        email: '',
        date: '',
        message: '',
        subject: 'Potential Client',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: 'you-access-key' // get your access key from https://www.staticforms.xyz
      });

      const [response, setResponse] = useState({
        type: '',
        message: ''
      });

      const handleChange = e =>
      setContact({ ...contact, [e.target.name]: e.target.value });

      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const json = await res.json();
    
          if (json.success) {
            setResponse({
              type: 'success',
              message: 'Thank you for reaching out to us.'
            });
          } else {
            setResponse({
              type: 'error',
              message: json.message
            });
          }
        } catch (e) {
          console.log('An error occurred', e);
          setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
          });
        }
      };

    
    return(
        <section className="contact">      
            <Container>
              <div className="container contact_box">
                <h1 style={{ textAlign: 'center'}}>Let's Seek Justice</h1>
                  <form className={style.form}
                //   action='https://api.staticforms.xyz/submit'
                  method='post'
                  onSubmit={handleSubmit}>
                      <div style={styles}>
                        <label htmlFor="fullname">Name</label>
                        <input type='text' name='fullname' id="name" style={input}
                            onChange={handleChange}
                            required
                        />
                      </div>

                      <div style={styles}> 
                        <label htmlFor="fullname">Email</label>
                        <input type='text' name='email' id="email" style={input}
                        onChange={handleChange}
                        required
                        />
                      </div>

                      <div style={styles}>
                        <label htmlFor="date">Date Incident Occured:</label>
                        <input type='text' name='date' id='date' style={input}
                        onChange={handleChange}
                        required/>
                      </div>

                      <div style={styles}>
                        <label htmlFor='message'>Message:</label>
                        <textarea rows="4" cols="50" name="message" form="message" id='message' 
                            placeholder='A quick message on what happened...' 
                            onChange={handleChange}
                            required/>
                      </div>
                      
                      <input type='submit' text='Send' style={{ border:'none', color:'white', background:'#12343b', padding: 15, borderRadius: 5}}/>
                  </form>
              </div>
            </Container>       
      </section>
    )
}