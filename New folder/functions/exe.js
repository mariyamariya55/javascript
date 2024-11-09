// let tex ="the server is localated at 192.168.1.1 and should b acesed securely.";
// let ipRegex= /\b\d{1,3}
// let match=text.match(ipRegex);
// console.log(match ? "found ip addrss:" + match[0]: "no ip address found");

function isValidIPv4(ip) {
    const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipv4Regex.test(ip);
}
console.log(isValidIPv4("192.168.1.1")); 


let pattern= /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
let ip="192.168.1.1"
console.log(pattern.test(ip));


let pattern1=/hello/
let text1="hello world"
let text=pattern1.exec(text1)
console.log(text);