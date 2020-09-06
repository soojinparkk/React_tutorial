import React, { Component } from 'react';

class Nav extends Component {
    // shouldComponentUpdate(newProps, newState) -> 성능을 위해 사용
    // render() 전에 실행
    // newProps.data: 새로 들어온 값
    // this.props.data: 기존 값
    //      -> 이렇게 두 개의 값에 접근 가능
    // true: render() 호출
    // false: render() 호출 X
    shouldComponentUpdate(newProps, newState) {
      if (this.props.data === newProps.data)
        return false;
      return true;
    }

    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while (i < data.length) {
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
          // bind 두번째 인자부터 function의 첫번째 파라미터로 작성
          onClick={function(id, e){
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}>{data[i].title}</a></li>)
        i++;
      }

      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
}

export default Nav;