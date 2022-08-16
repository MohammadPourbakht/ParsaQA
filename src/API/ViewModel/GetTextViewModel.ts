namespace GetTextViewModel {
    export interface Request {

    }

    interface Result1 {
        passage1_id: string,
        passage1_paragraph_id: number,
        text: string,
        title: string,
    }

    interface Result2 {
        passage2_id: string,
        passage2_paragraph_id: number,
        text: string,
        title: string,
    }

    export interface Response {
        paragraph1: Result1,
        paragraph2: Result2,
    }
}

export default GetTextViewModel;
