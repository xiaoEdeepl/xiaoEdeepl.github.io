var posts=["2024/08/31/hello-world/","2024/08/31/2024-7-28周报/","2024/08/31/2024-8-11周报/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };