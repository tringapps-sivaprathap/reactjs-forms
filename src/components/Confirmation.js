const Confirmation = ({ data }) => {
    return (
        <div className="confirmation">
            <h1>Confirmation</h1>
            <p><b>Username:</b> &nbsp;{data.username}</p>
            <p><b>Password:</b> &nbsp;{data.password}</p>
            <p><b>Date of Birth:</b> &nbsp;{data.dob}</p>
            <p><b>Age:</b> &nbsp;{data.age}</p>
            <p><b>Phone Number:</b> &nbsp;{data.phno}</p>
        </div>
    );
}

export default Confirmation;