document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const uploadedImage = document.getElementById('uploaded-image');
    const generatedPrompt = document.getElementById('generated-prompt');
    const generatedImage = document.getElementById('generated-image');
    const imagePreview = document.getElementById('image-preview');
    const imageResult = document.getElementById('image-result');
    const generatePromptBtn = document.getElementById('generate-prompt-btn');
    const generateImageBtn = document.getElementById('generate-image-btn');
    const promptLoader = document.getElementById('prompt-loader');
    const imageLoader = document.getElementById('image-loader');

    let uploadedImageData = null;

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
                uploadedImageData = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    generatePromptBtn.addEventListener('click', () => {
        if (uploadedImageData) {
            generateAIPrompt(uploadedImageData);
        } else {
            alert('Please upload an image first.');
        }
    });

    generateImageBtn.addEventListener('click', () => {
        const prompt = generatedPrompt.textContent;
        if (prompt && prompt !== 'Your generated prompt will appear here.') {
            generateAIImage(prompt);
        } else {
            alert('Please generate a prompt first.');
        }
    });

    async function generateAIPrompt(imageData) {
        promptLoader.style.display = 'block';
        generatedPrompt.style.display = 'none';

        try {
            // IMPORTANT: Security Risk Explanation
            const explanation = `
                For security reasons, making API calls with secret keys directly from the browser (client-side) is not recommended. 
                Your API keys could be exposed and misused.

                The recommended solution is to create a backend server that receives the image, makes the API call to the AI service, 
                and then sends the result back to the browser.

                For this demo, we are simulating the API call.
            `;
            console.warn(explanation);
            generatedPrompt.textContent = explanation;
            // Simulate an API call
            await new Promise(resolve => setTimeout(resolve, 5000));
            const prompt = 'A beautiful landscape with mountains and a lake.';
            generatedPrompt.textContent = prompt;
        } catch (error) {
            console.error('Error generating AI prompt:', error);
            generatedPrompt.textContent = 'Error generating prompt. Please try again.';
        } finally {
            promptLoader.style.display = 'none';
            generatedPrompt.style.display = 'block';
        }
    }

    async function generateAIImage(prompt) {
        imageLoader.style.display = 'block';
        generatedImage.style.display = 'none';

        try {
            // IMPORTANT: Security Risk Explanation
            const explanation = `
                As mentioned before, a backend server is the secure way to handle API calls for image generation.
                For this demo, we are using a placeholder image generated from the prompt.
            `;
            console.warn(explanation);
            // Simulate an API call
            await new Promise(resolve => setTimeout(resolve, 5000));
            const placeholderImageUrl = `https://via.placeholder.com/400x300.png?text=${encodeURIComponent(prompt)}`;
            generatedImage.src = placeholderImageUrl;
        } catch (error) {
            console.error('Error generating AI image:', error);
        } finally {
            imageLoader.style.display = 'none';
            generatedImage.style.display = 'block';
        }
    }
});
