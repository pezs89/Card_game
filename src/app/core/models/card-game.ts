import { Card } from "./card";

export interface CardGame {
    id: string;
    steps: number;
    cards: Card[];
}