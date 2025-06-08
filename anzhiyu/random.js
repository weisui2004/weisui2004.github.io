var posts=["2025/06/09/Java面向对象基础二/","2025/04/24/Java基础知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };