var container = document.getElementById("blog-rss-embed");
if (container) {
    var css = document.createElement('link');
    css.href = "./stylesheets/blog.css";
    css.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(css);
    var script = document.createElement('script');
    script.src = "./javascripts/blog.js";
    document.getElementsByTagName('body')[0].appendChild(script);
}