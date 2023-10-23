

const AddItem = ({ onHandleAdd, onSetInput, input, listLength }) => {
    return (
        <div className="add-item">
            <input type="text" value={input} placeholder='Type here...' onChange={(e) => onSetInput(e.target.value)} />
            <button disabled={listLength === 5} onClick={onHandleAdd}>Add</button>
        </div>
    )
}

export default AddItem