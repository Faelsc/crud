'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Rafael",
    email: "rafaelcorrea@gmail.com",
    celular: "32123456789",
    cidade: "Muriaé"
}

const createClient = (client) => {
    localStorage.setItem("db_client", JSON.stringify(client))
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)