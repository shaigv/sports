import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

import Item from './Item'

function View(props) {

    return (
        <Modal

            onClose={props.onClose}
            onOpen={props.onOpen}
            open={props.open}
            size='small'
            style={{ Overflow: 'hidden' }}
        >
            <Header>
                <i className="close icon small icon-float"  onClick={props.onClose}></i>
                <h3><strong>Details: </strong>{ }</h3>
            </Header>
            <Modal.Content>

                <div className="ui relaxed divided list" >

                    <Item header="Id: " data={props.data.id} />
                    <Item header="First name: " data={props.data.first_name} />
                    <Item header="Last name: " data={props.data.last_name} />
                    <Item header="Position: " data={props.data.position} />
                    <Item header="Team: " />
                    <div>
                        <Item header="Full name: " data={props.data.team.full_name} />
                        <Item header="Abbreviation: " data={props.data.team.abbreviation} />
                        <Item header="City: " data={props.data.team.city} />
                    </div>

                </div>







            </Modal.Content>
            <Modal.Actions>

                <Button color='black' inverted onClick={props.onClose}>
                    Close
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default View;

