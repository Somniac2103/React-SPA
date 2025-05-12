import { GoInfo } from "react-icons/go";

function PageMetaBox(props) {
  return <div className="metabox">
    <GoInfo className="metabox-info-icon"/>
    <p className="metabox-label">Page Meta Data</p>
    <h6>Page's Meta Data</h6>
    <div className="metabox-content">
        <p><strong>UX/UI Design: </strong>{props.metadata.design}</p>
        <p><strong>Design System: </strong>{props.metadata.designsystem}</p>
        <p><strong>Style: </strong>{props.metadata.style}</p>
        <p><strong>Frontend: </strong>{props.metadata.frontend}</p>
        <p><strong>Backend: </strong>{props.metadata.backend}</p>
        <p><strong>Database: </strong>{props.metadata.database}</p>
        <p><strong>Web Server: </strong>{props.metadata.webServer}</p>
        <p><strong>System: </strong>{props.metadata.system}</p>
        <p><strong>InfraStructure: </strong>{props.metadata.infrastructure}</p>
        <p><strong>CD/CI: </strong>{props.metadata.cdci}</p>
        <p><strong>Optimisation: </strong>{props.metadata.optimisations}</p>
        <p><strong>GitHub Repositoty: </strong><a href={props.metadata.gitrepo} target="_blank" rel="noopener noreferrer">{props.metadata.gitname}</a></p>
    </div>    
    </div>
}

export default PageMetaBox