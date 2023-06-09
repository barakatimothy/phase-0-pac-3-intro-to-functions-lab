function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    const my_string = 'HELLO'.toUpperCase();
    console.log(my_string);
}
function logWhisper(){
    const my_whisper = 'hello'.toLocaleLowerCase();
    console.log(my_whisper);
}
function sayHiToHeadphonedRoommate(string){
    
    if ("hello".toLocaleLowerCase())
    {
        return "I can't hear you!";
    }
   
    if ('HELLO'.toUpperCase())
    {
        return "YES INDEED!";
    }
    if ('I would love to!') {
       return  "Let's have dinner together!";
    }
    
}