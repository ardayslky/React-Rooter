import "./style.css";
const Home = () => {
  return (
    <div>
      <p>
        Merhaba ben Arda, Arnavutköy Anadolu Lisesi'nde okuyorum. Kitap okumayı
        ve kodlamayı severim.
      </p>
      <img className="kitap" src={require("./images/ince memed.jpg")} alt="" />
      <img className="kitap" src={require("./images/martin eden.jpg")} alt="" />
      <img
        className="kitap"
        src={require("./images/kuyucaklı yusuf.jpg")}
        alt=""
      />
      <img
        className="kitap"
        src={require("./images/kürk mantolu madonna.jpg")}
        alt=""
      />
    </div>
  );
};

export default Home;
