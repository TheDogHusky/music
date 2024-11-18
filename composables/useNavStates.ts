const isActive = ref(false);

export default function() {
    const toggleActive = () => isActive.value = !isActive.value;

    return {
        toggleActive,
        isActive
    }
};