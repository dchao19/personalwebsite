var rl = require('readline');
var unirest = require('unirest');
var fs = require('fs');
var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the blog username: ", function(username) {
    prompts.question("Enter the blog password: ", function(password) {
        prompts.question("Enter the path of the markdown file you would like to upload: ", function(filename) {
            prompts.question("Enter the title of the blog post: ", function(title) {
                prompts.question("Enter the tags, separated by a comma with no space", function(tags) {
                    prompts.question("Enter a brief, text only description of the article", function(description) {
                        var request = unirest("POST", "http://dchaowebsiteapi.azurewebsites.net/blog/posts/new");
                        request.type("json");
                        console.log("Uploading...");
                        fs.readFile(filename, 'utf8', function(err, data) {
                            if (err) {
                                return console.log(err);
                            } else {
                                request.send({
                                    username: username,
                                    password: password,
                                    content: description,
                                    title: title,
                                    markdown: data,
                                    tags: tags.split(',')
                                });

                                request.end(function(res) {
                                    if (res.error) {
                                        throw new Error(res.error);
                                    }
                                    console.log("Uploaded!");
                                });
                            }
                        });
                    });
                });
            });
        });
    });
});
