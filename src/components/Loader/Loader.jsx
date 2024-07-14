import { BarLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BarLoader color="red" height={8} />
    </div>
  );
};
