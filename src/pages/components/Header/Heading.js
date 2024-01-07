function Heading(props) {
    const { name } = props;
    return (
        <div className="heading">
            <h1>{name !== "" ? <span>{name}</span> : "Shopping lists"}</h1>
        </div>
    );
}

export default Heading;
