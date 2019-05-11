import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'react-bootstrap'

// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import avatar from '../images/avatar.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={
          this.props.timeout ? { display: 'flex' } : { display: 'none' }
        }
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image minor">
            <img src={avatar} alt=""/>
          </span>
          <p>
            JavaScript Web Developer, learning as much as I can in software
            development.
            <br />
          </p>
          <p>Enjoying the journey!</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Salt Lake Stars Moblie App</h2>
          <h3 className="minor">
            Helio Training | Larry H Miller Group Collaborative Project
          </h3>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Mobile App for the Salt Lake Stars Basketball team. Built with
            React Native, I focused on frontend development where I helped
            style and implement client requested navigation and displaying
            appropriate data from the API.
          </p>
          <p>
            Download the app <a href="http://somesite.com">here!</a>
          </p>

          <h2 className="major">Personal Fitness Web App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Full Stack web app built with ReactJS, Express, NodeJS, and
            MongoDB. Built to track weightlifting activity. Includes user
            authentication for multiple users.
          </p>
          <p>
            Check out the demo <a href="http://www.somesite.com">here!</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Based in Salt Lake City, Utah, passionate about full stack
            development. Looking to utilize my talents to further my career
            in industry. Completed Helio Training's Full Stack Web
            Development bootcamp where I discovered my passion for
            development and got me set in the right direction. Becoming more
            passionate every day I code!
          </p>
          <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main