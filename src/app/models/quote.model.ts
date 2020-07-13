import { Tag } from './tag.model';

export class Quote
{
    public id?: number;

    constructor(
        public quote: string,
        public visible: boolean,
        public author: string,
        public tags: Tag[]
    ) {}
}