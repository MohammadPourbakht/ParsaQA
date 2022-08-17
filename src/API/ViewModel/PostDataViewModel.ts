namespace PostDataViewModel {
    export interface Request {
        Answer: string,
        Question: string,
        Supporting_fact1: string,
        Supporting_fact2: string,
        passage1_id: string,
        passage1_paragraph_id: string,
        passage2_id: string,
        passage2_paragraph_id: string,
    }


    export interface Response {
        objectId: string,
        createdAt: string,
    }
}

export default PostDataViewModel;
