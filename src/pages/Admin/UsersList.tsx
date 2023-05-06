import styles from './styles/UserList.module.css';
import {Badge, Button, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
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

export const UsersList = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState<User[]>([
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
    <h1 className={styles.title}>User management</h1>

    <TableContainer>
      <Table variant='simple' className={styles.table}>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Roles</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
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
    </TableContainer>

    <div className={styles.addContainer}>
      <Input placeholder='Add new collaborator' className={styles.addInput} onChange={(e) => setUsername(e.target.value)} />
      <Button className={styles.addButton} onClick={addUser}>Add</Button>
    </div>
  </div>
  )
}
