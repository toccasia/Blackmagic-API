let presetTable = document.getElementById("preset-table")

fetch("/json/presets.json")
    .then((res) => res.json())
    .then(json => {
        presetTable.innerHTML = json.presets;
    })