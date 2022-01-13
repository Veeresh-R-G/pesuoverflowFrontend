import React from 'react'

function AddCard({ setNewCard, title }) {
    return (
        <div onClick={() => setNewCard((prev) => !prev)}>
            <div className='AddCard'>
                + {title}
            </div>
        </div>
    )
}

export default AddCard
