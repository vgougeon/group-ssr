import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const students = [
    "ALZONNE Thomas",
    "ARPIN Valentin",
    "BONNET Guillaume",
    "BOUTTIER Elysa",
    "BROCARD Lucas",
    "CARTIER-MICHAUD Jérémy",
    "CELLI Julie",
    "COGNARD Timothée",
    "COSTES Romain",
    "DECHAMPS William",
    "DI MARCO Vincent",
    "DJABIRI Ambasse",
    "EMMERY-DELECROIX Jean",
    "FAURE Thomas",
    "FRESNEL Brieuc",
    "GOUGEON Vincent",
    "LARZABAL Randy",
    "LATOR Steven",
    "LE BIHAN Thomas",
    "LEFRANCOIS Arnaud",
    "LEKEDJI ZAHOUN Brucie Francelle",
    "LERNOUD Jordan",
    "LEVEQUE Vincent",
    "PAVELAK Emma",
    "ROQUE DA SILVA Thomas",
    "ROSA Toma",
    "SEIGNEURIE Laurent",
    "VERNET Alexandre",
]

app.get('/api/groups', (req: Request, res: Response) => {
    const nGroups = 6;
    const list = [...students]
    const groups: string[][] = []
    for(let i = 0; i < nGroups; i++) {
        const group: string[] = []
        groups.push(group)
        console.log('groupe ' + (Number(i) + 1))
        for(let j = 0; j < Math.ceil(students.length / nGroups); j++) {
            const index = Math.floor(Math.random() * list.length - 1)
            if(list[index]) {
                group.push(list[index])
                list.splice(index, 1)
            }
        }
    }
    return res.send(groups)
})
app.listen(4000, () => {
    console.log('🎆🎇✨🎊🎃🎐🎏🎎🎍🎗🎞🎟🎫')
})