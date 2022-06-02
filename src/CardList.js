import React from 'react';
import Card from './Card';
//robots must be destructured since it is a named export
import { robots } from './robots';

class CardList extends React.Component {
    render() {
        return (
            //Fragment avoids polution of DOM w div elements
            <div>
                <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
                <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            </div>
        );
    }
}

export default CardList;