// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.

type ItemDetails = [itemName: string, quantity: number, isAvailable: boolean]

type InventoryItem = {
  itemId: number;
  details: ItemDetails;
}

let inventory: InventoryItem[] = [];

function addItem(itemId:number, itemName:string, quantity:number, isAvailable:boolean): InventoryItem {
  const itemDetails: ItemDetails = [itemName, quantity, isAvailable];
  const newItem: InventoryItem = {
    itemId,
    details: itemDetails
  };
  inventory.push(newItem);
  return newItem;
}
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
function updateStock(itemId:number, quantity:number):string {
    const item = inventory.find(i => i.itemId === itemId);
    if (!item) {
      return `Item with ID ${itemId} does not exist.`;
    }

    const updatedDetails: ItemDetails = [item.details[0], quantity, item.details[2]];
    const updatedItem: InventoryItem = {
      itemId: item.itemId,
      details: updatedDetails
    };

    const index = inventory.findIndex(i => i.itemId === itemId);
    inventory[index] = updatedItem;
    return `Stock updated for ${item.details[0]}, new quantity: ${quantity}`;
  }

// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
function checkStock(itemId:number): boolean {
  const item = inventory.find(i => i.itemId === itemId);
  if (!item) {
    throw new Error(`Item with ID ${itemId} does not exist.`);
  }
  return item.details[2];
}

// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)) // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)) // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)) // true
