var dog = {
    name: "Marley",
    gender: "Male",
    age: 2,
    breed: "Labrador retriever"
};

for (x in dog) {
    console.log(x + ": " + dog[x])
}