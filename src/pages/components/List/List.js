import React from 'react';
import ListRow from './ListRow';
import { Link } from 'react-router-dom';

function List({ shoppingLists, removeList, sessionUser }) {
    if (shoppingLists.length === 0) {
        return <div>No shopping lists available.</div>;
    }

    return (
        <ul className="list">
            {shoppingLists.map(list => (
                <Link key={list._id} to={`/detail/${list._id}`}>
                    <ListRow key={list._id} list={list} removeList={removeList} sessionUser={sessionUser} />
                </Link>
            ))}
        </ul>
    );
}

export default List;