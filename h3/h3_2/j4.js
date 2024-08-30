const input = document.querySelector(".inputData");
const btnImage = document.querySelector(".btnimage");
const image  = document.querySelector(".image");
const btnDownload = document.querySelector(".download");

btnImage.addEventListener("click",() => {
    image.src= 'data:image/png;base64,'+input.value;    // sets src attribute
});

// blob: A Blob (Binary Large Object) is a data type that represents raw binary data. It is used to handle binary data, such as files, images, videos, or any other type of large data that is not in text format. 
btnDownload.addEventListener("click", () => {
    fetch(image.src)                                    // Fetches the URL specified in image.src.
        .then(response => response.blob())             // converts image.src into binary representation.
        .then(blob => {
            const blobURL = URL.createObjectURL(blob);  // Creates a temporary URL for the Blob.

            // Purpose of Creating <a> Element: Browsers use <a> elements with the download attribute to trigger file downloads.
            const downloadLink = document.createElement('a');   // <a> tag is created and its href and download attributes are set.
            downloadLink.href = blobURL;
            downloadLink.download = 'image.png'; // Set the desired file name and extension.

            downloadLink.click();       // downloadLink.click(): simulates a click event on the anchor element.

            URL.revokeObjectURL(blobURL);   //  revokes the Blob URL to release memory.
        });
});

const inputCopy = document.querySelector("#inputCopy");
const inputClear = document.querySelector("#inputClear");

inputCopy.addEventListener("click",()=>{
    const content = input.value;  
    navigator.clipboard.writeText(content);
    alert("copied to clipboard!");
})

inputClear.addEventListener("click",()=>{
    input.value='';  
    image.src='';
})