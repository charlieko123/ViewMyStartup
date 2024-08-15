import styles from "./CompanyCard.module.css";
import deleteIcon from "../assets/images/ic_delete_button.svg";

const CompanyCard = ({ name, category, logoSrc, onDelete }) => {
  return (
    <div className={styles.CompanyCard}>
      <img
        src={deleteIcon}
        alt="delete button"
        className={styles.deleteButton}
        onClick={onDelete}
      />
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt={`${name} logo`} className={styles.logo} />
      </div>
      <p className={styles.companyName}>{name}</p>
      <p className={styles.companyCategory}>{category}</p>
    </div>
  );
};

export default CompanyCard;
