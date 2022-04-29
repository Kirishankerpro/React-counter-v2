import "../assets/style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Fait par
        <a
          href="https://github.com/Kirishankerpro?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Kingx{" "}
        </a>
        Au{" "}
        <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
          {" "}
          Reacteur{" "}
        </a>
      </h3>
    </div>
  );
};

export default Footer;
