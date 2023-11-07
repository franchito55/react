export function UserRow({ idx, name, lastName, email, phoneNumber, country }) {

    let rowClass = "user-info-row"
    if (idx !== 99) {
        rowClass += " hasBottomBorder"
    }

    return(
        <div className={rowClass}>
            <div className="user-info-column hasRightBorder column-name">
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
            <div className="user-info-column column-country">
                <span>{country}</span>
            </div>
        </div>
    )
}