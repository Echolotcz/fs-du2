import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons';

function Row({ item, handleRemoveItem, sessionUser , members, owner}) {

    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteItem = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (confirmDelete) {
            handleRemoveItem(item.itemId);
            setConfirmDelete(false);
        } else {
            setConfirmDelete(true);
        }
    };

    return (
        <li>
            <span className="itemQuantity">{item.quantity}</span>
            <span className="itemName">{item.name}</span>
            <span className="isResolved">
                {item.isResolved ?
                    <span style={{ color: 'green' }} title="Already purchased"><FontAwesomeIcon icon={faCheck} /></span> :
                    <span style={{ color: 'red' }} title="Not purchased">X</span>
                }
            </span>
            {(sessionUser === owner || members.includes(sessionUser)) && <button className="deleteButton" onClick={handleDeleteItem} title="Delete">x</button>}
            
            {confirmDelete && (
                <div className="confirmation">
                    <p>Are you sure you want to delete this item?</p>
                    <button onClick={() => setConfirmDelete(false)}>Cancel</button>
                    <button onClick={handleDeleteItem}>Confirm</button>
                </div>
            )}
        </li>
    );
}

export default Row;
