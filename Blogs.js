import "./style.css";
const Blogs = () => {
  return (
    <div>
      <h1 className="baslik1">Dersler</h1>
      <p className="paragraf">
        Visual Studio Code'da kullandığım diller, ayrıca Python,C#,vb. dilleride
        öğrenicem .
      </p>

      <img src={require("./images/CSS.jpg")} alt="" />
      <img src={require("./images/HTML.png")} alt="" />
      <img src={require("./images/JavaScript.png")} alt="" />
      <img src={require("./images/react.jpg")} alt="" />
    </div>
  );
};

export default Blogs;
