const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geriy", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel c", nickname: "sporty"},
    {name: "Victoria", nickname: "Posh"}
]
const spiceGirls = {
    albums: ["spice", "spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
}


const names = spices.map(spice => spice.name);
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
const endInY = spices.filter(spice => spice.name.endsWith("y"));
console.log(endInY);