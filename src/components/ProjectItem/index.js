import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, answer, question} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <div className="project-item-details-container">
          <h1 className="project-item-title">{question}</h1>
          <p className="project-item-description">{answer}</p>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
