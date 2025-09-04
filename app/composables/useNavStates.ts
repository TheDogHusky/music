const isActive = ref(false);

export default function() {
    const toggleActive = () => isActive.value = !isActive.value;

    const setActive = (value: boolean) => isActive.value = value;

    return {
        toggleActive,
        isActive,
        setActive
    }
};