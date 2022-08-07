import "./App.css";

const App = () => (
  <>
    <div className="app">
      <h1 className="color-palette-heading">Responsive Color Palette</h1>
      <div className="container p-3">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-7 col-xl-3 mb-3">
            <div className="box bg-primary">
              <p className="color-name">Primary</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-6 col-lg-2 col-xl-5 mb-3">
            <div className="box bg-secondary">
              <p className="color-name">Secondary</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-3 col-xl-2 mb-3">
            <div className="box bg-success">
              <p className="color-name">Success</p>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-10 col-lg-3 col-xl-2 mb-3">
            <div className="box bg-info">
              <p className="color-name">Info</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-10 col-lg-7 col-xl-5 mb-3">
            <div className="box bg-warning">
              <p className="color-name">Warning</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-7 mb-3">
            <div className="box bg-danger">
              <p className="color-name">Danger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
