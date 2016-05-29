import React, {Component} from 'react'

export default class BookmarkListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
      <li className="list-group-item" onClick={() => this.props.onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {title}
            </div>
            <button type="button" className="btn btn-default btn-sm" onClick={event => this.props.onDeleteBookmarkSelect(event, video)}>
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Delete
            </button>
          </div>
        </div>
      </li>
    )
  }
}
