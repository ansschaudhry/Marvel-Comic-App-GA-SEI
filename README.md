# Project Overview


## Project Name

Avengers Assemble - Marvel Comics Superhero Database


## Project Description

Avengers Assemble is a React build that uses an API from Marvel Comics and an Airtable to allow for the sorting of characters. The user is able to navigate from a homepage to the database, to a seperate page where they can create their own Avengers team, and a section where they can create their own superhero and add it to the team. The user will be able to search through a database of superheros in which they can access more information about the superhero (i.e. thier superpowers, origin, short description and the comics they are in). The user will be allowed to select from the database to create thier own team in an interactive menu. The user will be able to complete a form and make their own custom superhero. The user will be allowed to delete any created superheros and delete any created teams.


## Wireframes
![image](https://user-images.githubusercontent.com/82814499/117490980-94d84780-af3d-11eb-9ab4-4e8971bd6dd8.png)


## Component Hierarchy
![image](https://user-images.githubusercontent.com/82814499/117472065-80d51b80-af26-11eb-87ff-4b137ccdc191.png)

## API and Data Sample

``` javascript
{
    "records": [
        {
            "id": "recMF9Y0P0GaHshxu",
            "fields": {
                "origin": "Long Island, NY",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-ironman_30193360.png?region=0%2C0%2C138%2C280",
                "powers": "Wears modular arc reactor-powered Iron Man armor, granting superhuman strength & durability, the ability to fly & project Repulsor blasts",
                "superhero": "Iron-Man",
                "description": "When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world's greatest fightin..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        },
        {
            "id": "recS32QVBtvUvyIhk",
            "fields": {
                "origin": "Asgard",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-thor_6f50eecc.png?region=0%2C0%2C164%2C280",
                "powers": "Superhuman strength, speed, endurance & resistance to injury.",
                "superhero": "Thor",
                "description": "Thor's strength, endurance, and quest for battle are far greater than his Asgardian brethren. The mighty Thor wields an enchanted Uru hammer, Mjolnir,..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        },
        {
            "id": "recyh3IVU0o5S3UtO",
            "fields": {
                "origin": "Brooklyn, NY",
                "image": "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-captainamerica_4f97efbc.png?region=0%2C0%2C132%2C280",
                "powers": "Peak physical condition, with heightened strength, endurance & agility",
                "superhero": "Captain America",
                "description": "During WWII, the patriotic Steve Rogers was offered a place in the military's top operation: Rebirth. Injected with an experimental super-serum, Roger..."
            },
            "createdTime": "2021-05-07T18:28:55.000Z"
        }
    ],
    "offset": "recyh3IVU0o5S3UtO"
}
```

### MVP/PostMVP


#### MVP 

- Create homepage with routes to each perspective field
- Get superhero data from the Marvel API and render to the page
- Use CSS Grid to format the superhero data into organized cards
- Use an interactive menu to add characters on a custom team using an Airtable
- Use a form to add new superheros to an Airtable
- Delete custom characters and characters from the custom team

#### PostMVP  

- Add a like button for the superhero data cards
- Add a search bar to search for a specific superhero
- Post comments under favorite superheros


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 5-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 7| Project Approval / Start Componets | Incomplete
|May 8| Continue components, GET, POST, PUT, DELETE | Incomplete
|May 9| Finish Components / Test and review JS code | Incomplete
|May 10| Start CSS styling | Incomplete
|May 11| Finish CSS / MVP Checkover | Incomplete
|May 12| MVP Due / Post-MVP / Debugs | Incomplete
|May 14| Presentations | Incomplete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| 3.5hrs | hrs |
| Setting up Airtable | H | 1hrs| hrs | hrs |
| Make homepage and create routes | H | 1hrs| hrs | hrs |
| Create API call (GET) for superhero database | H | 2hrs| hrs | hrs |
| Create PUT & POST request for create team | H | 2hrs | hrs | hrs |
| Create dynamic form for create superhero | H | 2hrs| hrs | hrs |
| Create POST request for new superhero feed | H | 2hrs| hrs | hrs |
| Work through beginner CSS | H | 3hrs| hrs | hrs |
| Work through dynamic CSS | H | 3hrs| hrs | hrs |
| Work through advanced CSS | H | 3hrs| hrs | hrs |
| Review MVP | H | 2hrs| hrs | hrs |
| Post MVP | H | 3hrs| hrs | hrs |
| Total | H | 26hrs| hrs | hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
