import "./History.css";
export function History() {
  return (
    <section className="history-container">
      <div className="history-item">
        <p>
          <span id="moto"> "Monkey see monkey do" </span>
        </p>
        <p>
          Experiment with grid layout and a flex box.The idea is to see how they
          can be used together in a responsive browser for got user experience
        </p>
      </div>
      <div className="history-item">
        <p>One day at a time!</p>
      </div>
      <div
        className="history-item"
        style={{ backgroundImage: `url("/odessa black sea view.jpg")` }}
      >
        <p> Carpe diem</p>
      </div>
      <div className="history-item">
        <p>"Get up and do something for your self" - Joseph Hill Culture</p>
      </div>
      <div className="history-item">
        <p> four</p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/odessa seaview nice.jpg")` }}
      >
        <p>Odessa, Black Sea </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/odessa sun rise.jpg")` }}
      >
        <p> Yoga </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/yoga3.jpg")` }}
      >
        <p> 7 </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/rejika-croatia.jpg")` }}
      >
        <p> 8 </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/odessa opera house.jpg")` }}
      >
        <p> 9 </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/window-flowers.jpg")` }}
      >
        <p> 10 </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/privos mama.jpg")` }}
      >
        <p> 11 </p>
      </div>
      <div
        className="history-item"
        style={{ backgroundImage: `url("/yoga3.jpg")` }}
      >
        <p> 12 </p>
      </div>
    </section>
  );
}
