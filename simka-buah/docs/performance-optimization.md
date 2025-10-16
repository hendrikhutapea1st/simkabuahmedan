# Performance and Image Optimization Guide

## WebP Image Conversion

To optimize images for better performance and SEO as required in the app_summary.md, convert your current PNG/JPG images to WebP format.

### How to Convert Images to WebP

1. **Using Online Tools:**
   - Use [Squoosh](https://squoosh.app) by Google
   - Convert all images in the `public/images/` folder to WebP format

2. **Using Command Line (with cwebp installed):**
   ```bash
   cwebp -q 80 Photo\ 1_Up.png -o Photo\ 1_Up.webp
   cwebp -q 80 Photo\ 2_UP.png -o Photo\ 2_UP.webp
   cwebp -q 80 Photo\ 3_UP.png -o Photo\ 3_UP.webp
   cwebp -q 80 Photo\ 4_UP.jpg -o Photo\ 4_UP.webp
   ```

3. **Update image references in Vue components:**
   After converting images to WebP format, update the components to use WebP with fallback to original formats:

   ```html
   <!-- Example using picture element for WebP support -->
   <picture>
     <source :srcset="image.srcWebP" type="image/webp">
     <img :src="image.src" :alt="image.alt" class="w-full h-64 object-cover" loading="lazy">
   </picture>
   ```

### Performance Improvements Implemented

1. **Lazy Loading:** Implemented on all images
2. **Responsive Images:** Using appropriate image sizes
3. **Structured Data:** Added product schema for SEO
4. **Mobile Optimization:** Added mobile-specific meta tags
5. **Accessibility:** Improved ARIA labels and semantic HTML

### Image Directory Structure (after conversion)
```
public/
  images/
    Photo 1_Up.webp
    Photo 2_UP.webp
    Photo 3_UP.webp
    Photo 4_UP.webp
    Photo 1_Up.png (fallback)
    Photo 2_UP.png (fallback)
    Photo 3_UP.png (fallback)
    Photo 4_UP.jpg (fallback)
```

### Image Loading Strategy
1. Use WebP format where supported
2. Provide fallback to original formats
3. Use `loading="lazy"` for off-screen images
4. Consider using `srcset` for responsive images