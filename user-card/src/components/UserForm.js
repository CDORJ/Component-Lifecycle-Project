import React from 'react'

class UserForm extends React.Component {
    constructor() {
        super();
        this.state= {
          name: '',  
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.getNewUser(this.state.name)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name='name'
                    placeHolder='Search Github User...'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </form>

            </div>
        );
    }
}
export default UserForm;