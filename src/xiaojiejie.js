import React, { Component } from 'react'
import './style.css'
import XiaojiejieItem from './xiaojiejieItem'
import Boss from './boss'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['头部按摩', '精油推背'],
            total: 2
        }
    }
    render() {
        return (
            <div className="xiaojiejie">
                {/* 这是一条注释 */}
                <div>
                    <label htmlFor="input">加入服务：</label>
                    <input id="input" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} onKeyUp={this.enterEvent.bind(this)} />
                    <button className="btn" onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={item + index}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
                <p>您已经做了 <em style={{fontSize: '24px'}} >{this.state.total}</em> 项服务</p>
                <Boss />
            </div>
        )
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        if (this.state.inputValue) {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            }, () => {
                this.setState({
                    total: this.state.list.length
                })
            })
        }
    }
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list,
            total: this.state.list.length
        })
    }
    enterEvent(e) {
        if (e.keyCode === 13) {
            this.inputChange(e)
            this.addList()
        }
    }
}
export default Xiaojiejie