import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Layout from '../../constants/Layout'
import PagesLayout from '../../constants/PagesLayout'
import { useParams } from 'react-router-dom';
import { amenities, studentaffair, clubandactivities } from './staticData/doc';
import { HalfImage, Heading, HyperLink, ListItem, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents';
import ComplaintForm from './ComplaintForm';

const CampusLife = () => {

    const { routename, child } = useParams();
    const [obj, setObj] = useState();

    useEffect(() => {
        if (routename === 'amenities')
            setObj(amenities);
        else if (routename === 'studentaffair')
            setObj(studentaffair)
        else if (routename === 'clubandactivities')
            setObj(clubandactivities)
        return () => {

        }
    }, [routename])

    const relatedLinks = {
        "amenities": [
            { title: "Hostel" },
            { title: "Laundary" },
            { title: "Conveyance" },
            { title: "Canteen" },
            { title: "Mess" },
            { title: "Gym" },
            { title: "Medical"},
            { title: "Library"},
            { title: "Language Lab"},
        ],
        "studentaffair": [
            { title: "Anti Ragging" },
            { title: "Dress Code" },
            { title: "Identity Card" },
            { title: "Safety & Security" },
            { title: "Substance Abuse" },
            { title: "Grievance Redressal" },
            { title: "Complaint of Caste Base Descrimination" },
            { title: "Medicare" },
            { title: "Student Wellbeing" },
            { title: "College Commitees" }
        ],
        "clubandactivities": [
            { title: "AadharClub" },
            { title: "Healthfulness Science & Spirituality Club" },
            { title: "Mech. Contours Club" },
            { title: "IGnight Robotics Club" },
            { title: "Tech Wizard Club" },
            { title: "ElectroCrew Club" }
        ]
    }


    return (
        <Layout>
            <Banner
                bannerHeading="Campus Life @MITRC"
                bannerDescription={routename}
            />
            <PagesLayout rightNavLinks={relatedLinks[routename]} currentRoute={routename} pageName='campus-life'>
                <PageContainer>
                    {
                        obj?.map(item => item.title === child && (
                            <>
                                <HalfImage src={item?.imageUrl} alt="mitrc image" />
                                {
                                    Object.keys(item).map(key => (
                                        <>
                                            <Heading>{item[key]?.contentHeading}</Heading>
                                            <Paragraph>{item[key]?.para}</Paragraph>
                                            {item[key]?.list?.map(listItem => (
                                                <ListItem>{listItem}</ListItem>
                                            ))}

                                            {item[key]?.links?.map(link => (
                                                <div style={{ marginTop: '2vh' }}>
                                                    <HyperLink href={link?.link}>{link?.title}</HyperLink>
                                                </div>
                                            ))}
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                    {
                        (child === 'grievance redressal' || child ===  'complaint of caste base descrimination') && (<ComplaintForm title={child} />)
                    }
                </PageContainer>
            </PagesLayout>
        </Layout>
    )
}

export default CampusLife
