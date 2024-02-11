import Header from './components/Header/Header';
import Content from './components/Content';
import React, { useEffect, useState } from "react";
import { getShoppingLists, saveShoppingList , removeShoppingList} from './model/ShoppingListData';
import { getSessionUser } from './model/UserData';

function ShoppingList() {
    const [shoppingLists, setShoppingLists] = useState([]);
    const [sessionUser, setSessionUser] = useState('');

    useEffect(() => {
        setShoppingLists(
            getShoppingLists().then(lists => {
                setShoppingLists(lists);
                console.log(lists);
            })
        );
        setSessionUser(getSessionUser());
    }, []);

    const shoppingListFunctions = {
        handleAddList: (newListName) => {
            const lastId = shoppingLists.length > 0 ? shoppingLists[shoppingLists.length - 1]._id : 0;
            const newList = {
                _id: lastId + 1,
                ownerId: getSessionUser(),
                name: newListName,
                items: [],
                members: []
            };
            setShoppingLists(prevLists => [...prevLists, newList]);
            saveShoppingList(newList);
        },

        handleRemoveList: (listId) => {
            setShoppingLists(prevLists => prevLists.filter(list => list._id !== listId));
            removeShoppingList(listId);
        }
    };

    return (
        <div className="page">
            <Header shoppingListsFunctions={shoppingListFunctions} sessionUser={sessionUser} />
            {shoppingLists.length > 0 && (
                <Content shoppingLists={shoppingLists} removeList={shoppingListFunctions.handleRemoveList} sessionUser={sessionUser} />
            )}
        </div>
    );
}

export default ShoppingList;
