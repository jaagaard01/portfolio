import React from 'react'
import PropTypes from 'prop-types'



import pic02 from '../images/pic02.jpg'
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
            <img src={avatar} alt="" />
          </span>
          <p>
            Full Stack Web Developer, learning as much as I can in software
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
            Download the app <a href="https://saltlakecity.gleague.nba.com/">here!</a>
          </p>

          <h2 className="major">Personal Fitness App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          Utilized React and Axios to build out an interactive Frontend, while using Express, Node.JS, 
          and MongoDB to implement the Backend functions and to access the Mongo Database.
          Built to track weightlifting activity.
          </p>
          <p>
            Check the app out <a href="https://github.com/jaagaard01/react-server-frontend">here!</a>
          </p>
          <h2 className="major">Workout Randomizer App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          Currently building a workout randomizer in React to help people mix up workout routines. 
          By switching up routines it keeps working out fun and exciting and helps from hitting a plateau. 
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
          <span className="image minor">
            <img src={avatar} alt="" />
          </span>
          <p>
            Based in Salt Lake City, Utah, passionate about full stack
            development. Looking to utilize my talents to further my career
            in industry. Completed Helio Training's Full Stack Web
            Development bootcamp where I discovered my passion for
            development and got me set in the right direction. 
          </p>
          <p>
            Becoming more passionate every day I code!
          </p>
          <h2 className="minor">Skills</h2>
          <div className="skillsContainer">
          <ul style={{listStyle:"none"}} >
            <li>JavaScript</li>
            <li>Node</li>
            <li>Docker</li>
            <li>HTML</li>
            <li>React</li>
            <li>React Native</li>
            <li>CSS</li>
            <li>Git Version Control</li>
            <li>Angular</li>
          </ul>

          </div>
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
          {/* <form method="post" action="#">
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
          </form> */}
          <div style={{justifyContent: "space-evenly"}}>
          <ul className="icons">
            <li >
              <a href="https://www.linkedin.com/in/john-aagaard/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li >
              <a href="https://twitter.com/john_aagaard" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li >
              <a href="mailto:jaagaard91@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            
            <li >
              <a href="https://github.com/jaagaard01" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          </div>
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