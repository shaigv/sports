import React, { useState } from 'react'
import View from './View'
import '../App.css'


const Table = ({ list,fav, iconName, iconOnClick, color }) => {

    const [view, setView] = useState(false);
    const [player, setPlayer] = useState(false);


    const handelClose = () => {
        setView(false)
    }
    const handelOpen = () => {
        setView(true)
    }
    const onClickHandler = (val) => {
        setPlayer(val)
        setView(true)

    }

    const renderModal = () => {
        if (view) {
            return <View open={view} onClose={handelClose} onOpen={handelOpen} data={player} />
        }
        else {
            return <div></div>
        }

    }
    const setIconName=(val)=>{
        console.log(val,fav)
        if(fav!==undefined){
            if(fav.some(i=>i.id===val.id)){
                return "heart red icon";
            }
            else{
                return iconName;
            }

        }
        else{
            return iconName;
        }
    }
    const renderRows = () => {

        return (
            list.map(val => {
                return (
                    <tr key={val.id} >
                        <td data-label="First_name">{val.first_name}</td>
                        <td data-label="Last_name">{val.last_name}</td>
                        <td data-label="Favorite">                          
                            <i onClick={(e) => iconOnClick(val)} className={setIconName(val)}></i>
                        </td>
                        <td data-label="Show">
                            <i onClick={(e) => onClickHandler(val)} className="eye icon"></i>

                        </td>
                    </tr>
                );
            })
        );
    }


    if (list.length === 0) {
        return <div></div>;
    }

    return (
        <div >

            <table className="table-fixed ui celled table" style={{  backgroundColor: `${color}` }}>
                <thead>
                    <tr>
                        <th>First_Name</th>
                        <th>Last_name</th>
                        <th>Favorite</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            {renderModal()}
        </div>

    )
}
export default Table;