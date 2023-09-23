import styles from '../Select.module.css';

type DropDownBtnProps = {
    status: boolean,
    onToggle: () => void
}

export default function DownArrowBtn(props: DropDownBtnProps) {
    const { status, onToggle } = props;
    return (
        <button type='button' onClick={onToggle}>
            {!status && <i className={styles.downArrow}></i>}
            {status && <i className={styles.upArrow}></i>}
        </button>
    );
}