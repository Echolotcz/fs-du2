function Heading({ name, owner , members}) {

    return (
        <div className="heading">
            <h1>{name !== "" ? <span>{name}</span> : "Shopping lists"}</h1>
            <div>{owner !== "" ? <span className="owner">Owner: {owner}</span> : ""} {owner !== "" ? <span >({members.join(", ")} can edit)</span> : ""}</div>
        </div>
    );
}

export default Heading;
