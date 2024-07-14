import PropTypes from 'prop-types'
function Card(props) {
    return (
        <div className="card">
            <h1><small>{props.id}</small>.{props.name}</h1>
            <h3>{props.isStudent ? "Student" : "Not Student"}</h3>
            <p>{props.desc}</p>

        </div>
    );
}

Card.PropTypes ={
    id: PropTypes.number,
    name:PropTypes.string,
    isStudent: PropTypes.bool
}


Card.defaultProps ={
    id: 0,
    name:"Unknown",
    desc:"Null",
    isStudent: false
}

export default Card