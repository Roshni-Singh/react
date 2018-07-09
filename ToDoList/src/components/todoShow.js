import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from '../actions';
//import { editTodo } from '../actions';
//import { fetchPosts } from '../actions';

class todoShow extends Component {

  onDeleteClick(id) {
    this.props.deleteTodo(id);
  }

  renderTodos() {
    //console.log(this.props.todos.length)
    if(!this.props.todos.length) {
      return (
        <div className='noTodos'>
          <h3>No todos yet</h3>
        </div>
      )
    } else {
      return this.props.todos.map((todo, i) => {
        return (
          <div className='currentTodo' key={i} style={{ width: '100%', minHeight: 50 }}>
            <h6 style={{ display: 'inline' }}>{ todo }</h6>
            <button
              className='btn btn-danger btn-sm'
              style={{ display: 'inline', float: 'right' }}
              onClick={ () => this.onDeleteClick(i)}
            >
              Delete 
              Todo
            </button>
            <Link className='btn btn-primary btn-sm' 
              style={{ display: 'inline', float: 'right' }}
              to={ `/edit/${i}` }>
              Edit Todo
            </Link>
          </div>
        )
      });
    }
  }

  render () {
    const { post } = this.props
    return (
      <div style={{ width: '100%'}}>
        <h1>Todos</h1>
        <h3>List of Todos</h3>

        <div className='listOfTodos' style={{clear: 'all' }}>
          {this.renderTodos()}
        </div>
        
        <Link style={{ clear: 'all' }} className='btn btn-primary' to='/add'>
          Add a Todo
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    todos: state.todos.todos
   };
}

export default connect(mapStateToProps, { deleteTodo })(todoShow);
