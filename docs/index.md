# FieldAdderRemover Documentation

FieldAdderRemover is a JavaScript library for dynamically adding and removing input fields in web forms.

## Table of Contents
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [License](#license)

## Installation
You can install FieldAdderRemover via npm:
```bash
npm install field-adder-remover
```

## Getting Started
To use FieldAdderRemover, include it in your HTML file:
```html
<script src="path/to/field-adder-remover.js"></script>
```

## Usage
FieldAdderRemover provides a simple API for adding and removing input fields. Here's how you can use it:
```javascript
// Add a new input field
FieldAdderRemover.addField('containerId');

// Remove an input field
FieldAdderRemover.removeField('fieldId');
```

## API Reference
### `FieldAdderRemover.addField(containerId)`
Add a new input field to the container with the specified `containerId`.

- `containerId` (string): The ID of the container where the new input field will be added.

### `FieldAdderRemover.removeField(fieldId)`
Remove the input field with the specified `fieldId`.

- `fieldId` (string): The ID of the input field to be removed.

## Examples
For detailed usage examples, please refer to the [examples folder](./examples).

### Adding a New Field
```javascript
// Example of adding a new input field
FieldAdderRemover.addField('formContainer');
```

### Removing a Field
```javascript
// Example of removing an input field
FieldAdderRemover.removeField('inputFieldToRemove');
```

## License
FieldAdderRemover is released under the [MIT License](./LICENSE).
