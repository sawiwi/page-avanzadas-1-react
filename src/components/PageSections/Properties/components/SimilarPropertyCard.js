import { useNavigate } from 'react-router-dom';
import { company } from '../../../../constants/consts/company';
import styles from '../../../../styles/components/OutstandingProject/Card.module.css';
import Button from '../../../Button/Button';
import { truncateStringSmall } from '../../../../utils';

const SimilarPropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleIdChange = (newId) => {
    navigate(
      `/propiedades/${newId}?statusId=${company.statusId}&companyId=${company.companyId}`
    );
    window.location.reload();
  };

  return (
    <div className={`${styles.wrapper} flex flex-col xl:grid grid-cols-3`}>
      <div className={styles.card}>
        <img
          src={
            `https://accion.panal.house/images/${property?.id}//1.jpg` ??
            `https://accion.panal.house/images/${property?.id}//2.jpg` ??
            `https://accion.panal.house/images/${property?.id}//3.jpg`
          }
        />

        <div className={styles.info}>
          <h3 className="uppercase rounded-sm text-primary">
            Cod: {property?.id}
          </h3>
          <p className="text-primary text-sm font-bold">
            {truncateStringSmall(property?.title)}
          </p>

          <Button
            onClick={() => {
              handleIdChange(property?.id);
            }}
            className="bg-primary w-100 px-3 my-1 py-1 hover:text-secondary hover:bg-primary-opacity lowercase"
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarPropertyCard;
