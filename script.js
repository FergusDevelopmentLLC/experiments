const images = [
  { src: 'image1.jpg', alt: 'Mountain' },
  { src: 'image2.jpg', alt: 'River' },
  { src: 'image3.jpg', alt: 'Forest' },
  { src: 'image4.jpg', alt: 'Desert' },
  { src: 'image5.jpg', alt: 'Ocean' },
  { src: 'image6.jpg', alt: 'City' },
  { src: 'image7.jpg', alt: 'Beach' },
  { src: 'image8.jpg', alt: 'Lake' },
  { src: 'image9.jpg', alt: 'Sunset' },
  { src: 'image10.jpg', alt: 'Waterfall' }
];

const searchBox = document.getElementById('searchBox');
const gallery = document.getElementById('gallery');

function displayImages(filteredImages) {
  gallery.innerHTML = '';
  filteredImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    gallery.appendChild(imgElement);
  });
}

searchBox.addEventListener('input', function() {
  const searchQuery = searchBox.value.toLowerCase();
  const filteredImages = images.filter(image =>
    image.alt.toLowerCase().includes(searchQuery)
  );
  displayImages(filteredImages);
});

// Initial display of all images
displayImages(images);