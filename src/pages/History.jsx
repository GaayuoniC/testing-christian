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
        <p>
          "Love the life you live, live the life you love"
          <span id="bob-quote">- Bob Marley</span>
        </p>
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
        <p>Yoga on the beach, Odessa</p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/rejika-croatia.jpg")` }}
      >
        <p> Rejika, Croatia </p>
      </div>
      <div
        className="history-item history-item-tall"
        style={{ backgroundImage: `url("/odessa opera house.jpg")` }}
      >
        <p> Opera House, Odessa </p>
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
        <p> Privos Market,Odessa </p>
      </div>
      <div
        className="history-item"
        style={{ backgroundImage: `url("/yoga3.jpg")` }}
      >
        <p> 12 </p>
      </div>
      <div
        className="history-item"
        style={{ backgroundImage: `url("/rejika-croatia.jpg")` }}
      >
        <p> Bakur, Croatia </p>
      </div>
    </section>
  );
}
