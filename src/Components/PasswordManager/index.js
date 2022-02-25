import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import YourPasswords from '../YourPasswords'

class PasswordManager extends Component {
  state = {
    websiteText: '',
    usernameText: '',
    passwordText: '',
    userList: [],
    checkBox: false,
  }

  deleteUserDetails = id => {
    const {userList} = this.state
    this.setState({
      userList: userList.filter(eachItem => eachItem.id !== id),
    })
  }

  OnChangeWebsite = event => {
    this.setState({websiteText: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameText: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordText: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {websiteText, usernameText, passwordText} = this.state

    const newList = {
      id: v4(),
      website: websiteText,
      username: usernameText,
      password: passwordText,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newList],
      websiteText: '',
      usernameText: '',
      passwordText: '',
    }))
  }

  renderPswdContainer = () => (
    <div className="addPswdContainer">
      <div className="addPswd">
        <h1 className="heading">Add New Password</h1>
        <form onSubmit={this.onClickAddButton}>
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="inputImage"
            />
            <input
              type="text"
              className="inputBox"
              placeholder="Enter Website"
              onChange={this.OnChangeWebsite}
            />
          </div>
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="inputImage"
            />
            <input
              type="text"
              className="inputBox"
              placeholder="Enter Username"
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="inputImage"
            />
            <input
              type="password"
              className="inputBox"
              placeholder="Enter Password"
              onChange={this.onChangePassword}
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="addButton">
              Add
            </button>
          </div>
        </form>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="imageSizing"
      />
    </div>
  )

  checkBoxClicked = () => {
    this.setState(prevState => ({
      checkBox: !prevState.checkBox,
    }))
  }

  render() {
    const {userList, checkBox} = this.state
    const listLength = userList.length
    console.log(listLength)

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="appLogo"
        />
        {this.renderPswdContainer()}
        <div className="displayPswdContainer">
          <div className="headerContainer">
            <div className="countContainer">
              <h1 className="card2Head">Your Passwords</h1>
              <p>{listLength}</p>
            </div>
            <div className="searchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="searchLogo"
                onChange={this.onChangeSearchInput}
              />
              <input type="search" className="searchBox" />
            </div>
          </div>
          <label htmlFor="check">Show passwords</label>
          <input type="checkbox" id="check" onClick={this.checkBoxClicked} />

          <hr />
          <ul className="listContainer">
            {userList.map(eachItem => (
              <YourPasswords
                key={eachItem.id}
                userDetails={eachItem}
                checkBoxClicked={this.checkBoxClicked}
                deleteUserDetails={this.deleteUserDetails}
                checkBox={checkBox}
                listLength={listLength}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
