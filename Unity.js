class Rat {
    constructor(name) {
        this.name = name; 
        this.unitedRats = [];     
    }

    unite (otherRat) {
        otherRat = new Rat(otherRat);
        this.unitedRats.push(otherRat.name);
    }

    getRats() {
        console.log(this.unitedRats);
    }

    toString() {
        console.log(this.name);
        if (this.unitedRats.length > 0) {
            this.unitedRats.forEach(el => {
                console.log(`##${el.name}`);
            })
        }
    }
}

let firstRat = new Rat("Peter");
firstRat.toString();
firstRat.getRats();
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
firstRat.getRats();
firstRat.toString();