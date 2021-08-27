import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Users = () => {
    const [users, setUsersdata] = useState([]);
    useEffect(() => {
        loaduser()
    }, [])

    const loaduser = async () => {
        const URL = "https://reqres.in/api/users?page=2";
        await Axios.get(URL)
            .then(res => {
                console.log(res.data)
                setUsersdata([res.data])
            })
        console.log("user", users)
        console.log(typeof (users))
    }
    return (
        <>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(val => {
                        return <>
                            {val.data.map(val => {
                                return <>
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.email}</td>
                                        <td>{val.first_name}</td>
                                        <td>{val.last_name}</td>
                                        <td>{val.avatar}</td>
                                    </tr>
                                </>
                            })}
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item mt-5"><a class="page-link" href="#">pre</a></li>
                                    <li class="page-item mt-5 active"><a class="page-link" href="#">{val.page}</a></li>
                                    <li class="page-item mt-5"><a class="page-link" href="#">next</a></li>

                                </ul>
                            </nav>
                        </>

                    })}

                </tbody>





            </table>

        </>

    )
}

export default Users
