# LAAX OPEN Notfall-Seite

This repository contains the files for a "Notfall-Seite" (maintenance page) for the LAAX OPEN website. It's designed to be hosted on Cloudflare and can be quickly switched on in case of website issues, while still displaying the live Vimeo feed.

## Structure

The page consists of the following files:

*   **`index.html`:**  The main HTML structure of the maintenance page. It includes:
    *   A header with the LAAX OPEN logo (referenced as `laaxopen_logo.png`).
    *   A message indicating maintenance work.
    *   An embedded Vimeo live feed iframe (`https://vimeo.com/event/4842374/embed`).
    *   A simple footer.
*   **`style.css`:** CSS file for styling the page, providing a clean and responsive design aligned with the LAAX OPEN brand.

## Setup

The recommended way to deploy this page is using **Cloudflare Pages**:

1.  **Cloudflare Pages Project:** Create a new project in Cloudflare Pages.
2.  **Connect to Git:** Link your Cloudflare Pages project to the GitHub repository where these files are stored.
3.  **Automatic Deployment:** Cloudflare Pages will automatically build and deploy your website whenever changes are pushed to the repository.
4.  **Custom Domain (Optional):** Configure a custom domain for the maintenance page if needed.

**Alternative: Cloudflare Workers**

Instructions for setting up with Workers is also possible, you need to create a worker and paste the HTML code into it. Further you need to add the styling in a public available space, like github or another webserver and adapt the URL in the HTML code.

## Switching to the Maintenance Page

*   **Cloudflare Pages:**  To activate the maintenance page, push the changes to the connected Git repository. To deactivate, revert to the previous state of the main website.
*   **Cloudflare Workers:** Activate or deactivate the route pointing to the worker that serves the maintenance page.
*   **DNS:** Alternatively, create a separate DNS record (e.g., `notfall.laaxopen.com`) pointing to the maintenance page and activate/deactivate this record as needed.

## Important Notes

*   **Logo:** Ensure the LAAX OPEN logo (`laaxopen_logo.png`) is present in the same directory as the HTML. Update the `img` tag's `src` attribute if necessary. You can find it here: `https://laaxopen.com/wp-content/uploads/2024/09/LAAXOPEN_ZALANDO_RGB_neg.png`
*   **Vimeo Feed:** Verify that the Vimeo iframe URL (`https://vimeo.com/event/4842374/embed`) is correct and points to the desired live stream.
*   **Caching:** It's recommended to configure Cloudflare to **not cache** the maintenance page, ensuring visitors always see the latest version.
*   **Styling:** You can further customize the `style.css` to better match the LAAX OPEN website's look and feel.
*   **Responsiveness:**  The provided CSS aims for a responsive design. Test the page on different devices to ensure it displays correctly across various screen sizes.