
async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/matheusfinamor1/js-portfolio/master/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}
