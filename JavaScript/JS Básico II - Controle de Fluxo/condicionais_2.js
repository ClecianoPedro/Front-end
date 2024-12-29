// Muito útil quando a variável possui valores específicos

const permissoes = "aluno"; // 'aluno', 'professor' ou 'admin'

switch (permissoes) {
    case "aluno": 
        console.log("Você só pode vizualizar as aulas.")
        break // Obrigatório para não executar as linhas abaixo
    case "professor":
        console.log("Você pode alterar as aulas e adicionar exercícios")
        break
    case "admin":
        console.log("Você pode fazer o que quiser no sistema!")
        break
    default:
        console.log("Não sei quem você é no sistema")
}