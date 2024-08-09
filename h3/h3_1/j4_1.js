const fileInput = document.getElementById("fileInput");
const baseoutput = document.querySelector(".base64");
const htmloutput = document.querySelector(".html");
const cssoutput = document.querySelector(".css");
const imagePreview = document.querySelector(".image");

fileInput.addEventListener("change",(e) => {
    // console.log(e);
    // 1. 
    const file = fileInput.files[0];             // file[0]: first uploaded file.
    const reader = new FileReader();             // Initializer of FileReader to read the contents of files.

    // 3. 
    reader.addEventListener("load", () =>{      // load: when the file reading by 'readAsDataURL(file)' is complete then this event will execute.
        const result = reader.result; // result: property of the FileReader object that holds the result of reading operation once it's completed.
        const cut = ';base64,'
        const startIndex = result.indexOf(cut)+8;  // indexOf(cut):  returns the index of the first occurrence of a specified value in a string. +8 is done to start the index after ';base64,' which is of 8 characters. This whole line is done to get the index after ';base64,'.
        baseoutput.value= result.slice(startIndex); // slice(): to extract a portion of a string from a given starting index to the end of the string.
        htmloutput.value='<img src=\'' + result + '\'/>';
        cssoutput.value='background-image: url(' + result + ')';
        imagePreview.src=result;
    });

    // 2. 
    reader.readAsDataURL(file);             // readAsDataURL(file): reads the contents of the file and convert it into a base64-encoded data URL. This is a method call to the reader that starts reading the contents of the file you've uploaded.
});

const baseCopy = document.querySelector("#baseCopy");
const htmlCopy = document.querySelector("#htmlCopy");
const cssCopy = document.querySelector("#cssCopy");

baseCopy.addEventListener("click",()=>{
    const content = baseoutput.value;    
    navigator.clipboard.writeText(content);    // navigator.clipboard: object that allows you to interact with the clipboard to read or write data. writeText(content): method used to copy the content to the clipboard
    alert("copied to clipboard!");
})

htmlCopy.addEventListener("click",()=>{
    const content = htmloutput.value;    
    navigator.clipboard.writeText(content);
    alert("copied to clipboard!");
})
cssCopy.addEventListener("click",()=>{
    const content = cssoutput.value;    
    navigator.clipboard.writeText(content);
    alert("copied to clipboard!");
})