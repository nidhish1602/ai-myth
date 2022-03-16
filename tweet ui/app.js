var app = new function(){
    this.el = document.getElementById('tweets');
    this.tweets=[]

    this.fetchAll = function(){
        var data = '';

        if(this.tweets.length > 0){
            for(i = 0; i < this.tweets.length; i++){
                data += '<div class="post">';
                data += '<img alt="dp" class="post_avatar" src="images/dp1.png"/>';
                data += '<div class="post_body">';
                data += '<div class="post_header">';
                data += '<div class="post_header_text"><h3>Nidhish Lakhinana <span class="post_header_special">@nidhishlakhi • now</span></h3></div>'
                data += '<div class="post_header_description"><p>' + this.tweets[i].tweet + '</p></div>';
                data += '<div class="post_footer">'
                data += '<button onclick="app.edit(' + i + ')" class="edit"><img src="https://img.icons8.com/material-outlined/24/000000/pencil--v2.png"/></button>';
                data += '<button onclick="app.delete(' + i + ')" class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button>';        
                data += '<button onclick="app.like(' + i + ')" class="like">' + (this.tweets[i].isLiked ? '<img style="margin-right: 5%;" src="https://img.icons8.com/material-rounded/24/000000/like.png"/>' : '<img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"/>') + this.tweets[i].likes + '</button>';   
                data += '</div>'; 
                data += '</div>'; 
                data += '</div>'; 
                data += '</div>'; 
            }
        }
        this.Count(this.tweets.length);
        return this.el.innerHTML = data; 
    }; 

    this.add = function(){
        el = document.getElementById('tweetContent');
        var tweet = el.value;

        if(tweet){
            var obj = {} 
            obj.tweet = tweet.trim()
            obj.likes = 0;
            obj.isLiked = false;
            this.tweets.push(obj);
            el.value = '';
            this.fetchAll();
        }
    };

    this.edit = function(item){
        el = document.getElementById('edit_tweet');
        el.value = this.tweets[item].tweet
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function(){
            var tweet = el.value;
            if(tweet){
                var prev = self.tweets[item]
                prev.tweet = tweet.trim();
                self.tweets.splice(item, 1, prev);
                self.fetchAll();
                CloseInput();
            }
        }
    };

    this.delete = function(item){
        this.tweets.splice(item, 1);
        this.fetchAll();
    };   

    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'Tweets'
        if(data){
            el.innerHTML = data+' '+name;
        }
        else{
            el.innerHTML = "No "+name;
        }
    }

    this.like = function(item) { 
        var prev = this.tweets[item]
        if(prev.isLiked){
            prev.likes -= 1; 
            prev.isLiked = false;
        }
        else{
            prev.likes += 1;
            prev.isLiked = true;
        }
        this.tweets.splice(item, 1, prev);
        this.fetchAll();
    }
}

app.fetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}