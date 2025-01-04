const form = document.querySelector("#search-form > form")
const input: HTMLInputElement | null = document.querySelector("#input-location")

const sectionTempInfo = document.querySelector("#temp-info")

form?.addEventListener("submit", async (event) => {
    event.preventDefault() // Evita que o formulário recarregue a página quando algo for submetido

    if (!input || !sectionTempInfo) return

    const location = input.value

    if (location.length < 3) {
        alert("O local precisa ter pelo menos 3 letras")
        return
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f4f7c67ab61575871a5ee39319facb6e&lang=pt_br&units=metric`)

        const data = await response.json()

        const infos = {
            temperature: Math.round(data.main.temp),
            locale: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }

        sectionTempInfo.innerHTML = `
            <div class="temp-data">
                <h2>${infos.locale}</h2>
                <span>${infos.temperature}°C</span>
            </div>
            <img src="${infos.icon}"/>
            `
    } catch (err) {
        console.log("Erro na obtenção dos dados da API", err)
    }
})