
document.getElementById("btn-Submit").addEventListener("click", function(){
    let K = parseInt(document.getElementById("K").value);
    let storage = [10,15,3,7];
    let x = "false";

    for (let i = 0; i < storage.length; i++) {
        for (let j = i+1; j < storage.length; j++ ) {
            if (storage[i] + storage[j] == K){
                x = "true";
            }   
        }
    }

    document.getElementById("output").innerText = x;
});
