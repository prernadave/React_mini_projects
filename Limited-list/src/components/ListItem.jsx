const ListItem = ({ onListItem, onHandleDelete, onHandleStatus }) => {
    return (
        <ul>
            {onListItem.map((list) => (
                <li key={list.id} className="list-item">
                    <span>{list.title}</span>
                    <button onClick={() => onHandleStatus(list.id, list.status)}>
                        {list.status ? <p>Done</p> : <p>Not Done</p>}
                    </button>
                    <button onClick={() => onHandleDelete(list.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ListItem;
