import {TfiGithub,TfiLinkedin} from "react-icons/tfi"
import {SiInstagram} from "react-icons/si"
import { Stack, VStack ,Avatar,Text, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import Image from '../assets/profile.jpg'




const About = () => {
  return (
    <Stack  justifyItems={'center'} >
     <VStack marginTop={'5'}>
      <Avatar filter={'grayscale(1)'} boxSize={"52"}  mt={["4", "0"]} src={Image} />
       <Box 
       alignItems={'center'}
       padding={['8','14']}
       w={['100%','60%']}
       
      >
       <Text 
      fontSize={'lg'}
      textAlign={'center'}
      letterSpacing={["unset","widest"]}
      >
      Hey! Myself Krishan Muraree Verma . I'm a final Year Student Of Kamla Nehru Institute 
      of Technology Sultanpur, Uttar pradesh . I have made this project using ReactJs . Here are my other handles ... stay tuned 👍  
      </Text>

      <HStack marginTop={['9','14']} 
       justifyContent={'center'} 
       spacing={'9'}
       > 
       
       <a href="https://github.com/muraree9721">
        <TfiGithub  size={'30'} />
        </a>
        <a href="www.linkedin.com/in/krishan-murari-verma-627710227"> 
        <TfiLinkedin size={'30'}/>
        </a>
        <a href="/#">
        <SiInstagram size={'30'} />
        </a>
      </HStack>
      </Box>
     </VStack>
    </Stack>
   
  )
}

export default About
