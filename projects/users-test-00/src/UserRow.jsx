export function UserRow({ idx, name, lastName, email, phoneNumber, country, deleteUser }) {

    let rowClass = "user-info-row"
    if (idx !== 99) {
        rowClass += " hasBottomBorder"
    }

    const handleDeleteUser = (() => {
        deleteUser(idx)
    })

    return(
        <div className={rowClass}>
            <div className="user-info-column hasLeftBorder hasRightBorder column-name">
                <span>{name}</span>
            </div>
            <div className="user-info-column hasRightBorder column-lastName">
                <span>{lastName}</span>
            </div>
            <div className="user-info-column hasRightBorder column-email">
                <span>{email}</span>
            </div>
            <div className="user-info-column hasRightBorder column-phoneNumber">
                <span>{phoneNumber}</span>
            </div>
            <div className="user-info-column hasRightBorder column-country">
                <span>{country}</span>
            </div>
            <div className="user-info-column hasRightBorder column-delete">
                <button className="delete-user-button" onClick={handleDeleteUser}>Delete</button>
            </div>
        </div>
    )
}