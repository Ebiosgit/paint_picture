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
            const securityWarning = `
                For security reasons, making API calls with secret keys directly from the browser (client-side) is not recommended. 
                Your API keys could be exposed and misused.

                The recommended solution is to create a backend server that receives the image, makes the API call to the AI service, 
                and then sends the result back to the browser.

                For this demo, we are simulating the API call with a predefined prompt.
            `;
            console.warn(securityWarning);

            // Simulate an API call to analyze the image and generate the prompt
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Step 1 & 2: Hypothetical Analysis & Matching
            const analysis = {
                실사_피사체: "한 사람이 서 있는 모습",
                배경_요소들: "해변과 바다",
                하늘_여백: "푸른 하늘",
                피사체: "사람",
                추천_낙서_요소_하늘: ["장난스러운 구름", "반짝이는 별 몇 개"],
                추천_낙서_요소_피사체: ["머리 위에 작은 왕관", "발 주변에 물결 라인"],
            };

            // Step 3 & 4: Style and Contrast are defined in the template.

            // Step 5: Final Prompt Generation
            const prompt = `업로드한 원본 사진의 고유한 밝기, 색감, 조명 분위기와 [${analysis.실사_피사체}]는 수정 없이 완벽하게 원본 그대로 유지합니다. 이 사진 위에 손으로 그린 듯한 [삐뚤빼뚤한 색연필 질감의 스케치] 스타일의 라인 드로잉과 낙서 요소들을 오버레이 합니다. [${analysis.배경_요소들}]을 검은색 외곽선 스케치와 색연필 질감으로 표현하고, [${analysis.하늘_여백}]에는 [${analysis.추천_낙서_요소_하늘.join(", ")}]들을 추가하고, [${analysis.피사체}]에도 [${analysis.추천_낙서_요소_피사체.join(", ")}]을 추가해 주세요. 실사와 드로잉이 조화를 이루는 감성적인 포스터 스타일로 생성해 주세요.`;

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
