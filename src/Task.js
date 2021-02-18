import * as React from "react";


class Task extends React.Component {
    objectClicked = () => {
        this.props.deleteHandler(this.props.id);
    }
    render() {
        return(
            <li onClick={this.objectClicked}>{this.props.name}</li>
        )
    }
}
export default Task;