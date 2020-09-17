import React from 'react'

function SearchItem({ items, statusAutoFill }) {

    return (
        <div>
            <p className="ml-3 mt-1"  onClick={() => statusAutoFill(true, items)}>{items.product}</p>            
        </div>
    )
}

export default SearchItem
