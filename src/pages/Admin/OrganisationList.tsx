import styles from './styles/OrganisationList.module.css';
import {Badge, Button, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";
import { getOrganizations, loginWithID, loginWithToken } from '../../api/users';
import {createOrganisation, deleteWithID } from '../../api/organization';

enum Role {
  ADMIN = 'Administrator',
  organisation = 'organisation'
}

interface Organisation {
  creation_date: string,
  member_ids: [],
  name: string,
  owner_id: string,
  projects_ids: [],
  server_ids: [],
  unique_id: string
}

interface User {
  username: string,
  unique_id: string,
  logins: [],
  group: string,
  authentication: {
    Credentials: {
      email: string,
      password: string
    }
  },
  creation_date: string,
}

export const OrganisationList = () => {
  const navigate = useNavigate();
  const [organisationname, setorganisationname] = React.useState('');
  const [organisations, setorganisations] = React.useState<Organisation[]>([]);
  const [owners, setowners] = React.useState<string[]>([]);
  const [user, setUser] = useState<User>();

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

      setorganisations(orgs.data)
      getOwnersUsernames(orgs.data)
    }

    const getOwnersUsernames = async (orgs: Organisation[]) => {
      const owners = await Promise.all(orgs.map(async (orgs) => {
        const owner = await loginWithID(orgs.owner_id)

        return owner.data.username
      }))

      setowners(owners)
    }
    getUser()
  }, []);

  const deleteorganisation = async (index: number) => {
    const neworganisations = [...organisations];

    await deleteWithID(neworganisations[index].unique_id)

    neworganisations.splice(index, 1);
    setorganisations(neworganisations);
  }

  const addorganisation = async () => {
    if (!organisationname || !user) return;

    await createOrganisation(organisationname, user.unique_id)

    setorganisations([...organisations, {
      creation_date: '123',
      member_ids: [],
      name: organisationname,
      owner_id: user.unique_id,
      projects_ids: [],
      server_ids: [],
      unique_id: '123'
    }]);
    setowners([...owners, user.username])
    setorganisationname('');
  }

  return (
  <div className={styles.container}>
    <h1 className={styles.title}>Organisation management</h1>

    <TableContainer>
      <Table variant='simple' className={styles.table}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Owner</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {organisations.map((organisation, index) => (
            <Tr key={index}>
              <Td>
                {organisation.name}
              </Td>
              <Td>
                {owners[index]}
                </Td>
              <Td>
                <EditIcon className={styles.editIcon} onClick={() => navigate(`/admin/organisations/${organisation.unique_id}`)} />
                <DeleteIcon className={styles.deleteIcon} onClick={() => deleteorganisation(index)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    <div className={styles.addContainer}>
      <Input placeholder='Add new organisation' className={styles.addInput} onChange={(e) => setorganisationname(e.target.value)} />
      <Button className={styles.addButton} onClick={addorganisation}>Add</Button>
    </div>
  </div>
  )
}
