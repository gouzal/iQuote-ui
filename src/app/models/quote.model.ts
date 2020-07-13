import { Tag } from './tag.model';

export class Quote
{
    constructor(
        public id: number,
        public quote: string,
        public visible: boolean,
        public author: string,
        public tags?: Tag[]
    ) {}
}