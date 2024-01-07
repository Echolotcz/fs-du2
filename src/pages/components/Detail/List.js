import { ListBox } from 'primereact/listbox';
import Row from './Row';

function List(props) {

    const { list } = props;


    return (
        <ul className="list">
            {list.items.map(item => (
                <Row key={item.itemId} item={item} />
            ))}
        </ul>
    );
}

export default List;
