function toggleFAQ(item) {
    if (!item) {
        console.error('Cannot toggle FAQ item since no item was provided.');
        return;
    }

    if (item.classList.contains('expanded')) {
        item.classList.remove('expanded');
    } else {
        item.classList.add('expanded');
    }
}