export default function createUploadImage() {
    const uploadImage = (inputFile, previewImage) => {
        inputFile.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', function () {
                    previewImage.setAttribute('src', this.result);
                });
                reader.readAsDataURL(file);
            }
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        const uploadImageEls = document.querySelectorAll('.upload-image');
        uploadImageEls.forEach(el => {
            const inputFile = el.querySelector('.upload-image-input');
            const previewImage = el.querySelector('.upload-image-preview');
            if (inputFile && previewImage) {
                uploadImage(inputFile, previewImage);
            }
        });
    });
}