import styles from "./styles.module.css";
import Header from "../Components/Header/Header";
import HelpModal from "../Components/HelpModal/helpModal";
import {useState} from "react";
import API from "../API";
import Dialog from "../Components/Dialog/Dialog";



export default function Home() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");

    const [passageId1, setPassageId1] = useState("");
    const [passageId2, setPassageId2] = useState("");

    const [paragraphId1, setParagraphId1] = useState(0);
    const [paragraphId2, setParagraphId2] = useState(0);

    const [showDialog, setShowDialog] = useState(false);
    const [successSave, setSuccessSave] = useState(false);
    const [dialogText, setDialogText] = useState("");



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
                console.log("Get then")
                console.log(response);
                setTitle1(response.paragraph1.title)
                setText1(response.paragraph1.text);
                setTitle2(response.paragraph2.title)
                setText2(response.paragraph2.text)

                setPassageId1(response.paragraph1.passage1_id)
                setPassageId2(response.paragraph2.passage2_id)
                setParagraphId1(response.paragraph1.passage1_paragraph_id)
                setParagraphId2(response.paragraph2.passage2_paragraph_id)
            })
            .catch((response) => {
                console.log("Get catch")
                console.log(response);
            });
    };


    const onSaveClick = (e: any) => {
        e.preventDefault();

        API.PostDataDomain.PostData({
            Answer: input2,
            Question: input1,
            Supporting_fact1: input3,
            Supporting_fact2: input4,

            passage1_id: passageId1,
            passage1_paragraph_id: paragraphId1.toString(),
            passage2_id: passageId2,
            passage2_paragraph_id: paragraphId2.toString(),

        })

            .then(async (response) => {
                console.log("Post then")
                console.log(response);

                setSuccessSave(true);
                setShowDialog(true);
                setDialogText("اطلاعات با موفقیت ذخیره شد")
                setInput1("");
                setInput2("");
                setInput3("");
                setInput4("");
                await new Promise(f => setTimeout(f, 3000));
                setShowDialog(false);


            })
            .catch(async (response) => {
                console.log("Post catch")
                console.log(response);

                if (response.toJSON().status === 201) {
                    setSuccessSave(true);
                    setShowDialog(true);
                    setDialogText("اطلاعات با موفقیت ذخیره شد")
                    setInput1("");
                    setInput2("");
                    setInput3("");
                    setInput4("");
                    await new Promise(f => setTimeout(f, 3000));
                    setShowDialog(false);
                }

                else if(response.toJSON().status === 400 || response.toJSON().status === 401){
                    setSuccessSave(false);
                    setShowDialog(true);
                    setDialogText("ذخیره اطلاعات با خطا همراه بود")
                    await new Promise(f => setTimeout(f, 3000));
                    setShowDialog(false);
                }

            });
    };



    return (
        <div className={styles.div_container}
             style={{
            height: visible===true?"100vh" : "100%" ,
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
                        {title1}

             </span>

                    <span className={styles.text_right}>
                        {text1}
                        </span>
                </div>

                <div className={styles.div_space}>
                </div>


                <div className={styles.div_right}>
                    <span className={styles.text_right_title}>
                        {title2}
           </span>

                    <span className={styles.text_right}>
                        {text2}
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
                        onChange={(e) => setInput1(e.target.value)}
                        value={input1}
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
                        onChange={(e) => setInput2(e.target.value)}
                        value={input2}
                    />

                </div>

                <div className={styles.div_box_question}>
                    <span className={styles.text_question}>
شماره جملاتی از پاراگراف سمت راست که برای پیدا کردن جواب نیاز است را وارد کنید                </span>

                    <input
                        className={styles.input_question}
                        placeholder={"شماره جملات پاراگراف سمت راست ..."}
                        required
                        onChange={(e) => setInput3(e.target.value)}
                        value={input3}
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
                        onChange={(e) => setInput4(e.target.value)}
                        value={input4}
                    />

                </div>
            </div>


            <div className={styles.div_save}>
                <button className={styles.button_save} onClick={onSaveClick}>ذخیره</button>
            </div>

            </body>

            <div className={styles.div_dialog}>
            <Dialog show={showDialog} text={dialogText} successSave={successSave}/>
            </div>

        </div>
    );
}
