import React from 'react'
import Banner from '../../components/Banner'
import { Heading, Container, Paragraph, FillImage, Box, BoxHeading, ListItem, FlexContainer } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import collegeImg from '../../assets/images/college.jpg'
import directorImg from '../../assets/images/director.png'
import students from '../../assets/images/students.jpg'
import advisory from '../../assets/images/advisory.jpg'
import society from '../../assets/images/society.jpg'

const staticData = {
    "heading": "About MITRC Alwar",
    "description": "MITRC alwar description"
}

const boardMembers = [
    {
        id: 1,
        name: 'Smt Bimla Devi',
        designation: 'Chairperson'
    },
    {
        id: 2,
        name: 'Shri Ashok Afarwal',
        designation: 'Secretary'
    },
    {
        id: 3,
        name: 'Dr. G.K. Agarwal',
        designation: 'Member'
    },
    {
        id: 4,
        name: 'Shri Purshottam Gupta',
        designation: 'Member'
    },
    {
        id: 5,
        name: 'Shri Piyush Gupta',
        designation: 'Member'
    },
    {
        id: 6,
        name: 'Shri Amit Choudhary',
        designation: 'Member'
    },
    {
        id: 7,
        name: 'Shri Arvind Agarwal',
        designation: 'Member'
    },
    {
        id: 8,
        name: 'Dr. Rajeev Gupta',
        designation: 'Member (Nominated by RTU)'
    },
    {
        id: 9,
        name: 'Dr. S.K. Sharma',
        designation: 'Principal'
    },
    {
        id: 10,
        name: 'Dr. Raish Mohammad',
        designation: 'Member'
    },
    {
        id: 11,
        name: 'Sh. Vikas Mehlawat',
        designation: 'Member'
    }
]

const advisoryBoard = [
    {
        id: 1,
        name: "Mr. Rohit Goel (B.Texh. 1995)",
        designation: "Computer Science From Indian Institute of Technology “IIT” , Kanpur –(INDIA)",
        positions: [
            {
                id: 11,
                position: "Director, Ewayz Systems Pvt. Ltd."
            },
            {
                id: 22,
                position: "Director, Whitelotus Consultants Pvt. Ltd."
            },
            {
                id: 33,
                position: "Director, IBA Craft Pvt. Ltd."
            },
            {
                id: 44,
                position: "Director, IBA Craft Pvt. Ltd."
            }
        ],
        email: "rohitgoel.mitrc@gmail.com"
    },
    {
        id: 2,
        name: "Mr. Rishi Chandra (B. Tech. 1995)",
        positions: [
            {
                id: 12,
                position: "Computer Science From Indian Institute of Technology “IIT” , Kanpur –(INDIA)"
            },
            {
                id: 13,
                position: "Director, Rishi Chalchitra Pvt. Ltd."
            }
        ],
        email: "rishichandra.mitrc@gmail.com"
    },
    {
        id: 3,
        name: "Mr. Ashish Mohan (B. Tech. 1996)",
        positions: [
            {
                id: 21,
                position: "Computer Science From Indian Institute of Technology “IIT” , Kharagpur –(INDIA)"
            },
            {
                id: 22,
                position: "Senior consultant, Clicksoftware India Pvt. Ltd."
            }
        ],
        email: "ashishmohan.mitrc@gmail.com"
    },
    {
        id: 4,
        name: "Mrs. Shalu Goel (B. Tech. 2000) ",
        positions: [
            {
                id: 31,
                position: "Electrical Engineering From Jamia Millia Islamia “JMI” , New Delhi –(INDIA)"
            },
            {
                id: 32,
                position: "Head, Business Development, Whitelotus Consultants Pvt. Ltd."
            }
        ],
        email: "shalugoel.mitrc@gmail.com"
    },
    {
        id: 5,
        name: "Mr. Manish Bansal (B. Tech. 2002) ",
        positions: [
            {
                id: 41,
                position: "Computer Science From Indian Institute of Technology “IIT” , New Delhi –(INDIA )"
            }
        ],
        email: "manishbansal.mitrc@gmail.com"
    },
    {
        id: 6,
        name: "Dr. G. K. Aggrawal (orthopaedician ) ",
        positions: [
            {
                id: 51,
                position: "Head of the Department of orthopaedic Agaawal Hospital , New Delhi –(INDIA)"
            }
        ],
        email: "drgkaggrawal.mitrc@gmail.com"
    },
    {
        id: 7,
        name: "Dr. Arvind Aggrawal (orthopaedician ) ",
        positions: [
            {
                id: 61,
                position: "orthopaedician in Agaawal Hospital , New Delhi –(INDIA)"
            }
        ],
        email: "drarvind.mitrc@gmail.com"
    },
    {
        id: 8,
        name: "Mr. Manjeet Choudhary (MBA 2009) ",
        positions: [
            {
                id: 71,
                position: "Cardiff University (UK)"
            }
        ],
        email: "manjeet.mitrc@gmail.com"
    }
]

const AboutUsPage = () => {
    return (
        <Layout>
            <Banner
                bannerHeading={staticData.heading}
                bannerDescription={staticData.description}
            />
            <Container style={{marginTop: '4vh'}}>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Modern Institute of Technology and Research Center</Heading>
                <Paragraph>
                    Alwar- the City of Parks has always been proud of its rich heritage and culture. We at MITRC, Alwar add another feather in the already colorful cap of Alwar, Rajasthan. Since its inception in 2007, Modern Institute of Technology & Research Centre (An Engineering and Management College), Alwar has been known to enable students to carve a niche for themselves and develop a strong personality. Ranked as one of the best private engineering and management colleges of Alwar, Rajasthan it is located in the serene lap of the Aravali Hills on Alwar-Delhi-Tijara Highway.MITRC Alwar provides students with state-of-the art infrastructure which helps them to attain understanding of their chosen engineering discipline. Engineering transforms scientific discoveries into technological solutions for the benefit of humanity. Everything we rely on for work, life and play has been touched by Engineering.
                </Paragraph>
                <FillImage src={collegeImg} alt="mitrc alwar rajasthan" />
            </Container>
            <Container>
            <Heading style={{textAlign: 'center', marginTop: 0}}>Our Vision and Mission</Heading>
                <FlexContainer>
                    <Box>
                        <BoxHeading>Vision</BoxHeading>
                        <Paragraph>
                            MITRC aims at motivating directing the Engineering minds of the young students to become the trendsetters in developing, shaping and preserving the society and the world at large.
                        </Paragraph>
                        <br />
                        <br />
                    </Box>
                    <Box>
                        <BoxHeading>Mission</BoxHeading>
                        <Paragraph>
                            MITRC emphasizes on all round development of its students. It not only aims at equipping the students with the latest Engineering skills  knowledge to successfully meet the challenges posed by globalization, but also to be good  worthy citizens of this great country aiding it in its overall progress development.
                        </Paragraph>
                    </Box>
                </FlexContainer>
            </Container>
            <Container style={{marginTop: '5vh'}}>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Chairman's Desk</Heading>
                <FlexContainer>
                    <Box>
                        <Paragraph>
                        As we are moving ahead in twenty first century, a realization that draws and makes us all proud is India’s emergence as an economic power to reckon with but this reinstates the need or required for quality education.
                        </Paragraph>
                        <Paragraph>
                        MITRC Alwar has been built as an Institute with a difference. We have taken the pledge to provide professional education of a distinct genre by blending it with right values. Our institute strives at grooming the students, making them sensitive towards societal challenges of the world in general and India in particular, to handle it with professionals and technical prowess.
                        </Paragraph>
                        <Paragraph>
                        This is to be done by the development of professional and mental framework of the young students which would enable them to evaluate, analyze, solve the challenges and write new stories of success.
                        </Paragraph>
                        <Paragraph color="#32404D">
                            <strong>Smt. Vimala Devi</strong><small> (Chairperson of MITRC Alwar)</small>
                        </Paragraph>
                    </Box>
                    <Box>
                        <FillImage src={collegeImg} alt="chairman mitrc alwar" />
                    </Box>
                </FlexContainer>
            </Container>
            <Container>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Director's Desk</Heading>
                <FlexContainer>
                    <Box>
                        <FillImage src={directorImg} alt="director mitrc alwar" />
                    </Box>
                    <Box>
                        <BoxHeading>Message From Director</BoxHeading>

                        <Paragraph>
                        We are extremely delighted to introduce you to MITRC, Alwar. From its origin in 2007, MITRC has served our nation’s flagship comprehensive institution of technical and management education. We are elevating institute’s tradition of superbness in technical and management education through high quality programs in teaching, research, on-site industry executive training and service
                        </Paragraph>
                    </Box>
                </FlexContainer>
                <Paragraph>
                Our campus is situated in a beautiful landscape. Our distinguished faculty with extensive ties to leading engineering and research community are able to bring the best engineers and managers into our programs as visiting faculty and guest speakers.
                </Paragraph>
                <Paragraph>
                Our faculties are renowned scholars and accomplished practitioners who are actively engaged in the academic fineness. Our students are innovators, engineers, mangers, entrepreneurs and aspiring leaders.
                </Paragraph>
                <Paragraph>
                MITRC is a vibrant education community that encourages three-way collaboration between students, parents and institution. The strength of this collaboration is reflected in the success of our students.
                </Paragraph>
                <Paragraph>
                We welcome the young aspirants of excellence to join us in this journey to foster the value based education.
                </Paragraph>
                <Paragraph>
                Thank you for selecting us for your ward.
                </Paragraph>
                <br />
                <br />
                <Paragraph color="#32404D">
                    <strong>Dr. S. K. SHARMA (Director MITRC)</strong>
                </Paragraph>
                <br />
                <Paragraph color="#32404D">
                    <strong>Mobile No.: +91 9413106857</strong>
                </Paragraph>
                <br />
                <Paragraph color="#32404D">
                    <strong>E-mail: director@mitrc.ac.in</strong>
                </Paragraph>
            </Container>
            <Container>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Governing Board</Heading>
                <FlexContainer>
                    <Box>
                        <Paragraph>The Governing Board reviews are scheduled on regular basis in MITRC Alwar.</Paragraph>
                        <Paragraph>
                            <strong>The Governing Board Members</strong>
                        </Paragraph>
                        {
                            boardMembers.map((member) => (
                                <Paragraph key={member.id} color="#32404D">
                                    {member.id}. {member.name} ({member.designation})
                                </Paragraph>
                            ))
                        }
                        
                    </Box>
                    <Box>
                        <FillImage src={students} alt="governing board mitrc" />
                    </Box>
                </FlexContainer>
            </Container>
            <Container>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Advisory Board</Heading>
                <FlexContainer>
                    <Box>
                        <FillImage src={advisory} alt="advisory board mitrc" />
                    </Box>
                    <Box>
                        <Paragraph>
                        The teaching faculty of the MITRC Alwar is drawn from leading international experts who share their knowledge and in particular their practical experience with the course participants. Trainers from different countries across the world belonging to various organizations and representing a wide range of specialties have been teaching at MITRC. The key topic owners as well as the most active collaborators will become member of the institute in 2009-10 defined Educational Advisory Board of the college. The objectives of this working group are:
                        </Paragraph>
                        <br />
                        <ul>
                            <ListItem>Design Training Programs for Engineering and Management students</ListItem>
                            <ListItem>Identification of new Industrial opportunities</ListItem>
                            <ListItem>Development of new courses needed for the Master programme</ListItem>
                            <ListItem>Identification and selection of new trainers</ListItem>
                            <ListItem>Continuing exchange</ListItem>
                            <ListItem>Strategic advice</ListItem>
                        </ul>
                    </Box>
                </FlexContainer>
                <BoxHeading style={{marginTop: '5vh'}}>Board Members</BoxHeading>
                {
                    advisoryBoard.map((item) => (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Paragraph color="#32404D" key={item.id}>{item.name}</Paragraph>
                            {item.positions.map((item) => (
                                <Paragraph key={item.id}>{item.position}</Paragraph>
                            ))}
                            <Paragraph>{item.email}</Paragraph>
                        </div>
                    ))
                }
            </Container>
            <Container style={{display: 'flex', flexDirection: 'column', marginBottom: '4rem'}}>
                <Heading style={{textAlign: 'center', marginTop: 0}}>Society</Heading>
                <FillImage src={society} alt="society mitrc alwar" />
                <BoxHeading style={{textAlign: 'center', fontSize: '1.5rem'}}>“All India Arya Samajis Society for Advance Education & Research” (AIASSAER)</BoxHeading>
                <Paragraph>
                “All India Arya Samajis Society for Advance Education & Research” (AIASSAER) was formed in 1999 by a group of prominent people who wanted to provide a breeding ground for ideas & talent to keep pace with the ever changing world of science and technology. It was the heartfelt desire of the members to provide meaningful education to conduct original research and to provide leadership in technological innovation for the industrial growth of the country. Thus, the members of the society who founded <strong>MITRC Alwar</strong>  are confident that with the best faculty and guidance in peaceful and beautiful surroundings, the students will emerge as successful and trained professionals. They will be the icons of MITRC Alwar and pride of India.
                </Paragraph>
                <Paragraph>
                The AIASSAER  undertook the task of spreading the light of knowledge & values at Alwar, a city of parks, and widely known as “The Singhdwar of Rajasthan”. A small city located, on the one hand, amidst the beautiful landscape of 
                </Paragraph>
            </Container>
        </Layout>
    )
}

export default AboutUsPage