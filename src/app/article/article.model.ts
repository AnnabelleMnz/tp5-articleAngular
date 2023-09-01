export class Article {
    votes: number;
    title:string;
    link:string;

    constructor(title:string,link:string, votes?: number){
        this.link= link;
        this.votes=votes || 0;
        this.title=title;
    }

    voteUp(){
        this.votes+=1;
    }

    voteDown(){
        this.votes-=1;
    }
}
