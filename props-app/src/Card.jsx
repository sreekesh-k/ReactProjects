
function Card(props) {
    return (
        <div className="card">
            <h1><small>{props.id}</small>.{props.name}</h1>
            <h3>{props.isStudent ? "Student":"Not Student"}</h3>
            <p>{props.desc}</p>

        </div>
    );
}
export default Card