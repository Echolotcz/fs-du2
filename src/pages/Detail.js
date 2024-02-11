import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getShoppingLists, saveItem, removeItem,saveMember, removeMember } from './model/ShoppingListData';
import { getSessionUser } from './model/UserData';
import Header from './components/Header/Header';
import List from './components/Detail/List';
import CompletionPieChart from './components/Charts/CompletionPieChart';

function Detail() {
    const { id } = useParams();
    const [shoppingLists, setShoppingLists] = useState([]);
    const [sessionUser, setSessionUser] = useState(getSessionUser());
    const [list, setList] = useState(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        setShoppingLists(
            getShoppingLists().then(lists => {
                setShoppingLists(lists);
            })
        );
        setSessionUser(getSessionUser());

    }, [id, sessionUser]);

    useEffect(() => {
        if (shoppingLists.length > 0) {
            const foundList = shoppingLists.find(list => list._id == id);
            setList(foundList); 
            setMembers(foundList ? foundList.members : []); 
        }
    }, [id, shoppingLists]);

    if (!list) { return; }

    list.handleAddItem = (itemName, itemQuantity) => {
        if (itemName && itemQuantity) {
            const newItem = {
                itemId: list.items.length + 1,
                name: itemName,
                quantity: itemQuantity,
                isResolved: false
            };
            const updatedItems = [...list.items, newItem];
            const updatedList = { ...list, items: updatedItems };
            const updatedShoppingLists = shoppingLists.map(item => item._id === updatedList._id ? updatedList : item);
            setShoppingLists(updatedShoppingLists);
            saveItem(list._id,newItem);
        }
    };

    list.handleRemoveItem = (itemId) => {
        const updatedItems = list.items.filter(item => item.itemId !== itemId);
        const updatedList = { ...list, items: updatedItems };
        const updatedShoppingLists = shoppingLists.map(item => item._id === updatedList._id ? updatedList : item);
        setShoppingLists(updatedShoppingLists);
        removeItem(list._id, itemId);
    };

    list.handleAddMember = (newMemberName) => {
        if (newMemberName) {
            const updatedMembers = [...list.members, newMemberName];
            const updatedList = { ...list, members: updatedMembers };
            const updatedShoppingLists = shoppingLists.map(item => item._id === updatedList._id ? updatedList : item);
            setShoppingLists(updatedShoppingLists);
            setMembers(updatedMembers);
            saveMember(list._id, newMemberName);
        }
    };

    list.handleRemoveMember = (member) => {
        const updatedMembers = list.members.filter(m => m !== member);
        const updatedList = { ...list, members: updatedMembers };
        const updatedShoppingLists = shoppingLists.map(item => item._id === updatedList._id ? updatedList : item);
        setShoppingLists(updatedShoppingLists);
        setMembers(updatedMembers);
        removeMember(list._id,member);
    };

    shoppingLists.functions = {
        handleAddList: (listName) => {
            const newList = {
                _id: shoppingLists.length + 1,
                ownerId: sessionUser,
                name: listName,
                items: [],
                members: []
            };
            shoppingLists.push(newList);
        },

        handleRemoveList: (listId) => {
            const updatedLists = shoppingLists.filter(list => list._id !== listId);
            shoppingLists = updatedLists;
        }
    };

    const completedItems = list.items.filter(item => item.isResolved).length;
    const totalItems = list.items.length;
    const chartSize = 300;
    return (
        <div className="page">
            <Header list={list} shoppingListsFunctions={shoppingLists.functions} sessionUser={sessionUser} />
            <div className="detail content">
                <CompletionPieChart chartTitle="Completion" chartSize={chartSize} completedItems={completedItems} totalItems={totalItems} />
                {shoppingLists.length > 0 && (
                    <List list={list} sessionUser={sessionUser} />
                )}
            </div>
        </div>
    );
}

export default Detail;
