const cards_data = [
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" },
    {"name": "Semen Swallow", "description": "Semen Swallow", "photo": "" }
]

current_num_cards = 6
has_cards_data = cards_data.length > current_num_cards

function createCards() {
    team_cards = '';
    num_cards = cards_data.length;

    for (let i = 0; i < Math.min(num_cards, current_num_cards); i++) {
        team_cards += `
            <div class="card">
                <div class = "card_image"> 
                    <img src="${cards_data[i].photo == "" ? "default_image.jpg" : "my_team/" + cards_data[i].photo}" style = "width:100%; height:100%;">
                </div>
                <div class = "card_description">
                    <spam class = "card_description_name">${cards_data[i].name}</spam>
                    <br>
                    <spam class = "card_description_text">${i + 1} ${cards_data[i].description}</spam>
                </div>
            </div>
        `
    }   
    team_cards = `
    <div class="our_team_cards">
        ${team_cards}
    </div>` 
    document.getElementById("our_team_block").insertAdjacentHTML("beforeend", team_cards)
}

function createButton() {
    buttonCode = `
        <div class="button_container">
            <button onclick="showMore();">Показать ещё</button>
        </div>
    `
}

function showMore() {

}

// pageWidth = document.documentElement.scrollWidth
// "display: block; width: 321px; height: 400px; position: absolute; left:${(i % num_columns) * 321 + 66 * (i % num_columns + 1)}px; top:${Math.floor(i / num_columns) * 447}px"