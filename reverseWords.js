function reverseWords(string) {
    let reverseWordsArray = [];
    let reverseWordsString = string.split(' ');
    
    reverseWordsString.forEach(word => {
        var reverseWord = '';
        for(var i= word.length-1; i>=0; i--){
            reverseWord += word[i]; 
        }
        reverseWordsArray.push(reverseWord);
        
    });

    return reverseWordsArray.join(' ');
}


console.log(reverseWords("this is a string"));
// siht si a gnirts