
import Imgs from '../../images/Profile.png';
import Resume from '../../images/resume.svg'
import Work from '../../images/work.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Mc Roniel De Gozo',
    headline: 'Full Stack Web Developer',
    description: '“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”',
    buttonLabel: 'Work Experience',
    imgStart: false,
    img: Imgs,
    alt: 'Roniel',
    dark: true,
    primary: true,
    darkText: false
};


//RESUME
export const homeObjTwo = {
    id: 'certification',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Full Stack Web Developer Certification',
    description: "Front-End Bootstrap 4, Responsive Web Design, AWS Fundamentals: Going Cloud-Native, Font-End Development with React, Introduction to Git and GitHub",
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Resume,
    alt: 'Roniel',
    dark: true,
    primary: true,
    darkText: true
};





export const homeObjThree = {
    id: 'team',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Mc Roniel De Gozo',
    headline: 'Work Together',
    description: 'To obtain a job with an available part time position to continue education at school for Digital Media and Information Technology and to contribute to a positive work environment while learning and applying work expectations.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: Work,
    alt: 'Roniel',
    dark: true,
    primary: true,
    darkText: true
};
