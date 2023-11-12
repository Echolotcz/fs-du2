import { Link } from 'react-router-dom';
import Header from './components/Header';

function List() {

    return (
        <div className="page">
            <Header />
            <Link to="/detail/1">Zobrazit list 1</Link>
        </div>
    );
}

export default List;
