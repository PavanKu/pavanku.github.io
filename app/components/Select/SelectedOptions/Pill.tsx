import styles from '../Select.module.css';

type PillProps = {
  label: string;
  onBtnClick: () => void;
};
export function Pill(props: PillProps) {
    const { label, onBtnClick } = props;
  return (
    <div>
      <span>{label}</span>
      <button type="button" onClick={onBtnClick}>
        <i className={styles.close}></i>
      </button>
    </div>
  );
}
