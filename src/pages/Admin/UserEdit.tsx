import styles from './styles/UserList.module.css';
import {
  Badge,
  Box,
  Button,
  Input,
  Select,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React from "react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

enum Role {
  ADMIN = 'Administrator',
  USER = 'User'
}

interface User {
  name: string,
  email: string,
  role: Role[]
}

export const UserEdit = () => {
  const [user, setUser] = React.useState<User>({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      role: [Role.ADMIN]
    });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{user.name}</h1>

      <SimpleGrid columns={2} spacing={10} mt={12} className="max-w-4xl mx-auto">
        <Box>
          <p className={styles.label}>Manage roles</p>
          <Select className={styles.addInput}>
            {Object.values(Role).map((role) => (
              <option key={role} value={role} selected={user.role.includes(role)}>{role}</option>
            ))}
          </Select>

          <p className={styles.label} style={{
            marginTop: '2rem'
          }}>Last activities</p>
          <div className={styles.lastActivities}>
            <p className={styles.pInput}>
              Sn0w join the organization
            </p>
            <p className={styles.pInput}>
              Sn0w has been promoted to Administrator by Matthew
            </p>
            <p className={styles.pInput}>
              Sn0w join the project UverWorld
            </p>
          </div>
        </Box>
        <Box>
          <p className={styles.label}>User info</p>
          <p className={styles.pInput}>
            {user.name}
          </p>
          <p className={styles.pInput}>
            {user.email}
          </p>
          <Button colorScheme='blue' variant='link' className="mt-2">
            Forgot password
          </Button>
        </Box>
      </SimpleGrid>

      <div className="max-w-4xl mx-auto mt-8 flex justify-center">
        <Button colorScheme='red' className="mt-2 mr-24">
          Delete account
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
