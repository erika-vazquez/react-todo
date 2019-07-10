import React, { Component } from 'react'
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>{/*input items are submitted when the form is submitted */}
            <input placeholder="Task" 
                    ref={this.props.inputElement} />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default TodoList