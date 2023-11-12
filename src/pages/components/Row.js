function Row({item}) {
    return (
        <li>
            <span className="itemQuantity">{item.quantity}</span>
            <span className="itemName">{item.name}</span>
            <span className="isResolved">
                {item.isResolved ? "Vyreseno" : "Nevyreseno"}
            </span> 
        </li>
    );
}

export default Row;
