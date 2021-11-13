import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        console.log(token)

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

    }
    return (
        <div className="my-5">
            <h2>Make an Admin</h2>

            <div >
                <form class="input-group mb-3" onSubmit={handleAdminSubmit}>
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onBlur={handleOnBlur} />
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Make Admin</button>
                </form>
            </div>


            {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
        </div>
    );
};

export default MakeAdmin;