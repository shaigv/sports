import React, { useEffect, useState } from 'react'
import Table from './Table'
import '../App.css'


const List = ({ initialList }) => {
    const [list, setList] = useState(initialList);
    const [favList, setfavList] = useState([]);
    const [test, setTest] = useState(new Set([]));
    const [color, setColor] = useState('#FFFFFF');


    useEffect(() =>
        setList(initialList)
        , [initialList]);

    const onRemove = (item) => {
        var set = test.add(item)
        setTest(set)
        setfavList(Array.from(test))

    }
    const onInsert = (item) => {
        const newList = favList.filter((i) => i.id !== item.id);
        setfavList(newList);
    }
    const renderColor = () => {
        if (favList.length !== 0) {
            return (
                <div className="color">
                    <br></br>

                    <label><strong> Chose background-Color for the favorite table :</strong> </label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                </div>
            );
        }
        else {
            return <div><br></br></div>
        }
    }

    return (
        <div >
            {renderColor()}
            <div className="sideBySide">
                <Table list={list} iconName={"heart outline icon"} iconOnClick={onRemove}></Table>
                <Table list={favList} iconName={"heart red icon"} iconOnClick={onInsert} color={color}></Table>
            </div>
        </div>
    );

}

export default List;




