import React, { Component } from 'react';

class Nav extends Component {
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