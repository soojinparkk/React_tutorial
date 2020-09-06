import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
          {/* action: 데이터 전송할 곳 
              method: 데이터 추가 및 수정할 때 필요한 데이터 전송 방법
              원래 form 태그는 submit 누르면 action의 주소로 이동 */}
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              // onSubmit 속성에 input 해당하는 value 값 찾기
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}>
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
}

export default CreateContent;