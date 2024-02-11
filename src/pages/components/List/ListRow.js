import CompletionPieChart from '../Charts/CompletionPieChart';
import React, { useState } from 'react';

function ListRow({ list, removeList, sessionUser }) {
    const completedItems = list.items.length > 0 ? list.items.filter(item => item.isResolved).length : 0;
    const totalItems = list.items.length;
    const completionStatus = `${completedItems} / ${totalItems}`;
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteList = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (confirmDelete) {
            removeList(list._id);
            setConfirmDelete(false);
        } else {
            setConfirmDelete(true);
        }
    };

    return (
        <li className="list-row">
            <div className="list-name">
                {list.name} {list.archived ? "(Archived)" : ""}
            </div>
            <div className="owner">{list.ownerId} (+{list.members.length} members)</div>
            <div className="status">
                <CompletionPieChart chartSize={30} completedItems={completedItems} totalItems={totalItems} chartTitle="" />
            </div>

            {sessionUser === list.ownerId && <button
                className="deleteButton"
                onClick={handleDeleteList}
                title="Delete"
            >x</button>}
            {sessionUser !== list.ownerId && <div></div>}
            {confirmDelete && sessionUser == list.ownerId && (
                <div className="confirmation">
                    <p>Are you sure you want to delete this list?</p>
                    <button onClick={(event) => {
                        setConfirmDelete(false);
                        event.preventDefault();
                        event.stopPropagation();
                    }}>Cancel</button>
                    <button onClick={handleDeleteList}>Confirm</button>
                </div>
            )}
        </li>
    );
}

export default ListRow;
