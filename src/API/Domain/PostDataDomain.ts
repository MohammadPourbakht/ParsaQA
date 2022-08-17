import PostDataViewModel from "../ViewModel/PostDataViewModel";
import { Post } from "../fetch";

async function PostData(arg: PostDataViewModel.Request) {
    return await Post<PostDataViewModel.Response>( arg);
}

const Account = { PostData };
export default Account;