document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.f-b1');
    const images = document.querySelectorAll('.ImageItem');
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementsByClassName("close")[0];
    const galleryItems = document.getElementsByClassName("gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            images.forEach(image => {
                if (filter === 'all' || image.classList.contains(filter)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });

    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.getElementsByTagName("img")[0].src;
        };
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});