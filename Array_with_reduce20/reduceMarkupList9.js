// genarating markup from list

const links = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Youtube', url: 'https://youtube.com' },
    { name: 'Instagram', url: 'https://Instagram.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://Twitter.com' },
]
let template = `<ul>{{links}}</ul>`

const linklList = links.reduce((acc, cur) => {
    acc += `<li><a href="${cur.url}">${cur.name}</a></li>`;
    return acc;
},'')

console.log(linklList);

template = template.replace('{{links}}', linklList);
console.log(template)