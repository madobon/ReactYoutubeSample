// JSXを利用する場合は必ず必要（React.createElement）
import React, {Component} from 'react';
// { Component} は const Component = React.Component の意味

// const SearchBar = () => {
//   return <input />;
// };

// ES2015クラスベース
export default class SearchBar extends Component {

  // コンストラクタ
  constructor(props) {
    // 親のコンストラクタ
    super(props);

    // 状態
    this.state = {term: ''};
  }

  // レンダリング
  render() {
    return (
      // <input onChange={this.onInputChange} />
      // <input onChange={event => console.log(event.target.value)} />
      <div className="search-bar">
        <p>Youtube Search</p>
        <input
          value={this.state.term}
          placeholder="search some words"
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // イベントハンドラ
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// 外部参照できるようにexportする
// export default SearchBar;
