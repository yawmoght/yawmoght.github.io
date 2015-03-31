/**
 * Created by yawmoght on 31/03/2015.
 */
//paths
var base = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')); //adapted from http://stackoverflow.com/questions/3151436/how-can-i-get-the-current-directory-name-in-javascript
var paths = {
    include: base + '/js/include.js',
    sidebar: base + '/views/sidebar.html',
    //base templates
    //postTemplate:base+'/views/post.html',
    postTemplate: '../Tras%20las%20teclas/views/post.html',
    //statics
    license: base + '/views/license.html',
    minlicense: base + '/views/minlicense.html',
    //javascript
    loadpost: base + '/js/loadpost.js'
};
var baseposts = base + '/posts';
var posts = {
    hello_world: baseposts + "/helloWorld.json"
}
//load base web
$('#statics').load(paths.minlicense);
$('#sidebar').load(paths.sidebar);
//load scripts
$.getScript(paths.loadpost);

