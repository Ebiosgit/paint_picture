# Project Blueprint

## Overview

This project is a web application that allows users to upload an image, generate a descriptive prompt using an AI model, and then generate a new image based on that prompt.

## Features

*   **Image Upload:** Users can upload an image from their local machine.
*   **AI Prompt Generation:** An AI model will analyze the uploaded image and generate a textual prompt describing it.
*   **AI Image Generation:** An AI model will generate a new image based on the generated prompt.
*   **User-Friendly Interface:** A clean and intuitive interface for a seamless user experience.
*   **Loading Indicators:** Visual feedback is provided to the user while the AI is processing the request.
*   **Security Explanation:** The user is informed about the security risks of client-side API keys and the need for a backend server.
*   **Custom Prompt Generation:** The application now uses a detailed, multi-step prompt generation rule to create artistic prompts for image generation.
*   **Automatic Image Generation:** The image is now generated automatically after the prompt is created.

## Current Task: Automatic Image Generation

### Plan

1.  **Remove "Generate Image" button:** The user wants the image to be generated automatically. (Completed)
2.  **Update JavaScript logic:** The `generateAIImage` function is now called automatically from `generateAIPrompt`. (Completed)

## Project Status: Frontend Complete with Automatic Image Generation

The frontend of the application is now complete. It provides a functional user interface and simulates the AI-powered image and prompt generation process, with automatic image generation after the prompt is created. The next step would be to build a backend server to handle the API calls to the AI models securely.
