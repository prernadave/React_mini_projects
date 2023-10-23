import { useState } from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';

const List = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);


    const handleStatus = (listId, currentStatus) => {
        const updatedList = list.map((item) => {
            if (item.id === listId) {
                return { ...item, status: !currentStatus };
            }
            return item;
        });
        setList(updatedList);
    };


    const handleAdd = () => {
        if (input.trim() === '') {
            return;
        }
        const newItem = { id: Date.now(), title: input, status: false }
        setList([...list, newItem]);
        setInput('');
    }

    const handleDelete = (listId) => {
        const updatedList = list.filter((item) => item.id !== listId);
        setList(updatedList)
    }

    console.log(list);

    return (

        <div className="list-container">
            <AddItem onHandleAdd={handleAdd} onSetInput={setInput} listLength={list.length} input={input} />
            <ListItem onListItem={list} onHandleDelete={handleDelete} onHandleStatus={handleStatus} />
        </div>
    )
}

export default List