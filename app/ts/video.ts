export class Video{
    id:number;
    title:string;
    videocode:string;
    desc:string;

    constructor(id:number,title:string,videocode:string,desc:string){
        this.id=id;
        this.title=title;
        this.videocode=videocode;
        this.desc=desc;
    }

}