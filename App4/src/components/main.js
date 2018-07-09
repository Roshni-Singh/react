import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class main extends Component {

  renderList () {


  }


  render() {
    return (
      <div>
        <h1>DIY Central</h1>
        <Link
          className='btn-primary btn-md'
          to= {'/explore'}>
          Explore
        </Link>
        <Link
          className='btn-primary btn-md'
          to= {'/add'}>
          Add DIY
        </Link>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     todos: state.todos.todos
//   };
// }

export default main;
