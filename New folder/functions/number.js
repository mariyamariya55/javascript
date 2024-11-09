const number=/(\d{4})-(\d{4})-(\d{4})/;
const string="my birthday is 1234-5678-8211"
const match=string.match(number)
console.log(match)
console.log(match[1]);
console.log(match[2]);
console.log(match[3]);

