import {Get, Patch,  PutByToken,PostByToken} from "../fetch";
import getText from "../ViewModel/GetTextViewModel";


async function GetText() {
    return await Get<getText.Response>("");
}


const Account = {
    GetText
};
export default Account;
