import styles from './styles/index.module.css';
import team from '../../assets/img/team.jpg'
import {Box, Button, Center, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Box mx={10}>
        <Center>
          <img src={team} alt="Notre équipe" className={styles.team} />
        </Center>
        <Center>
          <h1 className={styles.title}> karim </h1>
        </Center>
        <SimpleGrid columns={3} mt={12} className='max-w-full mx-auto'>
          <Box>
            <p className={styles.additionalText}>My organisations</p>
            <div>
              <Button className={styles.pOrgaInput} onClick={() => navigate('/admin/organisations/1')} style={{ width: '400px' }}>Organisation 1</Button>
            </div>
            <div>
              <Button className={styles.pOrgaInput} onClick={() => navigate('/admin/organisations/1')} style={{ width: '400px' }}>Organisation 2</Button>
            </div>
            <div>
              <Link to="/admin/organisations" className='underline mt-6'>see all organisations</Link>
            </div>
          </Box>
          <Box>
            <p className={styles.additionalText}>My informations</p>
            <p className='ml-2 mb-2 mt-4'>Email</p>
            <p className={styles.pInput}>
              clement.ozor@epitech.eu
            </p>
            <p className='ml-2 mt-4 mb-2'>License</p>
            <p className={styles.pInput}>
              1XC4-DF43-CG24-4S3R
            </p>
          </Box>
          <Box>
            <Center>
              <p className={styles.additionalText}>Actions</p>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button className={styles.button} onClick={() => navigate('/prices')}>Reset password</Button>
              </div>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button className={styles.button} onClick={() => navigate('/prices')}>Purchase license </Button>
              </div>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Profile;