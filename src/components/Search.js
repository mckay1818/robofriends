import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <input 
                className='pa3 ma3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots:'
                onChange={this.props.onSearchChange}
                />
        )
    }
}

export default Search