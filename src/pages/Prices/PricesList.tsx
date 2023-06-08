import styles from './styles/index.module.css';
import {Badge, Button, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {ChatIcon, CopyIcon, DeleteIcon, EditIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

enum Role {
  ADMIN = 'Administrator',
  USER = 'User'
}

interface User {
  name: string,
  email: string,
  role: Role[]
}

export const PricesList = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState<User[]>([
    {
      name: 'Forfait epitech 10k/an',
      email: 'arnaque',
      role: [Role.ADMIN]
    },
    {
      name: '42',
      email: 'gratuit',
      role: [Role.USER]
    },
    {
      name: 'MSC',
      email: 'cest manu qui régale',
      role: [Role.ADMIN, Role.USER]
    },
  ]);

  const addUser = () => {
    setUsers([...users, {
      name: username,
      email: `${username}@gmail.com`,
      role: [Role.USER]
    }]);
  }

  const deleteUser = (index: number) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  return (
  <div className={styles.container}>
    <h1 className={styles.title}>Mes Licenses</h1>

    <TableContainer>
      <Table variant='simple' className={styles.table}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>
              <HamburgerIcon className={styles.editIcon}/>
                {user.name}
              </Td>
              <Td>{user.email}</Td>
              <Td>
                <CopyIcon className={styles.editIcon} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    <div className={styles.addContainer}>
      <Button className={styles.addButton} onClick={() => navigate('/prices')}>Buy new key </Button>
    </div>
  </div>
  )
}
