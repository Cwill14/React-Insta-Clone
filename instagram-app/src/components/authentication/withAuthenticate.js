import React from 'react';

const withAuthenticate = SomeComp => 
    class extends React.Component {
        render() {
            return (
                <SomeComp />
            );
        }
    }

export default withAuthenticate;