import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightClick = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prev => ({index: prev.index + 1}))
    }
  }

  onLeftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prev => ({index: prev.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    return (
      <div className="main">
        <h1>Reviews</h1>
        <div className="sub1">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.onLeftClick}
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="sub2">
            <img
              alt={reviewsList[index].username}
              src={reviewsList[index].imgUrl}
            />
            <p className="name">{reviewsList[index].username}</p>
            <p>{reviewsList[index].companyName}</p>
            <p>{reviewsList[index].description}</p>
          </div>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.onRightClick}
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
