//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  } from '../actions';
import deleteDIY from '../actions'

class explore extends Component {

    onDeleteClick(id) {
        this.props.deleteDIY(id);
    }

    renderDIYsList() {
        if (!this.props.DIYs.length) {
            return (
                <div>
                    <h1>No DIYs</h1>
                </div>
            )
        } else {
            return this.props.DIYs.map((DIY, i) => {
                return (
                    <div className='currentDIY' key={i}>
                        <h6 style={{ display: 'inline' }}>{ DIY.title }</h6>
                        <Link
                            className='btn btn-danger btn-sm'
                            style={{ display: 'inline', float: 'right' }}
                            to={`/showDIY/`}
                        >
                            Show DIY
                        </Link>
                        <button className='btn btn-danger btn-sm'
                            style={{ display: 'inline', float: 'right' }}
                            onClick={() => this.onDeleteClick(i)}
                        >
                            Delete DIY
                        </button>
                        <Link className='btn btn-primary btn-sm'
                            style={{ display: 'inline', float: 'right' }}
                            to={`/edit/`}
                        >
                            Edit DIY
                        </Link>
                    </div>
                )
            });
        }
    }

    render() {
        return(
            <div>
                <div className='listOfDIYs' style={{ clear: 'all' }}>
                    {this.renderDIYsList()}
                </div>
                <Link
                    className='goBack'
                    to={'/'}
                >
                    Go Back
                </Link>
                <Link
                    className='addNew'
                    to={'/add'}
                >
                    Add New DIY
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        DIYs: state.DIYs.DIYs
    };
}

export default connect(mapStateToProps, { deleteDIY })(explore);
