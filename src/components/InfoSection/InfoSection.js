import React from 'react'
import {InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWrapper,Img} from './InfoSectionElements'
import {Button, Container} from '../../globalStyles';
import { Link } from 'react-router-dom';

const InfoSection = ({primary,lightBg,imgStart,lightTopLine,lightText,lightTextDesc,buttonLabel,description,headLine,topLine,alt,img,start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big primary={primary} fontBig>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec> 
        </>
    )
}

export default InfoSection
