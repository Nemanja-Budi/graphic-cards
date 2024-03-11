import { CommentCustom } from "./comment-custom.model";

export class CommentList {
    count: number;
    results: CommentCustom[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map((comment: any) => new CommentCustom(comment)) || [];
    }
}