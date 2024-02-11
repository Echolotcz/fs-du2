import React, { useState } from 'react';
import Modal from './Modal';

function NewShoppingListModal({ onClose, onCreate }) {
    const [name, setName] = useState('');

    const handleCreateList = () => {
        console.log('Creating new shopping list with name:', name);
        onCreate(name);
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <h2>Create New Shopping List</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
            <button onClick={handleCreateList}>Create List</button>
        </Modal>
    );
}

export default NewShoppingListModal;