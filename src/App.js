import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'TRAINING DETAILS', displayText: 'Training Details'},
  {tabId: 'ELIGIBILITY', displayText: 'Eligibility'},
  {tabId: 'PLACEMENT SUPPORT', displayText: 'Placement Support'},
  {tabId: 'IRC', displayText: 'IRC'},
  {tabId: 'FEE', displayText: 'Fee'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'TRAINING DETAILS',
    question: 'What is the duration of the program?',
    answer:
      'Completing the fundamentals classes would usually take 2 months. After that, the duration would depend on the job track you choose. While you learn in a job track, you’ll build multiple real-world projects to build a digital portfolio that makes your profile super strong and attracts better salaries. You’ll receive dedicated placement support for 16 months from the date of joining. During this period, you’ll prepare a strong resume with expert guidance and undergo mock interviews with your Tech and HR panels. This makes you ready to face the real interviews with confidence.',
  },
  {
    projectId: 1,
    category: 'TRAINING DETAILS',
    question:
      'What is the NxtWave Intensive curriculum? Why is it so successful in getting tech jobs?',
    answer:
      'NxtWave Intensive Curriculum is proven to build industry-relevant skills. You can get ready for multiple IT career paths. You’ll start by learning fundamentals. After learning fundamentals, you can choose a job track.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <p className="description">
          FAQs related to NxtWave's CCBP 4.0 Intensive. Most of the doubts will
          be cleared here.
        </p>
        <div className="tabs-and-faqs-container">
          <ul className="tabs-container">
            {tabsList.map(tabDetails => (
              <TabItem key={tabDetails.tabId} tabDetails={tabDetails} />
            ))}
          </ul>

          <ul className="project-list-container">
            {projectsList.map(projectDetails => (
              <ProjectItem
                key={projectDetails.projectId}
                projectDetails={projectDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
