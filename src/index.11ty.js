module.exports = class Base {
  data() {
    return {
      layout: 'base.11ty.js',
    };
  }

  render(data) {
    let list = data.collections.episode
      .map((e) => {
        return `<li><a href="${e.url}">${e.data.title}</a></li>`;
      })
      .join('');

    console.log({ list });
    return `
        <ol>
        ${list}
        </ol> 
    `;
  }
};
