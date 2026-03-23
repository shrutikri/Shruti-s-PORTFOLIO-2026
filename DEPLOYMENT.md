# Deploying Your Portfolio to Vercel

Vercel is the optimal platform for React/Vite applications like this one. Follow these simple steps to get your portfolio live:

## Method 1: Using GitHub (Recommended & Easiest)

This method ensures that every time you update your code and push to GitHub, your portfolio will update automatically!

1. **Push your code to GitHub:**
   - Initialize a git repository in this folder if you haven't already:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for Shruti's Portfolio"
     ```
   - Create a new repository on your GitHub account (e.g., `portfolio-2024`).
   - Push your code to this repository.

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com/) and sign up or log in with your GitHub account.
   - Click the "Add New..." button and select "Project".
   - Import the GitHub repository you just created.
   - Vercel will automatically detect that this is a **Vite** project.
   - Leave all the default settings as they are (Build Command: `npm run build`, Output Directory: `dist`).
   - Click **Deploy**.

3. **Success!**
   - Vercel will build your project in seconds. 
   - You will be given a live URL (e.g., `https://shrutiii-kumari-portfolio.vercel.app`).
   - You can share this link with recruiters!

## Method 2: Using Vercel CLI (For Terminal Users)

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Run Vercel in this directory:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Log in when prompted.
   - Set up and deploy the project.
   - Press Enter to accept the defaults for all questions.

## Custom Domains (Optional)
If you own a custom domain (like `shrutikumari.dev`), you can add it for free in the Vercel dashboard under your project's `Settings > Domains`. Feel free to reach out if you need help with this configuration.
