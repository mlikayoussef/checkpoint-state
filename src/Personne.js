import React from "react";

class Personne extends React.Component {

    render() {

        return (
            <>
                <h1>{this.props.fullName}</h1>
                <h1>{this.props.bio}</h1>
                <h1>{this.props.profession}</h1>

            </>)
    };
};

export default Personne;
