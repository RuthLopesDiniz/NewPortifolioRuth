const elemProjects = document.getElementById('project-contents')

/* Isolar e criar funções, o código fica mais claro e se precisar de manutenção vai ser bem mais simples */
/*foi tirada a parte estática do html para adicionar projetos, todos estão sendo criados a partir do Java script */
const createImage = (image) =>{
    const elemPicture= document.createElement('picture') /* cria uma picture*/
    const elemImg = document.createElement('img')/*cria uma img */

    elemImg.setAttribute('src', image)/*setar o valor da src */

    elemPicture.appendChild(elemImg)/*setar a imagem do picture */
    return elemPicture
}

const createStrong = (name) =>{
    const elemStrong = document.createElement('strong')
        elemStrong.innerText = name
        return elemStrong
}

const createTags = (projecTags)=> {
    const elemTags = document.createElement('div')

        projecTags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        })
        return elemTags
}

const createProject = (project) => {
    const elemProject = document.createElement('a')

        elemProject.setAttribute('href', project.link)
        elemProject.setAttribute('target', '_blank')

        elemProject.classList.add('project')

        //add imagem de capa
        elemProject.appendChild(createImage(project.image))

        //add nome do projeto
        elemProject.appendChild(createStrong(project.name))

        //add tags dos cards
        elemProject.appendChild(createTags(project.tags))

        return elemProject
}

    const loadProjects=(projects)=>{
        projects.forEach(project => {
        
        elemProjects.appendChild(createProject(project))
        });
}

/*Faz o carregamento do arquivo Json com a função fech(), then para pegar o dado e converter em json para o java Script manipular.
O último .then é para aguardar o carregamento da função loadProjects*/
fetch('/projects.json').then(response=> response.json()).then(loadProjects)

