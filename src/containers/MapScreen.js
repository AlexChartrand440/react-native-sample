import { connect } from 'react-redux';
import MapScreen from '../components/MapScreen';
import { toggleAddCommentModalVisibility } from '../actions/comments';

export default connect(
  ({ comments }) => {
    const commentsArray = Object.keys(comments).map(key => comments[key]);
    return { comments: commentsArray };
  },
  {
    toggleAddCommentModalVisibility
  },
)(MapScreen);
