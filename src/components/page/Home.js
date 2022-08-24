import './Home.css'
const Home = () => {
  return (
    <div>
      <div className="url-container">
        <input type="url" placeholder="Paste URL here" className="url-input" required />
        <button className="url-btn">GO</button>
      </div>
    </div>
  );
};

export default Home;
