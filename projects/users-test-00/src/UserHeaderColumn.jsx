export function UserHeaderColumn({ children, hasRightBorder = false, column, filterUsers }) {
    let tableHeaderColumnClass = hasRightBorder ? "table-header-column hasRightBorder" : "table-header-column"
    tableHeaderColumnClass += ' ' + column

    const handleChange = () => {
        filterUsers(document.getElementById("filterInput" + column).value)
    }

    return(
        <div className={tableHeaderColumnClass}>
            <span className="table-header-column-span">{children}</span>
            <div className="filterRow">
                <input id={"filterInput" + column} className="filterInput" placeholder={children + '...'} onChange={handleChange}></input>
            </div>
        </div>
    )
}