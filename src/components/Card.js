//must import React to write in JSX
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            //className=CSS styling using tachyons; dib=display inline block
            <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                {/*using robohash API to get cute robo friends pics*/}
                <img src={`https://robohash.org/${this.props.id}?200x200`} alt='robo friend'/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;