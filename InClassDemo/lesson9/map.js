let map = new Map();
map.set(1, "Anna");
map.set(2, "John");
map.set(3, "Tom");

console.log(map.get(1));
map.delete(1)

for (let key of map.keys())
    console.log(key);

for (let v of map.values())
    console.log(v);

console.log(map.size);

map.forEach((k, v, m) => console.log(k, v, m))