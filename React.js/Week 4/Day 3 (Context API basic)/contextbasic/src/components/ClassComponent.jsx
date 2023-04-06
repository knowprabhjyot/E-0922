import React, { Component } from 'react'
import UserContext from '../context/UserContext'

// Assignment 
// Extract other details email, firstName and lastName
export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Class Based component</h1>
                <UserContext.Consumer>

                    {
                        (data) => {
                           return (
                            <div>
                                {
                                    data.map((userObject) => {
                                        return <img alt='' src={userObject.avatar} />
                                    })
                                }
                            </div>
                           )
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}
