import styles from "./styles.module.css";
import Header from "../Components/Header/Header";
import refresh from "../Images/refresh.jpg";
import HelpModal from "../Components/HelpModal/helpModal";
import {useState} from "react";
import API from "../API";

export default function Home() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const changeHeader = () => {
        if (window.scrollY > 0) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };
    window.addEventListener("scroll", changeHeader);


    const onProduceText = (e: any) => {
        e.preventDefault();

        API.getTextDomain.GetText()
            .then((response) => {
                console.log(response);
            })
            .catch((response) => {
                console.log(response);
            });
    };



    return (
        <div className={styles.div_container}
             style={{
            height: visible==true?"100vh" : "100%" ,
        }}>
            <HelpModal show={show} setshow={setShow}/>

            <Header show={show} setshow={setShow} />


            <body className={styles.body}>

            <div className={styles.div_readHelp}>
            <span className={styles.text_readHelp}>
                    لطفا قبل از تولید نمونه داده، متن "راهنما" را مطالعه بفرمایید.
                </span>
            </div>


            <div className={styles.div_refresh}>
                <button className={styles.button_refresh}
                onClick={onProduceText}>تولید نمونه جدید</button>
            </div>

            <div className={styles.div_row_span}>

                <div className={styles.div_right}>
                    <span className={styles.text_right_title}>
شیخ عبدالکریم خوئینى زنجانی             </span>

                    <span className={styles.text_right}>
[1]آیت الله شیخ عبدالکریم خوئینى زنجانى (۱۳۱۷-۱۲۹۱ ق) فقیهى بزرگ و پارسائى پرهیزگار و متخلق به اخلاق الهى بود. [2]وی صاحب اجازاتى از میرزا محمدتقى شیرازى، آخوند خراسانى و شیخ الشریعه اصفهانى بوده است. [3]آن مرحوم علاوه بر تدریس علوم دینی در حوزه علمیه زنجان و قم، در مشکل‌گشایى کار مردم کوشا و به نیکى و خیراندیشى مشهور بودند. [4]عبدالکریم خوئینى زنجانى، در حدود سال ۱۲۹۱ قمرى در شهر خوئین (۸ فرسخى زنجان) مى باشد، در خانواده اى روحانى به دنیا آمد و در سنین کودکى پا به مکتب گذاشت و تحصیلات ابتدایى را در مکتب‌خانه به پایان رساند. [5]پدرش، حجة الاسلام شیخ ملا ابراهیم بن اسحق از شاگردان شیخ انصارى و مادرش مجتهده مطهره، صبیه آیت الله آقا شیخ عبدالکریم روغنى قزوینى مى باشد. [6]آن بانوى بزرگوار علاوه بر این که دختر مجتهد بود، خود نیز تحصیلات عالیه داشت و آن گونه که نقل شده، در درس خارج پدرش در پس پرده حاضر مى شد و استفاده مى کرد.             </span>

                </div>

                <div className={styles.div_space}>
                </div>


                <div className={styles.div_right}>
                    <span className={styles.text_right_title}>
تشیع           </span>

                    <span className={styles.text_right}>
[1]جانشینی محمدvteتشیع: از ریشۀ شیعه است. [2]شیعه به معنای گروه و جمعیت، گروه پیرو، هواداران و پیروان است. [3]شیعه در اصطلاح دینی به گروهی از مسلمانان گفته می‌شود که هم به علی(ع) و اهل بیت پیامبر محبت و عشق می‌ورزند، هم آنان را با امر و نصّ الهی و نصب پیامبر، جانشینان بر حق و بلا فصل رسول خدا(ص) می‌شناسند و هم به امامت و پیشوایی امامان معصوم در همۀ زمینه‌ها گردن می‌نهند. [4]چنین اعتقادی تشیّع نامیده می‌شود. [5]امام خمینی، احیاگر شیعه در قرن حاضر می‌فرماید: ما مفتخریم که پیرو مذهبی هستیم که رسول خدا(ص) مؤسّس آن به امر خداوند تعالی بوده و امیر المؤمنین علی بن طالب(ع) این بندۀ رها شده از تمام قیود، مأمور رهاکردن بشر از تمام اغلال و بردگی‌هاست.
                </span>
                    </div>
            </div>

            <div className={styles.div_box}>

                <div className={styles.div_box_question}>
                    <span className={styles.text_question}>
متن سوال را وارد کنید
                </span>

                    <input
                        className={styles.input_question}
                        placeholder={"متن سوال ..."}
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                </div>



                <div className={styles.div_box_question}>
                    <span className={styles.text_question}>
پاسخ سوال را وارد کنید
                </span>

                    <input
                        className={styles.input_question}
                        placeholder={"پاسخ سوال ..."}
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className={styles.div_box_question}>
                    <span className={styles.text_question}>
شماره جملاتی از پاراگراف سمت راست که برای پیدا کردن جواب نیاز است را وارد کنید                </span>

                    <input
                        className={styles.input_question}
                        placeholder={"شماره جملات پاراگراف سمت راست ..."}
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                </div>


                <div className={styles.div_box_question}>
                    <span className={styles.text_question}>
شماره جملاتی از پاراگراف سمت چپ که برای پیدا کردن جواب نیاز است را وارد کنید
                </span>

                    <input
                        className={styles.input_question}
                        placeholder={"شماره جملات پاراگراف سمت چپ ..."}
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
            </div>

            <div className={styles.div_save}>
                <button className={styles.button_save}>ذخیره</button>
            </div>



            </body>
        </div>
    );
}
