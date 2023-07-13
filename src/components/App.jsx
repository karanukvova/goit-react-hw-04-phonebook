import  { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './contactList/contactList';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
export function App () {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');




  const formSubmitHandler = data => {
    repeatControl(data);
  };

  const repeatControl = data => {
    let nameArray = [];
    nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      return setContacts(arrayCont );
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };

  const elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  const deleteContactFromContactList = idContact => {
    let newArrAfterDel = elementDelete(contacts, idContact);
    setContacts(newArrAfterDel);
  };

  const setFilterToState = filterData => {
    setFilter(filterData);
  };

  const filterArr = fArr => {
    let newArr = []
    if (filter === '') {
      newArr = fArr
    }else {newArr = fArr.filter(cur => cur.name.toUpperCase().includes(filter));}
    
    return newArr;
  };
    
  useEffect(() => {
      const stringifiedContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    
  }, [contacts]);

  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={setFilterToState} />
        <ContactList
          contacts={filterArr(contacts)}
          del={deleteContactFromContactList}
        />
      </div>
    );
  
  }
