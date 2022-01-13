import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import "./card.css"
function Card({ data, index, id }) {
    return (
        <Draggable draggableId={id} index={index}>
            {
                (provided) => (

                    <div className='card_trello' ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        {data}
                    </div>
                )
            }

        </Draggable>
    )
}

export default Card
