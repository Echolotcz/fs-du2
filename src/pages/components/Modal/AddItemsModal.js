import React, { useState } from 'react';
import Modal from './Modal';

function AddItemsModal({ onClose, onCreate }) {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddItem = () => {
        onCreate(itemName, quantity);
        console.log('Adding item to list Item:', itemName, 'Quantity:', quantity);
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <h2>Add Item to List</h2>
            <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Enter item name" />
            <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Enter quantity" />
            <button onClick={handleAddItem}>Add Item</button>
        </Modal>
    );
}

export default AddItemsModal;