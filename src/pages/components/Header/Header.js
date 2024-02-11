import Logo from './Logo';
import Heading from './Heading';
import ButtonArea from './ButtonArea';

function Header({ list, shoppingListsFunctions, sessionUser }) {
    return (
        <div className="header">
            <Logo />
            <Heading name={list && list.name ? list.name : ''} owner={list && list.ownerId ? list.ownerId : ''} members={list && list.members ? list.members : ''} />
            <ButtonArea sessionUser={sessionUser} list={list} shoppingListsFunctions={shoppingListsFunctions} />
        </div>
    );
}

export default Header;
