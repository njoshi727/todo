import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Task' }, { id: 3, txt: 'Third Task' }],
        }
    }


    handleClick = (task) => {
        let nTaskArray = [...this.state.tasks,
        { id: this.state.tasks.length+1, txt: task }]

        this.setState({
            tasks: nTaskArray,
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
                <InputComponent handleClick={this.handleClick}> </InputComponent>
                <TaskListComponent tasks={this.state.tasks} handleDelete={this.handleDelete}></TaskListComponent>
            </div>
        )
    }
}

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTask : ''
        }
    }

    handleChange = (e) => {
        let cVal = e.target.value;
        this.setState({ currTask: cVal })
    }

    render() {
        return (
            <div className="input-container">
                <input onChange={this.handleChange} value={this.state.currTask} type='text'></input>
                <button onClick={() => {
                    this.props.handleClick(this.state.currTask)
                    this.setState({currTask : ''})
                }}> Add </button>
            </div>
        )
    }
}

class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="class-list">
                <ul>
                    {
                        this.props.tasks.map(task => (
                            <li key={task.id}>
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
