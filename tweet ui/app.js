var app = new function(){
    this.el = document.getElementById('tweets');
    this.tweets=[]

    this.fetchAll = function(){
        var data = '';

        if(this.tweets.length > 0){
            for(i = 0; i < this.tweets.length; i++){
                data += '<tr>';
                data += '<td rowspan = "3"><div class="post_avatar"><img src="images/dp1.jpg"></div></td>';
                data += '</tr>';
                data += '<tr>';
                data += '<td><div class="post_header_text"><h3>ANTIREZ<span class="post_header_special">@antirez • now</span></h3></div></td>'
                data += '</tr>';
                data += '<tr>';
                data += '<td>' + this.tweets[i] + '</td>';
                data += '</tr>';
                data += '<tr>'
                data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';        
                data += '<td><button onclick="app.Delete(' + i + ')"  class="bi bi-heart">Like</button></td>';   
                data += '</tr>';
            }
        }
        this.Count(this.tweets.length);
        return this.el.innerHTML = data;
    };

    this.add = function(){
        el = document.getElementById('tweetContent');
        var tweet = el.value;

        if(tweet){
            this.tweets.push(tweet.trim());
            el.value = '';
            this.fetchAll();
        }
    };

    this.edit = function(item){
        el = document.getElementById('edit_tweet');
        el.value = this.tweets[item]
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function(){
            var tweet = el.value;
            if(tweet){
                self.tweets.splice(item, 1, tweet.trim());
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
}

app.fetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}