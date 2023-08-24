import "./style.css";
const Contact = () => {
  return (
    <div>
      <h1 className="baslik2">İletişim</h1>

      <footer>
        <h2>Footer</h2>
        <div className="form1">
          <div className="maindiv1">
            <h4>Faydalandığım Siteler</h4>
            <a target="_blank" href="https://academy.patika.dev/">
              <img
                className="siteler"
                src={require("./images/dev.jpg")}
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.youtube.com">
              {" "}
              <img
                className="siteler"
                src={require("./images/youtube.png")}
                alt=""
              />
            </a>
            <a target="_blank" href="ttps://www.udemy.com">
              <img
                className="siteler"
                src={require("./images/udemy.png")}
                alt=""
              />
            </a>
          </div>
          <div className="maindiv2">
            <h4>Sosyal Medya</h4>
            <a target={"_blank"} href="https://www.github.com/ardayslky">
              <img src={require("./images/github.png")} alt="" />
            </a>
            <a target={"_blank"} href="https://www.instagram.com/yesilkayarda">
              <img src={require("./images/instagram.jpg")} alt="" />
            </a>
            <a target={"_blank"} href="https://1000kitap.com/ardayesilkaya">
              <img src={require("./images/1k.jpg")} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
