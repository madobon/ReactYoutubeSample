// Useful Library
import _ from 'lodash';

// React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Youtube API
import YTSearch from 'youtube-api-search';

// Component
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import BookMarkList from './components/bookmark_list';

const API_KEY = 'AIzaSyBpfqQ85OyrVMfv9_8xriYKOdpeNcCozvo';

// コンポーネントを作る。JSXで書く。
// const App = () => {
//   // ()で括れる
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// ES2015クラスベース
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      bookmarks: [],
      selectedBookMark: null
    };

    this.videoSearch('作業用BGM');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term} , videos => {
      // this.setState({videos: videos});
      this.setState({
        videos: videos,
        selectedVideo: this.state.selectedVideo || videos[0] // 最初の動画は最初、その後は保持
      });
    });
  }

  bookmarkSelect(event, selectedBookMark) {
    const bookmarks = this.state.bookmarks;
    bookmarks.push(selectedBookMark);
    this.setState({selectedBookMark, bookmarks});

    event.stopPropagation();
  }

  deleteBookmarkSelect(event, selectedBookMark) {
    const bookmarks = this.state.bookmarks;

    // 選択されたものを除外
    const filteredBookmarks = bookmarks.filter(function(bookmark) {
      return bookmark !== selectedBookMark;
    });

    this.setState({bookmarks: filteredBookmarks});
    event.stopPropagation();
  }

  videoSelect(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    // 300ms以上経過していれば、検索
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {this.videoSelect.bind(this)}
          onBookmarkSelect = {this.bookmarkSelect.bind(this)}
          videos = {this.state.videos}/>
        <BookMarkList
          onVideoSelect = {this.videoSelect.bind(this)}
          onDeleteBookmarkSelect = {this.deleteBookmarkSelect.bind(this)}
          bookmarks = {this.state.bookmarks} />
      </div>
    );
  }
}

// 画面にレンダリング
// 第１引数：レンダリングするコンポーネント
// 第２引数：どこにレンダリングするか
ReactDOM.render(<App />, document.querySelector('.container'));
