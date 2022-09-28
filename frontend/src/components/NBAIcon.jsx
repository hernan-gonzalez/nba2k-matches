import * as NBALogos from "react-nba-logos";

export const NBAIcon = ({ team }) => {
    switch (team) {
        case "ATL":
            return <NBALogos.ATL size={60} />;
        case "BKN":
            return <NBALogos.BKN size={60} />;
        case "BOS":
            return <NBALogos.BOS size={60} />;
        case "CHA":
            return <NBALogos.CHA size={60} />;
        case "CHI":
            return <NBALogos.CHI size={60} />;
        case "CLE":
            return <NBALogos.CLE size={60} />;
        case "DAL":
            return <NBALogos.DAL size={60} />;
        case "DEN":
            return <NBALogos.DEN size={60} />;
        case "DET":
            return <NBALogos.DET size={60} />;
        case "GSW":
            return <NBALogos.GSW size={60} />;
        case "HOU":
            return <NBALogos.HOU size={60} />;
        case "IND":
            return <NBALogos.IND size={60} />;
        case "LAC":
            return <NBALogos.LAC size={60} />;
        case "LAL":
            return <NBALogos.LAL size={60} />;
        case "MEM":
            return <NBALogos.MEM size={60} />;
        case "MIA":
            return <NBALogos.MIA size={60} />;
        case "MIL":
            return <NBALogos.MIL size={60} />;
        case "MIN":
            return <NBALogos.MIN size={60} />;
        case "NOP":
            return <NBALogos.NOP size={60} />;
        case "NYK":
            return <NBALogos.NYK size={60} />;
        case "OKC":
            return <NBALogos.OKC size={60} />;
        case "ORL":
            return <NBALogos.ORL size={60} />;
        case "PHI":
            return <NBALogos.PHI size={60} />;
        case "PHX":
            return <NBALogos.PHX size={60} />;
        case "POR":
            return <NBALogos.POR size={60} />;
        case "SAC":
            return <NBALogos.SAC size={60} />;
        case "SAS":
            return <NBALogos.SAS size={60} />;
        case "TOR":
            return <NBALogos.TOR size={60} />;
        case "UTA":
            return <NBALogos.UTA size={60} />;
        case "WAS":
            return <NBALogos.WAS size={60} />;
    }
};
