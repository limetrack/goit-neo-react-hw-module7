import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contactsSlice';
import styles from './Loading.module.css';

const Loading = () => {
  const loading = useSelector(selectLoading);

  if (!loading) return null;

  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
