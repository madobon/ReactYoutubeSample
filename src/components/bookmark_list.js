import React, {Component} from 'react'
import BookMarkListItem from './bookmark_list_item'

export default class BookMarkList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.bookmarks.map(video => {
      return (
        <BookMarkListItem
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video} />
      )
    });

    return (
      <ul className="col-md-3 list-group">
        {videoItems}
      </ul>
    );
  }

}
