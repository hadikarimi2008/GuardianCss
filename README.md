# GuardianCSS

**A lightweight, utility-first CSS framework for building modern web interfaces.**

GuardianCSS is a CSS framework inspired by the utility-first approach of Tailwind CSS. It allows developers to style HTML elements using utility classes instead of writing custom CSS for every component.

The goal of GuardianCSS is to provide a simple way to style websites using a single CSS file, with no JavaScript required for its core styling functionality.

## Features

* **Utility-First:** Style elements using reusable utility classes.
* **Simple Integration:** Connect GuardianCSS to an HTML project using a single `<link>` tag.
* **No JavaScript Required:** Core styling works with standard CSS.
* **Responsive Design:** Use responsive utility classes when supported by the framework.
* **Lightweight Approach:** Use a standalone CSS file without requiring a build process.
* **Easy to Use:** Apply classes directly to HTML elements.

## Installation

No package installation is required to use the CSS file directly.

### Using the CDN

Add the following line inside the `<head>` section of your HTML document:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/hadikarimi2008/GuardianCss@main/guardian.css"
>
```

This loads the stylesheet directly from the GuardianCSS GitHub repository through jsDelivr.

### Using a Local File

You can also download `guardian.css` and include it in your project:

```html
<link rel="stylesheet" href="./guardian.css">
```

## Usage

Once GuardianCSS is connected, apply the utility classes supported by the framework to your HTML elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuardianCSS Demo</title>

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/hadikarimi2008/GuardianCss@main/guardian.css"
    >
</head>
<body>

    <div class="w-10 h-10 bg-black"></div>

</body>
</html>
```

This example assumes that the `w-10`, `h-10`, and `bg-black` utility classes are implemented in the current GuardianCSS stylesheet.

## Project Structure

```text
GuardianCss/
├── guardian.css
├── index.html
├── scripts/
└── README.md
```

## Browser Support

GuardianCSS uses standard CSS and is intended for modern browsers that support the CSS features implemented in the framework.

## Current Status

GuardianCSS is an independent CSS framework under development. Available utilities and responsive features depend on the current implementation.

## Contributing

Contributions, suggestions, and bug reports are welcome.

If you find a bug or have an idea for a new utility class, feel free to open an issue in the repository.

## License

Choose and add an open-source license before distributing GuardianCSS for reuse by others.

## Author

**Hadi Karimi**

GitHub: [@hadikarimi2008](https://github.com/hadikarimi2008)
