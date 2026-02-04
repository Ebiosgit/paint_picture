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

## Current Task: Implement New Prompt Generation Rules

### Plan

1.  **Understand the new prompt generation rules:** The user has provided a detailed, multi-step process for generating prompts. (Completed)
2.  **Update `generateAIPrompt` function:** Modify the JavaScript to generate a prompt based on the new rules, using a hypothetical image analysis as a placeholder. (Completed)
3.  **Keep security warnings:** The explanation about the risks of client-side API calls is maintained. (Completed)

## Project Status: Frontend Complete with Advanced Prompting

The frontend of the application is now complete. It provides a functional user interface and simulates the AI-powered image and prompt generation process, including a sophisticated, rule-based prompt generation system. The next step would be to build a backend server to handle the API calls to the AI models securely.