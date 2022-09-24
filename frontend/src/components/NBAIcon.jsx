import * as NBALogos from 'react-nba-logos';

export const NBAIcon = ({ team }) => {
    switch (team) {
        case 'ATL':
            return <NBALogos.ATL />
        case 'BKN':
            return <NBALogos.BKN />
        case 'BOS':
            return <NBALogos.BOS />
        case 'CHA':
            return <NBALogos.CHA />
        case 'CHI':
            return <NBALogos.CHI />
        case 'CLE':
            return <NBALogos.CLE />
        case 'DAL':
            return <NBALogos.DAL />
        case 'DEN':
            return <NBALogos.DEN />
        case 'DET':
            return <NBALogos.DET />
        case 'GSW':
            return <NBALogos.GSW />
        case 'HOU':
            return <NBALogos.HOU />
        case 'IND':
            return <NBALogos.IND />
        case 'LAC':
            return <NBALogos.LAC />
        case 'LAL':
            return <NBALogos.LAL />
        case 'MEM':
            return <NBALogos.MEM />
        case 'MIA':
            return <NBALogos.MIA />
        case 'MIL':
            return <NBALogos.MIL />
        case 'MIN':
            return <NBALogos.MIN />
        case 'NOP':
            return <NBALogos.NOP />
        case 'NYK':
            return <NBALogos.NYK />
        case 'OKC':
            return <NBALogos.OKC />
        case 'ORL':
            return <NBALogos.ORL />
        case 'PHI':
            return <NBALogos.PHI />
        case 'PHX':
            return <NBALogos.PHX />
        case 'POR':
            return <NBALogos.POR />
        case 'SAC':
            return <NBALogos.SAC />
        case 'SAS':
            return <NBALogos.SAS />
        case 'TOR':
            return <NBALogos.TOR />
        case 'UTA':
            return <NBALogos.UTA />
        case 'WAS':
            return <NBALogos.WAS />
    }
}