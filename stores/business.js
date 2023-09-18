export const useBusinessStore = defineStore('business', () => {
    const business = ref({});

    function setBusiness(newBusiness) {
        business.value = newBusiness;
    }

    function getBusiness() {
        return business.value;
    }

    function clearBusiness() {
        business.value = {};
    }

    return { business, setBusiness, getBusiness, clearBusiness };
});
