import "./style/ProgressbarStyle.css";

const Progressbar = () => {
  return (
    <>
      <div>
        <div className="progress progress-striped active">
          <div
            role="progressbar"
            style={{ width: "80%" }}
            className="progress-bar progress-bar-danger"
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
