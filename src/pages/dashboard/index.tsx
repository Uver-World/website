import styles from './styles/index.module.css';
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Box mx={10}>
        <SimpleGrid columns={3} mt={12} className='max-w-full mx-auto'>
        <Box>
            <div className={styles.pCollaboratorsInput}>

          <p className={styles.sh}> Organisations </p>
          <p className={styles.title}>4</p>
            </div>
          <p className={styles.additionalText}>Create</p>
          <div>
            <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/organisations')} style={{ width: '400px'}}>Organisation</Button>
          </div>
          <div>
            <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/users')} style={{ width: '400px' }}>Invite users</Button>
          </div>
          </Box>
          <Box>
            <div className={styles.pCollaboratorsInput}>

          <p className={styles.sh}> Collaborators </p>
          <p className={styles.title}>37</p>
            </div>
          <p className={styles.additionalText}>Manage</p>
          <div>
            <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/organisations')} style={{ width: '400px' }}>Manage organisations</Button>
          </div>
          <div>
            <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/users')} style={{ width: '400px' }}>Manage users</Button>
          </div>
          </Box>
          <Box>
            <p className={styles.additionalText}>last activities</p>
            <p className={styles.pOrganisationInput}>
              Clement has been added to the organisation
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been downgraded to spectator by Matthew
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been kicked by Matthew for community guideline violations
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been added to the organisation
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been downgraded to spectator by Matthew
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been kicked by Matthew for community guideline violations
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been added to the organisation
            </p>
            <p className={styles.pOrganisationInput}>
              Clement has been downgraded to spectator by Matthew
            </p>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Dashboard;