<template>
    <div>
        <h1>Redirecting...</h1>
    </div>
</template>
  
<script setup>
import { useBusinessStore } from '@/stores/business';

const businessStore = useBusinessStore()
const route = useRoute();
const businessId = route.params.id;
const router = useRouter()

const baseUrl = useBaseUrl().value
const { data: business } = await useFetch(`${baseUrl}/businesses/${businessId}`, { method: 'GET' })
businessStore.setBusiness(business.value)
router.push('/')
</script>