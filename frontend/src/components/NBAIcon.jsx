import * as NBALogos from "react-nba-logos";

export const NBAIcon = ({ team }) => {
    switch (team) {
        case "ATL":
            return <NBALogos.ATL size={80} />;
        case "BKN":
            return <NBALogos.BKN size={80} />;
        case "BOS":
            return <NBALogos.BOS size={80} />;
        case "CHA":
            return <NBALogos.CHA size={80} />;
        case "CHI":
            return <NBALogos.CHI size={80} />;
        case "CLE":
            return <NBALogos.CLE size={80} />;
        case "DAL":
            return <NBALogos.DAL size={80} />;
        case "DEN":
            return <NBALogos.DEN size={80} />;
        case "DET":
            return <NBALogos.DET size={80} />;
        case "GSW":
            return <NBALogos.GSW size={80} />;
        case "HOU":
            return <NBALogos.HOU size={80} />;
        case "IND":
            return <NBALogos.IND size={80} />;
        case "LAC":
            return <NBALogos.LAC size={80} />;
        case "LAL":
            return <NBALogos.LAL size={80} />;
        case "MEM":
            return <NBALogos.MEM size={80} />;
        case "MIA":
            return <NBALogos.MIA size={80} />;
        case "MIL":
            return <NBALogos.MIL size={80} />;
        case "MIN":
            return <NBALogos.MIN size={80} />;
        case "NOP":
            return <NBALogos.NOP size={80} />;
        case "NYK":
            return <NBALogos.NYK size={80} />;
        case "OKC":
            return <NBALogos.OKC size={80} />;
        case "ORL":
            return <NBALogos.ORL size={80} />;
        case "PHI":
            return <NBALogos.PHI size={80} />;
        case "PHX":
            return <NBALogos.PHX size={80} />;
        case "POR":
            return <NBALogos.POR size={80} />;
        case "SAC":
            return <NBALogos.SAC size={80} />;
        case "SAS":
            return <NBALogos.SAS size={80} />;
        case "TOR":
            return <NBALogos.TOR size={80} />;
        case "UTA":
            return <NBALogos.UTA size={80} />;
        case "WAS":
            return <NBALogos.WAS size={80} />;
    }
};
