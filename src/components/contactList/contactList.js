
import PropTypes from 'prop-types';
function ContactList ({contacts,del}) {
  const deleteId = Id => {
    del(Id);
  };
  const createList = () => {
    return contacts.map(contact => {
      return (
        <li key={contact.id} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button
            data-id={contact.id}
            onClick={() => deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };


    return <ul>{createList()}</ul>;
  
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactList;