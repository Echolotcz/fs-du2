function Heading(props) {
    const { name } = props;
    return (
        <div className="heading">
            <h1>Shopping list - {name !== null && (<span>{name}</span>)}</h1>
        </div>
    );
}

export default Heading;
