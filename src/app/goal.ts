export class Goal {
    // id: number;
    // name: string;
    // description: string;
    // showDescription: boolean;
    // ------------- enable us to toggle between showing and hiding a goal description. -----------------------------------
    // showDescription: boolean;
    // constructor(public id: number,public name: string,public description: string){
    //   this.showDescription=false;
    // }
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showDescription=false;
    }
  }

   