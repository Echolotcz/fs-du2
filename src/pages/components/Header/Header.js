import Logo from './Logo';
import Heading from './Heading';
import ButtonArea from './ButtonArea';

function Header(props) {
    const { list } = props;
    return (
        <div className="header">
            <Logo />
            <Heading name={list && list.name ? list.name : ''} />
            <ButtonArea />
        </div>
    );
}

export default Header;
