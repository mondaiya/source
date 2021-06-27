import * as params from '@params';
    
export async function render(icon: string, namespace: string, key: string) {
    const footer = document.getElementsByClassName("article-footer")[0];
    if (!footer) {
        console.log("no available footer was found!");
        return;
    }

    const counterId = "visitor-counter"
    const counter = document.createElement('span');
    counter.id = counterId
    counter.className = "pageViews"

    const viewsText = document.createElement('span');
    viewsText.innerHTML = "views"

    const sec = document.createElement('section')
    sec.className = "article-copyright article-views"
    sec.innerHTML = icon;
    sec.appendChild(counter);
    sec.appendChild(viewsText);

    footer.appendChild(sec);

    const vcele = document.getElementById(counterId);

    const views = await fetchViews(namespace, key);
    vcele.innerHTML = views.value;
}

export async function fetchViews(namespace: string, key: string) {
    const url = "https://api.countapi.xyz/hit/"+namespace+"/"+key
    const data = await fetch(url)
    return data.json()
}

render(params.icon, params.namespace, params.key);