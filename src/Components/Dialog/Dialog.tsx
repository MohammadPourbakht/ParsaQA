import styles from "./styles.module.css";

interface Props {
    show: boolean
    text: string
    successSave: boolean
}

export default function Dialog({ show , text , successSave}: Props): JSX.Element {
    return (
        <div className={show?styles.div_container  :styles.div_dialog_hide}
             style={{
            backgroundColor: successSave? "rgb(3,72,75)" : "#d95757",
        }}>
              <span className={styles.text}>
                  {text}
                </span>

        </div>
    );

}
