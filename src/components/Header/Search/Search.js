import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
constructor(){
  super();

  this.state={
    userInput : ''
  }
}

  handleChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      userInput : event.target.value
    })
  }
  handleClick=()=>{
    let searchPost = [];
    for (let i = 0; i < this.props.post.length; i++) {
      if(this.props.post[i].text.includes(this.state.userInput)){
        searchPost.push(this.props.post[i])
      }
    }
    console.log(searchPost);
  }

  render() {
    console.log('string', this.props.post);
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.handleChange} />

          <SearchIcon id="Search__icon"  onClick={this.handleClick}/>
        </div>

      </section>
    )
  }
}
