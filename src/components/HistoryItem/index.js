import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {historyDetails, onDeleteClick} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
    const onDelete = () => {
      onDeleteClick(id)
    }

    return (
      <li className="history-item">
        <p className="time-style">{timeAccessed}</p>
        <div className="other-than-time-container">
          <div className="img-title-domain-container">
            <img src={logoUrl} alt="domain logo" className="each-logo" />
            <div className="title-domain-container">
              <p className="title-style">{title}</p>
              <p className="domain-url-style">{domainUrl}</p>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryItem
