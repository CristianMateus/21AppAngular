export class AgesList {
    ages : Number[] = [];

    getAgesList(): Number[]{
        for(let i=15; i<=80; i++){
            this.ages.push(i);
        }
        return this.ages;
    }
}
