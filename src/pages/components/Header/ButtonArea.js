import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NewShoppingListModal from '../Modal/NewShoppingListModal';
import AccessModal from '../Modal/AccessModal';
import AddItemsModal from '../Modal/AddItemsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';


function ButtonArea({ list, shoppingListsFunctions, sessionUser }) {
    const [showModal, setShowModal] = useState(false);
    const [locationPathname, setLocationPathname] = useState(window.location.pathname);
    const [showAccessModal, setShowAccessModal] = useState(false);

    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShowModal(false);
    };

    window.addEventListener('popstate', () => {
        setLocationPathname(window.location.pathname);
    });

    const handleRedirectToRoot = () => {
        navigate('/');
    };

    let modalComponent;
    if (locationPathname.startsWith('/detail/')) {
        const id = locationPathname.split('/detail/')[1];

        modalComponent = <AddItemsModal onCreate={list.handleAddItem} onClose={handleCloseModal} id={id} />;
    } else {
        modalComponent = <NewShoppingListModal onCreate={shoppingListsFunctions.handleAddList} onClose={handleCloseModal} />;
    }
    return (
        <div className="buttonArea">
            {locationPathname.startsWith('/detail/') && (
                <button onClick={handleRedirectToRoot}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            )}
            {locationPathname.startsWith('/detail/') && (sessionUser === list.ownerId || list.members.includes(sessionUser)) &&
                <button onClick={() => setShowModal(true)}>+</button>}

            {!locationPathname.startsWith('/detail/') && <button onClick={() => setShowModal(true)}>+</button>}
            {showModal && modalComponent}
            {list && (sessionUser === list.ownerId || list.members.includes(sessionUser)) && locationPathname.startsWith('/detail/') && 
                <button onClick={() => setShowAccessModal(true)}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            }
            {showAccessModal && <AccessModal users={list.members} handleAddMember={list.handleAddMember} handleRemoveMember={list.handleRemoveMember} onClose={() => setShowAccessModal(false)} />}
            <div>Logged as {sessionUser}</div>
        </div>
    );
}

export default ButtonArea;