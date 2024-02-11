import React, { useState } from 'react';
import Modal from './Modal';

function AccessModal({ users, onClose, handleAddMember, handleRemoveMember }) {
    const [newUserName, setNewUserName] = useState('');
    const [newUserList, setNewUserList] = useState(users);

    const handleAddUser = () => {
        if (newUserName) {
            handleAddMember(newUserName);
            const newUser = newUserName;
            setNewUserList(prevUsers => [...prevUsers, newUser]);
            setNewUserName('');
        }
    };

    const handleDeleteUser = (userToDelete) => {
        handleRemoveMember(userToDelete);
        setNewUserList(prevUsers => prevUsers.filter(user => user !== userToDelete));
    };

    return (
        <Modal onClose={onClose}>
            <h2>User Access List</h2>
            <ul>
                {newUserList.map((user, index) => (
                    <li key={index}>
                        {user}
                        <button className="deleteButton" onClick={() => handleDeleteUser(user)}>x</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newUserName} onChange={e => setNewUserName(e.target.value)} placeholder="Enter user name" />
            <button onClick={handleAddUser}>Add User</button>
        </Modal>
    );
}

export default AccessModal;
