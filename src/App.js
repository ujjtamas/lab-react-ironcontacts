import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import contactsData from './contacts.json';

function App() {
const [contacts, setContacts] = useState(contactsData);
let subContacts = contacts.slice(0,5)
contacts.splice(0,5);

const addRandom = () =>{
      let randomIndex = Math.floor(Math.random()*contacts.length);
      subContacts.push(contacts[randomIndex]);
      contacts.splice(randomIndex,1);
      console.log(subContacts);

      setContacts(contacts);
}

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
            {
              subContacts.map((contact, index) => {
                  return (
                    <tr>
                      <td><img src={contact.pictureUrl} width="80" alt="Contact picture" /></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity}</td>
                      <td>{contact.wonOscar ? '🏆' : ''}</td>
                      <td>{contact.wonEmmy ? '🏆' : ''}</td>
                    </tr>)
              })
            }
          
        </table>
    </div>
  );
}

export default App;
