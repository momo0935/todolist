import React, { Component } from 'react'
import './index.css' 

export default class Footer extends Component {

handleCheckAll=(event)=>{
  this.props.checkAllTodo(event.target.checked)
}

handleClearAllDone=()=>{
this.props.ClearAllDone()
}

  render() {
    const{todos}=this.props
    //已完成
const countTodo=todos.reduce((pre,todo)=>{return pre+(todo.done? 1 :0)},0)
    //總數
    const total=todos.length 
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll}checked={countTodo===total&&total!==0 ? true:false}/>
        </label>
        <span>
          <span>已完成{countTodo}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone}className="btn btn-danger">清除已完成</button>
      </div>
    )
  }
}