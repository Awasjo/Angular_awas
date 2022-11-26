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

    public toString(): string{
        return `
        Book
        ---------------------------------
        Title       : ${this.title}
        Author      : ${this.author}
        Description : ${this.description}
        Price       : ${this.price}
        Genre       : ${this.genre}
        ---------------------------------
        `;
    }
}