
import PropTypes from 'prop-types';
import { useState } from 'react';
function ContactForm ({onSubmitData}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    if (event.target.name === 'name') {
        setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
    
    }


    const handleSubmit = event => {
        event.preventDefault();

        const contactData = {
          name,
          number
        };

        onSubmitData(contactData);
      setName('')
      setNumber('')
    }



    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  
  }
ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired
};
export default ContactForm