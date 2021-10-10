const links = [
  {
    label: "Week 1",
    url: "week1/index.html"
  },
  {
    label: "Week 3",
    url: "week3/index.html"
  },
  {
    label: "Week 4",
    url: "week4/index.html"
  }
  ]

  

for (let i = 0; i < links.length; i++ ) 
    {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = links[i].label;
        a.setAttribute('href', links[i].url);
        li.appendChild(a);
        document.querySelector('ol').appendChild(li);
    }