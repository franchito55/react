export function UserHeaderColumn({ children, hasRightBorder = false, column }) {
    let tableHeaderColumnClass = hasRightBorder ? "table-header-column hasRightBorder" : "table-header-column"
    tableHeaderColumnClass += ' ' + column
    return(
        <div className={tableHeaderColumnClass}>
            <span className="table-header-column-span">{children}</span>
        </div>
    )
}