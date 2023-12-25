
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{
        const acordeon = trigger.parentElement // pega o acordeon
        const isOpen = acordeon.classList.contains('open') // verifica se o acordeon esta aberto

        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})