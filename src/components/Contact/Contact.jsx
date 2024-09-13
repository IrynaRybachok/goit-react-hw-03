const Contact = ({ data:{id, name, number}, onDelete}) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact;