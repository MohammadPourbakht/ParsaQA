import styles from "./styles.module.css";
import logo from "../../Images/logoParsa.png";

interface Props {
    show: boolean
    setshow: any
}

export default function Header({ show , setshow}: Props): JSX.Element  {



    return (
        <div className={styles.div_container}>
            <img src={logo} className={styles.img_logo}/>



            <div className={styles.div_center_header}>
                <span className={styles.text_home} onClick={()=>setshow(true)}>
راهنما              </span>
            </div>

            <div className={styles.div_center_header}>
                <a className={styles.text_home} href={"https://parsaqa.com/fa"}>
سایت پارسا              </a>
            </div>



        </div>
    );
}
