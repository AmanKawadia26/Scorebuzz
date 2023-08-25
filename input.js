document.addEventListener('DOMContentLoaded', () => {
    let submit = document.getElementById('submit')
    submit.addEventListener('click', redirectToScore)
})

const redirectToScore = () => {
    let team1 = document.getElementById('team1name').value;
    let team2 = document.getElementById('team2name').value;
    let overs = parseInt(document.getElementById('overs').value)
    localStorage.setItem('team1name', team1)
    localStorage.setItem('team2name', team2)
    localStorage.setItem('maxOver', overs)
    window.location.replace("main.html")
}