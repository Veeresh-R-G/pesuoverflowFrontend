import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import List from "./trello/components/List"
import NewList from './trello/components/NewList';
import board from './trello/utils/data'

const TrelloCompo = () => {
    const [data, setData] = useState(board.lists);
    const [ids, setIds] = useState(board.listIds);

    function dragHandle(result) {
        const { destination, source, draggableId } = result;


        if (!destination)
            return;
        const sourceList = data[source.droppableId];
        const destinationList = data[destination.droppableId];
        const draggingCard = sourceList.cards.find((card) => card.id === draggableId)
        sourceList.cards.splice(source.index, 1);
        destinationList.cards.splice(destination.index, 0, draggingCard)

        if (source.droppableId === destination.droppableId) {

            const newdata = {
                ...data,
                [sourceList.id]: destinationList
            }
            setData(newdata)
        } else {
            const newdata = {
                ...data,
                [sourceList.id]: sourceList,
                [destinationList.id]: destinationList
            }

            setData(newdata);
        }
    }

    let style =
        { "backgroundColor": "#ad4beb" }
    return (

        <div className='pt-12 pb-32' style={style}>


            <div className='mt-12 mx-24 rounded-2xl h-auto pb-10 border border-white bg-white  '>
                <h1 className='ml-20 text-4xl font-bold my-10 text-gray-800/80 underline decoration-dotted text-center'> Trello Board</h1>
                <DragDropContext onDragEnd={dragHandle}>

                    <div className="trello-Component mt-10 ml-12">
                        <div className='lists' style={{ display: "flex", flexDirection: "row" }}>

                            {

                                ids.map((item) => {
                                    console.log("Hello");
                                    return <List listD={data[item]} key={item} setData={setData} />
                                })
                            }


                            <NewList setData={setData} setIds={setIds} />
                        </div>

                    </div>
                </DragDropContext>
            </div>

        </div>
    );
}

export default TrelloCompo;