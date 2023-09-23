export function InputBox() {
    return (
        <div className={styles.inputBox}>
            <div className={styles.selectedContainer}>
                <div><span>selected 1</span><button type='button'><i className={styles.close}></i></button></div>
                <div><span>selected 2</span><button type='button'><i className={styles.close}></i></button></div>
            </div>
            <input type='text' />
            <button type='button'>
                <i className={styles.downArrow}></i>
            </button>
        </div>
    )
}