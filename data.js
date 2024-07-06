const flexbox = {
    "display: flex" : "flex",
    "flex-direction: column" : "flex-col",
    "flex-direction: row" : "flex-row",
    "flex-wrap: wrap" : "flex-wrap",
    "flex-wrap: nowrap" : "flex-nowrap",
    "flex-grow: 1" : "flex-grow",
    "flex-grow: 0" : "flex-grow-0",
    "flex-shrink: 1" : "flex-shrink",
    "flex-shrink: 0" : "flex-shrink-0",
    "order: -9999" : "order.first",
    "order: 9999" : "order.last",
    "order: 1" : "order-1"
}

const display = {
    "display: block" : "block",
    "display: none" : "hidden",
    "display: inline-block" : "inline-block",
    "display: grid" : "grid"

}

const data = { 
    flexbox: flexbox,
    display: display 
}

export { data }