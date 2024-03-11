import { Card } from "./card.model";

export class CardList {
    count: number;
    results: Card[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map((cards: any) => new Card(cards)) || [];
    }
}