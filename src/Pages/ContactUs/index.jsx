import * as React from 'react'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import contactImg from '../../Assets/contact-illus.png'
import Form from '../../Components/Form'
import { FAQ } from './styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { PlusCircle } from 'phosphor-react'
import { Content } from './styles'
import { Question } from 'phosphor-react'
import Footer from '../../Components/Footer'

const ContactUs = () => {
  return (
    <>
      <Header />
      <Banner text={'Contact Us'} imgUrl={contactImg} />
      <Form />
      <FAQ>
        <h4>Frequently Asked Questions</h4>
        <h2>If you have questions we have answer</h2>
        <h6>
          Answers for our most popular questions about sportsbetting, crypto,
          and bitbetio
        </h6>
        <div className='buttons'>
          <button>General</button>
          <button>Affiliate</button>
          <button>Sports</button>
          <button>Tournament</button>
        </div>
      </FAQ>
      <Content>
        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />I want to play at Bitbetio,
            What do i need to do?
          </AccordionSummary>

          <AccordionDetails>
            <Typography className='typography'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            How fast do i get paid once i win a bet
          </AccordionSummary>

          <AccordionDetails>
            <Typography className='typography'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            What are the commissions i have to pay?
          </AccordionSummary>

          <AccordionDetails>
            <Typography className='typography'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            Can i set the odds for any bet i want?
          </AccordionSummary>

          <AccordionDetails>
            <Typography className='typography'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='summary1'>
          <AccordionSummary
            className='summary2'
            expandIcon={<PlusCircle size={40} />}
          >
            <Question size={40} className='icone' />
            What kind of Escrow do you provide?
          </AccordionSummary>

          <AccordionDetails>
            <Typography className='typography'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Content>
      <Footer />
    </>
  )
}

export default ContactUs
