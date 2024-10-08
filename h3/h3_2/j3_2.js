const input = document.querySelector(".inputData");
const btnImage = document.querySelector(".btnimage");
const image  = document.querySelector(".image");
const btnDownload = document.querySelector(".download");

btnImage.addEventListener("click",() => {
    image.src= 'data:image/png;base64,'+input.value;
});

btnDownload.addEventListener("click", () => {
    fetch(image.src)
        .then(response => response.blob())             // converts image.src into binary representation.
        .then(blob => {
            const blobURL = URL.createObjectURL(blob);  // Creates a temporary URL for the Blob.

            const downloadLink = document.createElement('a');
            downloadLink.href = blobURL;
            downloadLink.download = 'image.png';

            downloadLink.click();

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