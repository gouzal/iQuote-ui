import { Tag } from './tag.model';
import { Author } from './author.model';

export class Quote
{
    public id?: number;
    public createdAt?: Date;

    constructor(
        public citation: string,
        public visible: boolean,
        public author: Author,
        public tags: Tag[]
    ) {}
}