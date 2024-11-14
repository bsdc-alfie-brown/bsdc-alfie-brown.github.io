console.log("g")

const rob = document.getElementById("bob")

let byebob = false;

function downgrade() {
    if (byebob) {
        rob.innerHTML = `<h1>bob</h1>
            <img src="/bobinarob/bob1.png" alt="">`;
    } else {
        rob.innerHTML = `<h1>bob but worse</h1>
            <img src="/bobinarob/Bob2.png" alt="">`;
    }
    byebob = !byebob;
}