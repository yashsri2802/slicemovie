export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <img src="MovieBox.png" alt="logo" />
            <p>
              SliceMovie - your ultimate cinema zone! <br />
              Explore avenger movies, web series, and exclusive originals <br />
              anytime, anywhere.
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>Explore</h4>
            <a href="#">Top rated</a>
            <a href="#">Latest Releases</a>
            <a href="#">TV Shows</a>
            <a href="#">Genres</a>
          </div>
          <div className="content_3">
            <h4>Support</h4>
            <a href="./contact.html">Help Center</a>
            <a href="" target="_blank">
              Account & Billing
            </a>
            <a href="" target="_blank">
              Privacy Policy
            </a>
            <a href="" target="_blank">
              Terms of Use
            </a>
          </div>
          <div className="content_4">
            <h4>Join our Newsletter</h4>
            <p>
              Get updates on the newest movies, <br />
              special offers, and insider info.
            </p>
            <div className="f-mail">
              <input
                type="email"
                placeholder="Your Email"
                className="f-field"
              />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>© 2025 SliceMovie — Made with ❤️ & 🍿</p>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};
