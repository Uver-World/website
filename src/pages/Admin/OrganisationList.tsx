import styles from './styles/OrganisationList.module.css';
import {Badge, Button, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

enum Role {
  ADMIN = 'Administrator',
  organisation = 'organisation'
}

interface Organisation {
  name: string,
  email: string,
  role: Role[]
}

export const OrganisationList = () => {
  const navigate = useNavigate();
  const [organisationname, setorganisationname] = React.useState('');
  const [organisations, setorganisations] = React.useState<Organisation[]>([
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      role: [Role.ADMIN]
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      role: [Role.organisation]
    },
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      role: [Role.ADMIN, Role.organisation]
    },
  ]);

  const addorganisation = () => {
    setorganisations([...organisations, {
      name: organisationname,
      email: `${organisationname}@gmail.com`,
      role: [Role.organisation]
    }]);
  }

  const deleteorganisation = (index: number) => {
    const neworganisations = [...organisations];
    neworganisations.splice(index, 1);
    setorganisations(neworganisations);
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
                { organisation.role.includes(Role.ADMIN) ?
                  <Badge colorScheme="green" className={styles.badge}>Admin</Badge> :
                  <Badge colorScheme="blue" className={styles.badge}>organisation</Badge>}
                {organisation.name}
              </Td>
              <Td>{
                organisation.role.map((role, index) => {
                  if (index === 0) {
                    return role;
                  } else {
                    return `, ${role.toLowerCase()}`;
                  }
                })}</Td>
              <Td>
                <EditIcon className={styles.editIcon} onClick={() => navigate('/admin/organisations/1')} />
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
