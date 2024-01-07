import ListRow from './ListRow';
import { Link } from 'react-router-dom';

function List({ shoppingLists }) {
  return (
    <ul className="list">
      {shoppingLists.map(list => (
          <Link to={`/detail/${list._id}`}>
              <ListRow key={list._id} list={list} />
          </Link>
      ))}
    </ul>
  );
}

export default List;