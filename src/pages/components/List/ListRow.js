import CompletionPieChart from '../Charts/CompletionPieChart';

function ListRow({ list }) {
    const completedItems = list.items.filter(item => item.isResolved).length;
    const totalItems = list.items.length;
    const completionStatus = `${completedItems} / ${totalItems}`;

    return (
        <li className="list-row">
            <div className="list-name">
                {list.name}
            </div>
            <div className="owner">{list.ownerId} (+{list.members.length} members)</div>
            <div className="status">
                <CompletionPieChart chartSize={30} completedItems={completedItems} totalItems={totalItems} chartTitle="" />
            </div>
        </li>
    );
}

export default ListRow;