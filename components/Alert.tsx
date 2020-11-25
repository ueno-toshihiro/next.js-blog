import styles from './alert.module.scss';
import cn from 'classnames';

type AlertPropsType = {
  children: React.ReactNode;
  type: 'success' | 'error';
};

export default function Alert({ children, type }: AlertPropsType): JSX.Element {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
