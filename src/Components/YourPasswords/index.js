import './index.css'

const YourPasswords = props => {
  const userDetails = props
  const {website, username, password} = userDetails

  return (
    <li className="listContainer">
      <h1>{website}</h1>
      <div className="detailsContainer">
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button type="button" className="deleteButt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}

export default YourPasswords
