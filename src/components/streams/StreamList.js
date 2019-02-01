import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            edit
          </Link>

          <button className="ui button negative">
            delete
          </button>
        </div>
      )
    }
  }

  renderList() {
    const { streams } = this.props;

    return streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <div className="header">
              {stream.title}
            </div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui button primary">
            create new stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui celled list">
        <h2>Streams</h2>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
