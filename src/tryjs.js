import React, { Component } from 'react'


class Aest extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
export default Aest;
