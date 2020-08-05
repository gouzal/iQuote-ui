import { Tag } from './tag.model';
import { Author } from './author.model';

export class Quote
{
    public id?: number;
    public citation: string;
    public visible: boolean;
    public author: Author = new Author;
    public tags: Tag[];
    public createdAt?: Date;
}