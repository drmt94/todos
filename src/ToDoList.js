import * as React from "react";
import Task from "./Task";

class ToDoList extends React.Component {
    state = {
        text: "",
        tasks: []
    };
    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    addTask = () => {

        if (this.state.tasks.length < 5) {
            this.setState({
                tasks: this.state.tasks.concat({name: this.state.text}),
                text: ""
            })


        } else {
            alert("you cant write more then 5 tasks,its to much...")
            this.setState({
                text: "",
            })
        }

    };
    deleteTask = (thisTask) => {
        let myList = this.state.tasks;
        myList.splice(thisTask, 1)
        this.setState({
            tasks: myList,

        });
    }

    reset = () => {

        this.setState({
            tasks: [],
            text: ""
        })
    };

    render() {
        return (
            <div class = "a">
                <h1>My ToDo List </h1>
                <br/>
                <div>
                    {this.state.tasks.length > 0 &&
                    <div class="b">
                        your have more:  {this.state.tasks.length} tasks to do
                    </div>

                    }</div>
                <br/>
                <input value={this.state.text} onChange={this.onTextChange} placeholder={"Write here your next task"}/>&nbsp;
                <button disabled={this.state.text === ''} onClick={this.addTask}>Click</button>&nbsp;
                <button disabled={this.state.tasks.length <= 0} onClick={this.reset}>
                    Reset
                </button>
                <br/>
                <ol>
                    {
                        this.state.tasks.map((task, index) => <Task name={task.name} key={index} id={index} deleteHandler={this.deleteTask}/>)
                    }
                </ol>


            </div>

        )
    }


}

export default ToDoList;