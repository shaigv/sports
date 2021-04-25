import React from 'react';



const Item = (props) => {
    return (

        < div className="item" >
            <div className="content">
                <div className="description"><strong>{props.header}</strong>
                    {props.data}
                </div>
                <br></br>
            </div>
        </div >

    );
}
export default Item;