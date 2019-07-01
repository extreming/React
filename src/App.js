import React, { Component } from 'react'
// import React from 'react'
// const Component = React.Component

class App extends Component{
    render() {
        return (
            <ul>
                <li>{ true ? '小明' : '小红' }</li>
                <li>我是一个列表</li>
            </ul>
        )
    }
}

export default App;
