import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  };

  render() {
    return (<form>
      <input />
      <button onClick={this.handleSubmit}>Add</button>
    </form>
    );
  }
}

export default TodoForm;