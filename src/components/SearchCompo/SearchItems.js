const Items = (props) => {
    return (
        <div className="items pl-3 pb-1 bg-white text-black w-myWidth rounded-lg
        hover:bg-gray-200">
            {props.val}
        </div>
    );
}

export default Items;