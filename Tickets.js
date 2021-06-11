function tickets(arr, str) {
    let output = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    arr.forEach(el => {
      let tempArr = el.split('|');
      let temp = new Ticket(tempArr[0], tempArr[1], tempArr[2]);
      output.push(temp);
      temp = new Ticket();
    });

    if (str == 'destination'){
        console.log(output.sort((a, b) => {
            if (a.destination > b.destination) {
                return +1;
            } else if (a.destination < b.destination){
                return -1;
            } else {
                return 0;
            }
        })); 
    } else if (str == 'status'){
        console.log(output.sort((a, b) => {
            if (a.status > b.status) {
                return +1;
            } else if (a.status < b.status){
                return -1;
            } else {
                return 0;
            }
        })); 
    } else if (str == 'price'){
        console.log(output.sort((a, b) => {
            if (Number(a.price) > Number(b.price)) {
                return +1;
            } else if (Number(a.price) < Number(b.price)){
                return -1;
            } else {
                return 0;
            }
        })); 
    }
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price');