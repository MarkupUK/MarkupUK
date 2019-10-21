# Markup UK webpage build

**DO NOT** edit `*.html` pages in this directory directly!! Your changes will be overwritten by the procedure below.

## To regenerate the HTML pages
1. Make your edits to the relevant XHTML page in `build/`.
1. Run `build/build.xsl` on `sitemap.xml`: there is an oXygen transform scenario named `build-webpages` included for this purpose in `website.xpr`.

## To add a new page
1. Add a `page` to `sitemap.xml`. Its `id` will become the output filename and its content the page title in the top navigation.
1. Author appropriate XHTML content with this filename in `build/`.
1. Run the transform on `sitemap.xml` as described above.

### Notes
- Reused elements of all pages are contained in:
	- `footer.ent`
	- `header.xhtml`
	- `sidebar.xhtml`
	- `topnav.xhtml`
Editing these will apply the changes globally.