const removeAlphabet = (text)=>{
    let result =''

    for(let i=0 ;i<text.length;i++){
        const asciiValue = text.charCodeAt(i)
        if(asciiValue>47 && asciiValue <58){
            result+=text.charAt(i)
        }
    }

    console.log(result)
}
removeAlphabet('abc573')
removeAlphabet('a5b7c3')