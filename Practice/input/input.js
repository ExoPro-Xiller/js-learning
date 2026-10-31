let filedata = JSON.parse(localStorage.getItem('filedata')) || [];
const fileInput = document.getElementById('fileinput');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    for(const file of files){
        const duplicatefile = filedata.some(existfile => existfile.name === file.name && existfile.size === file.size && existfile.type === file.type && existfile.lastModified === file.lastModified);

        if (!duplicatefile) {
            filedata.push({
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            });
        }else alert(`File ${file.name} already exists in local storage.`);
    }

    localStorage.setItem('filedata', JSON.stringify(filedata));
    console.log("check local storage");
    console.log(filedata);
});
function clearLocalStorage() {
    localStorage.removeItem('filedata');
    filedata = [];
    console.log("Local storage cleared.");
}