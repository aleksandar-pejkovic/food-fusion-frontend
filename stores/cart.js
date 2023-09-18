export const useCartStore = defineStore('cart', () => {

    const items = ref([])

    function addToCart(item) {
        items.value.push(item)
    }

    function removeFromCart(item) {
        const index = items.value.indexOf(item)
        items.value.splice(index, 1)
    }

    function clearCart() {
        items.value = []
    }

    function decreaseQuantity(item) {
        const index = items.value.indexOf(item);
        if (index !== -1) {
            const updatedItem = { ...items.value[index] };
            updatedItem.quantity -= 1;
            updatedItem.total -= updatedItem.price
            items.value[index] = updatedItem;
        }
    }

    function increaseQuantity(item) {
        const index = items.value.indexOf(item);
        if (index !== -1) {
            const updatedItem = { ...items.value[index] };
            updatedItem.quantity += 1;
            updatedItem.total += updatedItem.price
            items.value[index] = updatedItem;
        }
    }

    return { items, addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity }
})