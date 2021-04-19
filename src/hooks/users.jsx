 import React, { Fragment, useEffect, useState } from 'react'
 import axios from 'axios';
 
 function Users(props) {
     // api call in class component using componentDidMount
     const [users, setUsers] = useState([])
     useEffect(() => {
     async function getUsers() {
         const result = await axios('http://jsonplaceholder.typicode.com/users')
         setUsers(result.data)
     }
     getUsers();
     });
    return(
        <Fragment>
            <div>
                <ul>
                    {users.map( user => <li key ={user.id}>{user.name}</li>  )}
                </ul>
            </div>
        </Fragment>
    )
 }
 export default Users;