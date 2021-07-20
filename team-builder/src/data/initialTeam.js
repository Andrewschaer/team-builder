import {v4 as uuid } from 'uuid'

const initialTeam = [
    {
        id: uuid(),
        name: 'Pedro Sanchez',
        email: 'Pedro@voteforpedro.edu',
        role: 'friend',
    },
    {
        id: uuid(),
        name: 'Kip Dynamite',
        email: 'KipLovesLuhfawnduh@aol.com',
        role: 'family',
    },
    {
        id: uuid(),
        name: 'Uncle Rico',
        email: 'ShoulabeenaQB@yahoo.com',
        role: 'family',
    },
    {
        id: uuid(),
        name: 'Tina (not a fat lard)',
        email: 'llamaloveyouforever@gmail.com',
        role: 'pet',
    },
    {
        id: uuid(),
        name: 'Rex',
        email: 'RexKwonDo@RexKwonDo.xyz',
        role: 'teacher',
    }
]

export default initialTeam

