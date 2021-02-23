
// // Exporting individual features
export let name = "Arcayus", spec = "Warrior", level = 90; 

// // Export list
let name1 = "Galeslie", spec1 = "priest", level1 = 80;
export { name1, spec1, level1 };

let var1 = "Rasek", var2 = "demon hunter", var3 = 60;
// // Renaming exports
export { var1 as name2, var2 as spec2, var3 as level2 };