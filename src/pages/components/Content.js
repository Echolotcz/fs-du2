import List from './List/List';

function Content({ shoppingLists }) {
    return (
        <div className="content">
            <List className="list" shoppingLists={shoppingLists} />
        </div>
    );
}

export default Content;