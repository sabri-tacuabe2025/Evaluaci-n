document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const navLinks = document.querySelectorAll('header nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            const targetId = e.target.getAttribute('href').substring(1); // Get target section ID

            // Remove 'active' class from all nav links and tab contents
            navLinks.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Add 'active' class to the clicked nav link and its corresponding tab content
            e.target.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Product filtering functionality
    const categoryFilters = document.querySelectorAll('.category-filter ul li a');
    const garmentFilters = document.querySelectorAll('.garment-filter ul li a'); // Assuming you add garment filters in HTML
    const productItems = document.querySelectorAll('.product-item');

    // Function to apply filters
    const applyFilters = () => {
        const activeCategory = document.querySelector('.category-filter ul li a.filter-active')?.dataset.category || 'all';
        const activeGarment = document.querySelector('.garment-filter ul li a.filter-active')?.dataset.garment || 'all'; // If garment filters exist

        productItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const itemGarment = item.dataset.garment;

            const categoryMatch = (activeCategory === 'all' || itemCategory === activeCategory);
            const garmentMatch = (activeGarment === 'all' || itemGarment === activeGarment);

            if (categoryMatch && garmentMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Event listeners for category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            categoryFilters.forEach(f => f.classList.remove('filter-active'));
            e.target.classList.add('filter-active');
            applyFilters();
        });
    });

    // Event listeners for garment filters (if you add them in HTML)
    // garmentFilters.forEach(filter => {
    //     filter.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         garmentFilters.forEach(f => f.classList.remove('filter-active'));
    //         e.target.classList.add('filter-active');
    //         applyFilters();
    //     });
    // });

    // Initialize the display of the first tab
    document.querySelector('header nav ul li a').click();
    applyFilters(); // Apply initial filters on page load
});
