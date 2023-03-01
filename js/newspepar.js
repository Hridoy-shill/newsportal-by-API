const loadData = () => {
    const Url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(Url)
        .then(res => res.json())
        .then(data => showData(data.data.news_category))
}

const showData = (categories) =>{
    console.log(categories);
    const navbarContainer = document.getElementById('navbar-container');
    for(let categori of categories){
        console.log(categori);
        const div = document.createElement('div');
        div.innerHTML =`
        <a class="text-secondary nav-link" href="#" onclick="getNewsByClick('${categori.category_id}', '${categori.category_name}')">${categori.category_name}</a>
        `
        navbarContainer.appendChild(div)
        
    }
}

const getNewsByClick = (id, name) =>{
    console.log(id, name);
    const URl = ` https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(URl)
    .then(res => res.json())
    .then(data => showNewsQuantity(data.data , name))
}

const showNewsQuantity = (quantity, name) =>{
    console.log(quantity, name);
    document.getElementById('news-quantity').innerText = quantity.length
    document.getElementById('news-cetagory').innerText = name
}



loadData()