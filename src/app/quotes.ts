export class Quotes {
    showDetails:boolean
    constructor(public id: number,public name: string,public quote: string, public author: string,public publishDate: Date, public upVote:number, public downVote:number){
        this.showDetails = false;

    }
}
