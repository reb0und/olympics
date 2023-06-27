// stuff here can be called from the html

function createRandomCode(){
    
    // get random thing

    fetch(("https://newmicro-1-b9063375.deta.app/?INKBALLGET=valid&map=all"))
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        data = data.items;

        thedata = data;
    });

    return "ABCDEF";
}