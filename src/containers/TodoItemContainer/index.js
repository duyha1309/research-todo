import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleTodoAction, removeTodoAction } from '../../actions';
import TodoItem from "../../components/TodoItem";

const mapStateToProps = (state, ownProps) => {
  return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({toggleTodoAction, removeTodoAction}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
