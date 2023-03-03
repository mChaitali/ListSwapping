import {useState} from 'react';
import ButtonRow from './Button';
import List from './List';
import data from './data.json';
import {left, right} from './Constants';
import './ListView.css';

const ListView = () => {
    const [item, setItem] = useState([]);
    const [listLeft, setlistLeft] = useState(data.LeftList);
    const [listRight, setlistRight] = useState(data.RightList);

    const handleClick = () => {
        const [element, listName] = item;
        let fromList,
            moveToList;

        if (listName === left) {
            fromList = listLeft;
            moveToList = listRight;

        } else {
            fromList = listRight;
            moveToList = listLeft;
        }

        // Add selected item into array
        const addedItem = [
            ...moveToList,
            element
        ];

        // Remove selected item into array
        const removedList = fromList.filter((ele) => ele !== element);

        // Update state
        if (listName === left) {
            setlistLeft(removedList);
            setlistRight(addedItem);
        } else {
            setlistLeft(addedItem);
            setlistRight(removedList);
        }

        // update Item to empty array
        setItem([]);
    }

    return (
        <div className='list_view'>
            <h1>Swapping Element in ListView</h1>

            <List list={listLeft}
                setItem={setItem}
                item={item}
                listSide={left}></List>
            <ButtonRow item={item}
                handleClick={handleClick}>
                Move Right
            </ButtonRow>
            <List list={listRight}
                setItem={setItem}
                item={item}
                listSide={right}></List>
        </div>
    )
}
export default ListView;
