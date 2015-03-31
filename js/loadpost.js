/**
 * Created by yawmoght on 31/03/2015.
 */

function loadpost(url) {
    $("#content").load(paths.postTemplate);
    $.getJSON(url)
        .done(function (post) {
            console.log("success");
            console.log(post);
            $("#posttitle").innerHTML = post.title;
            $("#postimage").innerHTML = post.image;
            $("#postcontent").innerHTML = post.content;
        })
        .fail(console.log("fail"))
        .error(console.log(url));
}