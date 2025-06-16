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

## Proceedings
These are stored and managed in the MUK-proc repository.
1. Add article XML for each paper and create an XInclude-ing wrapper, based on previous years.
1. To generate the HTML output, run the built-in oXygen Webhelp Classic transformation scenario.
1. When publishing, remember to link to the non-frames version of the main page (i.e. `index.html`), so that each paper's distinct URL is displayed in the browser.
