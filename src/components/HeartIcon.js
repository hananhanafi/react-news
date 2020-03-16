import React from 'react';

class HeartIcon extends React.Component {
  state = {
    isFavorite: false,
    isMouseEnter: false,
  }

  onMouseEnter() {
    this.setState({
      isMouseEnter: true,
    })
  }

  onMouseLeave() {
    this.setState({
      isMouseEnter: false,
    })
  }

  toggleFavorite() {
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  getIconType() {
    const { isFavorite, isMouseEnter } = this.state;
    if (isFavorite && isMouseEnter) {
      return "far";
    }
    if (isFavorite && !isMouseEnter) {
      return "fas";
    }
    if (!isFavorite && isMouseEnter) {
      return "fas";
    }
    if (!isFavorite && !isMouseEnter) {
      return "far";
    }
  }

  render() {
    const { isFavorite } = this.state;
    const type = this.getIconType();
    return (
      <div style={{
        textAlign: "center",
      }}>
        <i
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
          onClick={() => this.toggleFavorite()}
          style={{
            fontSize: "2em",
            color: "#ef5350",
            cursor: "pointer",
          }} className={`${type} fa-heart`} />
      </div>
    )
  }
}

export default HeartIcon;
