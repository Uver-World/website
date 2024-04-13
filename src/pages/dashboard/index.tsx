import styles from './styles/index.module.css';
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { getOrganizations, loginWithToken } from '../../api/users';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [orgsLength, setOrgsLength] = useState(0);
  const [membersLength, setMembersLength] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }

    const getUser = async () => {
      const user = await loginWithToken(localStorage.getItem('token') || '');
      
      if (user.data.code && user.data.code !== 200) {
        alert(user.data.message)
        navigate('/login')
      }
      
      setUser(user.data)
      getOrgs(user.data.unique_id)
    }

    const getOrgs = async (id: string) => {
      const orgs = await getOrganizations(id, localStorage.getItem('token') || '')

      setOrgsLength(orgs.data.length)

      let members = 0;

      orgs.data.forEach((org: any) => {
        members += org.member_ids.length
      })

      setMembersLength(members)
    }

    getUser()
  }, [user, navigate]);

  return (
    <div className={`${styles.container} ${styles.profileContainer}`}>
      <Box mx={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={12} className='max-w-full mx-auto'>
          <Box>
            <div className={`${styles.pCollaboratorsInput} ${styles.team}`}>
              <p className={styles.sh}>Organisations</p>
              <p className={styles.title}>{orgsLength}</p>
            </div>
            <p className={styles.additionalText}>Create</p>
            <div>
              <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/organisations')}>Organisation</Button>
            </div>
            <div>
              <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/users')}>Invite users</Button>
            </div>
          </Box>
          <Box>
            <div className={`${styles.pCollaboratorsInput} ${styles.team}`}>
              <p className={styles.sh}>Collaborators</p>
              <p className={styles.title}>{membersLength}</p>
            </div>
            <p className={styles.additionalText}>Manage</p>
            <div>
              <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/organisations')}>Manage organisations</Button>
            </div>
            <div>
              <Button className={`${styles.pOrgaInput} ${styles.leftAlignedButton}`} onClick={() => navigate('/admin/users')}>Manage users</Button>
            </div>
          </Box>
          <Box>
            <p className={styles.additionalText}>Last activities</p>
            <div>
              <p className={styles.pOrganisationInput}>
                Clement has been added to the organisation
              </p>
              <p className={styles.pOrganisationInput}>
                Clement has been downgraded to spectator by Matthew
              </p>
              <p className={styles.pOrganisationInput}>
                Clement has been kicked by Matthew for community guideline violations
              </p>
            </div>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
  
}

export default Dashboard;