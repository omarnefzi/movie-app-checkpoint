import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
 
  <div className="inner">
    <div className="column is-logo">
      <a href="#" className="main-logo">
        <div className="logo">
          <img src="logo.png" alt="stackfindover" />
        </div>
        <div className="logo-info">
          <div className="text">Stackfindover</div>
          <span className="copyright">© 2021. All rights reserved.</span>
        </div>
      </a>
    </div>
    <div className="column is-nav">
      <div className="column-title">Navigation</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Join</a>
        </li>
      </ul>
    </div>
    <div className="column is-nav">
      <div className="column-title">Contact</div>
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-envelope-open" /> info@stackfindover.com
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
            @stackfindover
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" />
            Linkedin
          </a>
        </li>
      </ul>
      <div className="column-title">Other</div>
      <ul>
        <li>
          <a href="#">Quiz</a>
        </li>
      </ul>
    </div>
    <div className="column is-nav">
      <div className="column-title">Blog</div>
      <ul>
        <li>
          <a href="#">What is jQuery</a>
        </li>
        <li>
          <a href="#">What is JavaScript</a>
        </li>
        <li>
          <a href="#">How to make money with a blog</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default Footer