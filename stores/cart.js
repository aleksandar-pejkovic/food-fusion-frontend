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

    return { items, addToCart, removeFromCart, clearCart }
})