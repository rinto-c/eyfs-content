/* globals CMS:true */

CMS.registerEditorComponent({
  id: "highlight-statistic-headline",
  label: "Highlight Statisic Headline",
  fields: [{ name: "body", label: "Content", widget: "string" }],
  pattern: /^{stat-headline}([\w|\W|\n]*){\/stat-headline}$/,
  fromBlock: function (match) {
    return {
      body: match[1],
    };
  },
  toBlock: function (obj) {
    return ["{stat-headline}", obj.body, "{/stat-headline}"].join("\n");
  },
  toPreview: function (obj) {
    var str = [
      '<aside class="stat-headline">',
      "  <p>",
      obj.body,
      "  </p>",
      "</aside>",
    ].join("\n");
    return str;
  },
});
