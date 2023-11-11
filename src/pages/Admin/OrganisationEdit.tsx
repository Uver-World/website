import styles from './styles/UserList.module.css';
import {Badge, Box, Button, Input, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

enum Role {
  ADMIN = 'Administrator',
  USER = 'Organisation'
}

interface Organisation {
  ownerName: string,
  ownerEmail: string,
  name: string,
  email: string,
  role: Role[]
}

interface User {
    name: string,
    email: string,
    role: Role[]
}

export const OrganisationEdit = () => {
  const [organisation, setUser] = React.useState<Organisation>({
      ownerName: 'matthew',
      ownerEmail: 'clement.ozor@epitech.eu',
      name: 'UverWorld',
      email: 'john.doe@gmail.com',
      role: [Role.ADMIN]
    });
    const [username, setUsername] = React.useState('');
    const navigate = useNavigate();
    const [organisationUser, setOrganisationUsers] = React.useState<User[]>([
        {
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          role: [Role.ADMIN]
        },
        {
          name: 'Jane Doe',
          email: 'jane.doe@gmail.com',
          role: [Role.USER]
        },
        {
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          role: [Role.ADMIN, Role.USER]
        },
      ]);

      const addUser = () => {
        setOrganisationUsers([...organisationUser, {
          name: username,
          email: `${username}@gmail.com`,
          role: [Role.USER]
        }]);
      }
    
      const deleteUser = (index: number) => {
        const newUsers = [...organisationUser];
        newUsers.splice(index, 1);
        setOrganisationUsers(newUsers);
      }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{organisation.name}</h1>

      <SimpleGrid columns={2} spacing={10} mt={12} className="max-w-4xl mx-auto">
        <div><p className={styles.labelCenter}>participants</p>

      <Table variant='simple' className={styles.table}>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Roles</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {organisationUser.map((user, index) => (
              <Tr key={index}>
              <Td>
                { user.role.includes(Role.ADMIN) ?
                  <Badge colorScheme="green" className={styles.badge}>Admin</Badge> :
                  <Badge colorScheme="blue" className={styles.badge}>User</Badge>}
                {user.name}
              </Td>
              <Td>{
                  user.role.map((role, index) => {
                      if (index === 0) {
                          return role;
                        } else {
                            return `, ${role.toLowerCase()}`;
                        }
                    })}</Td>
              <Td>
                <EditIcon className={styles.editIcon} onClick={() => navigate('/admin/users/1')} />
                <DeleteIcon className={styles.deleteIcon} onClick={() => deleteUser(index)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
        
      </Table>
      <div className={styles.addOrganisationContainer}>
      <Input placeholder='Add new collaborator' className={styles.addOrganisationUserInput} onChange={(e) => setUsername(e.target.value)} />
      <Button className={styles.addButton} onClick={addUser}>Add</Button>
    </div>
          </div>
        <Box>
          <p className={styles.label}>Organisation owner info</p>
          <p className={styles.pOrganisationInput}>
            {organisation.ownerName}
          </p>
          <p className={styles.pOrganisationInput}>
            {organisation.ownerEmail}
          </p>
          <p className={styles.labelMargin}>Past events</p>
          <p className={styles.pOrganisationInput}>
            Clement has been added to the organisation
          </p>
          <p className={styles.pOrganisationInput}>
            Clement has been downgraded to spectator by Matthew
          </p>
          <p className={styles.pOrganisationInput}>
            Clement has been kicked by Matthew for community guideline violations
          </p>
        </Box>
      </SimpleGrid>

      <div className="max-w-4xl mx-auto mt-8 flex justify-center">
        <Button colorScheme='red' className="mt-2 mr-24">
          Delete organisation
        </Button>
        <div className="ml-24">
          <Button colorScheme='gray' className="mt-2 mr-2">
            Cancel
          </Button>
          <Button colorScheme='blue' className="mt-2 ml-2">
            Update
          </Button>
        </div>
      </div>
      
    </div>
  )
}
