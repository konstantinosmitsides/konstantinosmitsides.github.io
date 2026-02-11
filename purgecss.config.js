module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    "about-section",
    "profile-col",
    "bio-col",
    "img-fluid",
    "z-depth-1",
    "rounded",
    "rounded-circle",
  ],
};
