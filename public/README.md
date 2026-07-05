# Static Assets for Sarom Thavireak's CV

Please place your files here with these exact names:

1. **Your Photo**:
   - Filename: `photo.jpg`
   - Location: `/public/photo.jpg`
   - This file will be served at `/photo.jpg` on your built website and matches the `<img src="photo.jpg">` tag in the code.

2. **Your PDF CV**:
   - Filename: `cv.pdf`
   - Location: `/public/cv.pdf`
   - This file will be served at `/cv.pdf` and will be downloaded when someone clicks the "Download CV" button.

When you deploy to Cloudflare Pages (or compile locally with Vite), files in the `/public` directory are automatically copied to the root of your output `dist` folder.
