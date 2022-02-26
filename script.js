const password = document.querySelector ('.password')
const btn = document.querySelector ('.btn')

btn.onclick = () =>
{
    if (password.type === 'password')
    {
        password.type = 'text'
        btn.src = 'img/hide.png'
    }
    else 
    {
        password.type = 'password' 
        btn.src = 'img/show.png' 
    }
}