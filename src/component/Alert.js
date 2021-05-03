import React from 'react'
import Alert from 'react-bootstrap/Alert'


 class Error extends React.Component {
    render() {
        return (
            <div>
                <Alert variant="danger"  dismissible className='alert'>
        <Alert.Heading>Code Status : {this.props.status}</Alert.Heading>
        <p>
          Error: {this.props.message}
        </p>
      </Alert>
            </div>
        )
    }
}

export default Error;
