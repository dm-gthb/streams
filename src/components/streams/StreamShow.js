import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>loading...</div>
    }

    return (
      <div>
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
