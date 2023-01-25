var styles = ["Rap", "Reggy"]
styles.push("Rock-n-roll")
console.log(styles)

styles.splice(1, 1, "Classic")
console.log(styles)

console.log(styles.splice(0, 1));
console.log(styles)

styles.unshift("Rap", "Reggy")
console.log(styles)