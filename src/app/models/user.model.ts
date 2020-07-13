export class User
{
    id: number;
    role: string;
    token?: string;

    constructor(
        public userName: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string
    ) {}
}