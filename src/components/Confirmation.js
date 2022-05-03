const Confirmation = ({data}) => {
    return (
        <div className="confirmation">
            <h1>Confirmation</h1>
            <p><b>Username:</b> {data.username}</p>
            <p><b>Password:</b> {data.password}</p>
            <p><b>Age:</b> {data.age}</p>
        </div>
    )
}

export default Confirmation