import { Tag } from './tag.model';

export class Quote
{
    id: number;
    quote: string;
    visible: boolean;
    author: string;
    tags?: Tag[];
}