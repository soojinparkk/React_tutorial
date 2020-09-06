import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    // binding 된 함수로 바꿔주면 코드 간결하게 정리 가능
    // == refactoring
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  // [e.target.name]: 해당 태그의 name 값
  // e.tartget.value: 해당 태그의 value 값
  inputFormHandler(e) {
      this.setState({[e.target.name]:e.target.value});
  }

    render() {
      return (
        <article>
          <h2>Update</h2>
          <form action="/update_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}>

            <input type="hidden" name="id" value={this.state.id}></input>

            <p>
              <input type="text" name="title" placeholder="title" value={this.state.title} 
                onChange={this.inputFormHandler}></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description" value={this.state.desc} 
                onChange={this.inputFormHandler}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
}

export default UpdateContent;