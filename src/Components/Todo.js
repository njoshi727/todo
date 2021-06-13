import React, { Component } from 'react'

export default class  extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Task' }, { id: 3, txt: 'Third Task'}],
            currTask : '',
        }
    }

    handleChange = (e) =>{
        let cVal = e.target.value;
        this.setState({currTask : cVal})
    }

    handleClick = () => {
        let nTaskArray = [...this.state.tasks,
            {id:this.state.tasks.length,txt:this.state.currTask}]

        this.setState({
            tasks : nTaskArray,
            currTask : '',
        })
    }
    
    handleDelete = (id) => {
        let nTaskArray = this.state.tasks.filter(task =>{
            return task.id !== id;
        })

        this.setState({tasks:nTaskArray});
    }

    render() {
        return (
            <div>
                <div className = "input-container">
                    <input onChange = {this.handleChange} value = {this.state.currTask} type = 'text'></input>
                    <button onClick = {this.handleClick}> Add </button>
                </div>

                <div className="class-list">
                    <ul>
                        {
                            this.state.tasks.map(task => (
                                <li>
                                    <h1> {task.txt} </h1>
                                    <button onClick = {() => this.handleDelete(task.id)}> Delete </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
