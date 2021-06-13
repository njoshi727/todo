import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Task' }, { id: 3, txt: 'Third Task' }],
            currTask: '',
        }
    }

    handleChange = (e) => {
        let cVal = e.target.value;
        this.setState({ currTask: cVal })
    }

    handleClick = () => {
        let nTaskArray = [...this.state.tasks,
        { id: this.state.tasks.length, txt: this.state.currTask }]

        this.setState({
            tasks: nTaskArray,
            currTask: '',
        })
    }

    handleDelete = (id) => {
        let nTaskArray = this.state.tasks.filter(task => {
            return task.id != id;
        })

        this.setState({ tasks: nTaskArray });
    }

    render() {
        return (
            <div>
                <InputComponent handleChange = {this.handleChange} handleClick = {this.handleClick} currTask = {this.state.currTask}> </InputComponent>
                <TaskListComponent tasks = {this.state.tasks} handleDelete = {this.handleDelete}></TaskListComponent>
            </div>
        )
    }
}

class InputComponent extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return (
            <div className="input-container">
                <input onChange={this.props.handleChange} value={this.props.currTask} type='text'></input>
                <button onClick={this.props.handleClick}> Add </button>
            </div>
        )
    }
}

class TaskListComponent extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="class-list">
                <ul>
                    {
                        this.props.tasks.map(task => (
                            <li key = {task.id}>
                                <h1> {task.txt} </h1>
                                <button onClick={() => this.props.handleDelete(task.id)}> Delete </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
