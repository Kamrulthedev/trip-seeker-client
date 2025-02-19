import "./style/BtnPrimaryStyle.css";
export const BtnPrimary = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  return (
    <div className="buttons buttonsWidth">
      <button className="btn">
        <span></span>
        <p data-start="good luck!" data-text={text} data-title={title}></p>
      </button>
    </div>
  );
};

export const BtnPrimaryMini = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  return (
    <div className="buttons buttonsWidth2">
      <button className="btn">
        <span></span>
        <p data-start="good luck!" data-text={text} data-title={title}></p>
      </button>
    </div>
  );
};
