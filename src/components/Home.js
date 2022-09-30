import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <div className="url-container">
        <input
          type="url"
          placeholder="Paste URL here"
          className="url-input"
          required
        />
        <span>
          <button className="url-btn">GO</button>
        </span>
      </div>
    </div>
  );
};

export default Home;
