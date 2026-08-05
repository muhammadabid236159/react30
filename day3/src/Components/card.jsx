export function Cards() {
  return (
    <div className="container mt-5">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://picsum.photos/400/250?random=1"
              className="card-img-top"
              alt="React"
            />

            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">
                Learn React by building real-world projects.
              </p>
              <button className="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://picsum.photos/400/250?random=2"
              className="card-img-top"
              alt="Bootstrap"
            />

            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
                Build responsive websites quickly.
              </p>
              <button className="btn btn-success">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://picsum.photos/400/250?random=3"
              className="card-img-top"
              alt="JavaScript"
            />

            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                Learn modern JavaScript with practical examples.
              </p>
              <button className="btn btn-danger">
                Start
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}