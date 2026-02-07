"use strict";
// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
var inventory = [];
function addItem(itemId, itemName, quantity, isAvailable) {
    var itemDetails = [itemName, quantity, isAvailable];
    var newItem = {
        itemId: itemId,
        details: itemDetails
    };
    inventory.push(newItem);
    return newItem;
}
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
function updateStock(itemId, quantity) {
    var item = inventory.find(function (i) { return i.itemId === itemId; });
    if (!item) {
        return "Item with ID ".concat(itemId, " does not exist.");
    }
    var updatedDetails = [item.details[0], quantity, item.details[2]];
    var updatedItem = {
        itemId: item.itemId,
        details: updatedDetails
    };
    var index = inventory.findIndex(function (i) { return i.itemId === itemId; });
    inventory[index] = updatedItem;
    return "Stock updated for ".concat(item.details[0], ", new quantity: ").concat(quantity);
}
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
function checkStock(itemId) {
    var item = inventory.find(function (i) { return i.itemId === itemId; });
    if (!item) {
        throw new Error("Item with ID ".concat(itemId, " does not exist."));
    }
    return item.details[2];
}
// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
