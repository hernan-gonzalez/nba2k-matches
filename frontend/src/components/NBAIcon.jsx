import * as NBALogos from "react-nba-logos";

export const NBAIcon = ({ team, size = 80 }) => {
    switch (team) {
        case "ATL":
            return <NBALogos.ATL size={size} />;
        case "BKN":
            return <NBALogos.BKN size={size} />;
        case "BOS":
            return <NBALogos.BOS size={size} />;
        case "CHA":
            return <NBALogos.CHA size={size} />;
        case "CHI":
            return <NBALogos.CHI size={size} />;
        case "CLE":
            return <NBALogos.CLE size={size} />;
        case "DAL":
            return <NBALogos.DAL size={size} />;
        case "DEN":
            return <NBALogos.DEN size={size} />;
        case "DET":
            return <NBALogos.DET size={size} />;
        case "GSW":
            return <NBALogos.GSW size={size} />;
        case "HOU":
            return <NBALogos.HOU size={size} />;
        case "IND":
            return <NBALogos.IND size={size} />;
        case "LAC":
            return <NBALogos.LAC size={size} />;
        case "LAL":
            return <NBALogos.LAL size={size} />;
        case "MEM":
            return <NBALogos.MEM size={size} />;
        case "MIA":
            return <NBALogos.MIA size={size} />;
        case "MIL":
            return <NBALogos.MIL size={size} />;
        case "MIN":
            return <NBALogos.MIN size={size} />;
        case "NOP":
            return <NBALogos.NOP size={size} />;
        case "NYK":
            return <NBALogos.NYK size={size} />;
        case "OKC":
            return <NBALogos.OKC size={size} />;
        case "ORL":
            return <NBALogos.ORL size={size} />;
        case "PHI":
            return <NBALogos.PHI size={size} />;
        case "PHX":
            return <NBALogos.PHX size={size} />;
        case "POR":
            return <NBALogos.POR size={size} />;
        case "SAC":
            return <NBALogos.SAC size={size} />;
        case "SAS":
            return <NBALogos.SAS size={size} />;
        case "TOR":
            return <NBALogos.TOR size={size} />;
        case "UTA":
            return <NBALogos.UTA size={size} />;
        case "WAS":
            return <NBALogos.WAS size={size} />;
    }
};
