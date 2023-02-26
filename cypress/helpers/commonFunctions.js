class commonFucntions{

    static generate_random_string(string_length) {
        let random_string = 'Automation 5.9.0.11'+' ';
        let random_ascii;
        for(let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }

    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

}
export default commonFucntions