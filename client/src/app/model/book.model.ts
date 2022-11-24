export class Book
{
    constructor(
        public _id?: number,
        public title?: string,
        public description?: string,
        public price?: number,
        public author?: string,
        public genre?: string
    ){}
}