import React, { useState } from 'react';
import List from './List/List';

function Content({ shoppingLists, removeList, sessionUser }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const filteredShoppingLists = isChecked ? shoppingLists : shoppingLists.filter(list => !list.archived);

    return (
        <div className="content">
            <List className="list" shoppingLists={filteredShoppingLists} removeList={removeList} sessionUser={sessionUser} />
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label>Include archived lists</label>
            </div>
        </div>
    );
}

export default Content;
