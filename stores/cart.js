export const useCartStore = defineStore('cart', () => {
    const items = ref(JSON.parse(localStorage.getItem('items')) || [])
    function addToCart(item) {
        items.value.push(item)
        localStorage.setItem('items', JSON.stringify(items.value))
    }
    function removeFromCart(item) {
        const index = items.value.indexOf(item)
        items.value.splice(index, 1)
        localStorage.setItem('items', JSON.stringify(items.value))
    }
    function clearCart() {
        items.value = []
        localStorage.removeItem('items')
    }

    return { items, addToCart, removeFromCart, clearCart }
})