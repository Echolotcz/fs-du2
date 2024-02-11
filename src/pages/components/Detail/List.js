import { ListBox } from 'primereact/listbox';
import Row from './Row';

function List({ list , sessionUser}) {

    return (
        <ul className="list">
            {list.items.map(item => (
                <Row key={item.itemId} item={item} handleRemoveItem={list.handleRemoveItem} sessionUser={sessionUser} owner={list.ownerId} members={list.members} />
            ))}
        </ul>
    );
}

export default List;
