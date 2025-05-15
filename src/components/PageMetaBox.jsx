import { GoInfo } from "react-icons/go";

function PageMetaBox(props) {
  return <div className="metabox">
    <GoInfo className="metabox-info-icon"/>
    <p className="metabox-label">Page Meta Data</p>
    <h6>Page's Meta Data</h6>
    <i>*If not stated, all of the items below are developered, engineered or administrated by myself</i>
    <div className="metabox-content">
      <ul>
        <li>
          <strong>---Design---</strong>
          <ul>
            <li><strong>UX/UI Design: </strong>{props.metadata.design}</li>      
            <li><strong>Design System: </strong>{props.metadata.designsystem}</li>
          </ul>
        </li>        
        <li>
          <strong>---Development---</strong>
          <ul>
            <li><strong>Style System: </strong>{props.metadata.style}</li>
            <li><strong>Frontend: </strong>{props.metadata.frontend}</li>
            <li><strong>Backend: </strong>{props.metadata.backend}</li>
            <li><strong>Database: </strong>{props.metadata.dbDev}</li>
          </ul>
        </li>        
        <li>
          <strong>---Operations---</strong>
          <ul>
            <li><strong>System: </strong>{props.metadata.system}</li>
            <li><strong>Network: </strong>{props.metadata.network}</li>
            <li><strong>Database: </strong>{props.metadata.dbOps}</li>            
            <li><strong>InfraStructure: </strong>{props.metadata.infrastructure}</li>
          </ul>
        </li>
        <li>
          <strong>---DevOps---</strong>
          <ul>
            <li><strong>CD/CI: </strong>{props.metadata.cdci}</li>
            <li><strong>Testing: </strong>{props.metadata.test}</li>
          </ul>     
        </li>             
        <li>
          <strong>---Optimisation---</strong>
          <ul>
            <li><strong>Accessibility: </strong>{props.metadata.optAccess}</li>
            <li><strong>SEO: </strong>{props.metadata.optSEO}</li>
            <li><strong>Performance: </strong>{props.metadata.optPerforamance}</li>
            <li><strong>Responsive: </strong>{props.metadata.optRespond}</li>
          </ul>
        </li>
        <li>
          <strong>---Version Control---</strong>
          <ul>
            <li><strong>GitHub Repositoty: </strong><a href={props.metadata.gitrepo} target="_blank" rel="noopener noreferrer">{props.metadata.gitname}</a></li>
          </ul>
        </li>      
        
      </ul>
    </div>    
    </div>
}

export default PageMetaBox