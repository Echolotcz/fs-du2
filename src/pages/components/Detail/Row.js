function Row({item}) {
    return (
        <li>
            <span className="itemQuantity">{item.quantity}</span>
            <span className="itemName">{item.name}</span>
            <span className="isResolved">
                {item.isResolved ?
                    <span style={{ color: 'green' }}>✓</span> :
                    <span style={{ color: 'red' }}>X</span>
                }
            </span> 
        </li>
    );
}

export default Row;
