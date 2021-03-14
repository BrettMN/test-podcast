module.exports = class Base {
  data() {
    return {};
  }

  render(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Podcast Site</title>
    </head>
    <body>
        ${data.content}
    </body>
    </html>
      `;
  }
};
