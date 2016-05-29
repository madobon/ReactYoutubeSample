import React, {Component} from 'react'
import VideoListItem from './video_list_item'

// const VideoList = (props) => {
//   return (
//     <ul className="col-md-4 list-group">
//       {props.videos.length}
//     </ul>
//   );
// };

export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.videos.map(video => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          onBookmarkSelect={this.props.onBookmarkSelect}
          key={video.etag}
          video={video}
          bookmarks = {this.props.bookmarks} />
      )
    });

    return (
      <ul className="col-md-3 list-group">
        {videoItems}
      </ul>
    );
  }

}
