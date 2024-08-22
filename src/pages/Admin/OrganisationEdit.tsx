import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addUserToOrganization,
  deleteUserFromOrganization,
  deleteWithID,
  getWithID,
} from "../../api/organization";
import { getWithEmail, loginWithID } from "../../api/users";
import styles from "./styles/UserList.module.css";

interface Organisation {
  creation_date: string;
  member_ids: [];
  name: string;
  owner_id: string;
  projects_ids: [];
  server_ids: [];
  unique_id: string;
}

interface User {
  username: string;
  unique_id: string;
  logins: [];
  authentication: {
    Credentials: {
      email: string;
      password: string;
      username: string | undefined;
    };
  };
  creation_date: string;
}

export const OrganisationEdit = () => {
  const { id } = useParams();
  const [email, setEmail] = React.useState("");
  const [showWarning, setShowWarning] = React.useState(false);
  const [showExisting, setShowExisting] = React.useState(false);
  const navigate = useNavigate();
  const [organisation, setOrganisation] = React.useState<Organisation>();
  const [owner, setOwner] = React.useState<User>();
  const [members, setMembers] = React.useState<User[]>([]);

  const addUser = async () => {
    if (!email) return;
    const user = await getWithEmail(email);
    if (user.data.code === undefined) {
      const response = await addUserToOrganization(
        id || "",
        user.data.unique_id
      );
      if (response.status === 200 && response.data === true) {
        setMembers([...members, user.data as User]);
        setShowWarning(false);
        setShowExisting(false);
      } else if (response.data !== true) {
        setShowExisting(true);
      }
    } else {
      setShowWarning(true);
      setShowExisting(false);
    }
  };

  const deleteOrganisation = () => {
    deleteWithID(id || "");
    navigate("/admin/organisations");
  };

  const deleteUser = async (index: number) => {
    const user = members[index];
    const response = await deleteUserFromOrganization(id || "", user.unique_id);
    setMembers(members.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (!id) navigate("/admin/organisations");

    const getOrg = async () => {
      const org = await getWithID(id || "");

      setOrganisation(org.data);
      getOwner(org.data.owner_id);
      getMembers(org.data.member_ids);
    };

    const getOwner = async (id: string) => {
      const owner = await loginWithID(id);

      setOwner(owner.data);
    };

    const getMembers = async (ids: string[]) => {
      const members = await Promise.all(
        ids.map(async (id) => {
          const member = await loginWithID(id);
          return member.data;
        })
      );

      setMembers(members);
    };

    getOrg();
  }, [id, navigate]);

  if (!organisation || !owner) return <>Error</>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{organisation.name}</h1>
      <SimpleGrid
        columns={2}
        spacing={10}
        mt={12}
        className="max-w-4xl mx-auto"
      >
        <div>
          <p className={styles.labelCenter}>participants</p>

          <Table variant="simple" className={styles.table}>
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {members.map((user, index) => (
                <Tr key={index}>
                  <Td>{user.authentication.Credentials.username}</Td>
                  <Td>
                    <EditIcon
                      className={styles.editIcon}
                      onClick={() => navigate(`/admin/users/${user.unique_id}`)}
                    />
                    <DeleteIcon
                      className={styles.deleteIcon}
                      onClick={() => deleteUser(index)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {showWarning && (
            <div
              className="warning"
              style={{ color: "red", fontWeight: "bold" }}
            >
              User not found
            </div>
          )}
          {showExisting && (
            <div
              className="warning"
              style={{ color: "red", fontWeight: "bold" }}
            >
              User is already a part of this organisaton
            </div>
          )}
          <div className={styles.addOrganisationContainer}>
            <Input
              placeholder="Add new collaborator"
              className={styles.addOrganisationUserInput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className={styles.addButton} onClick={addUser}>
              Add
            </Button>
          </div>
        </div>
        <Box>
          <p className={styles.label}>Organisation owner info</p>
          <p className={styles.pOrganisationInput}>
            {owner.authentication.Credentials.username}
          </p>
          <p className={styles.pOrganisationInput}>
            {owner.authentication.Credentials.email}
          </p>
          <p className={styles.labelMargin}>Past events</p>
          <p className={styles.pOrganisationInput}>
            Clement has been added to the organisation
          </p>
          <p className={styles.pOrganisationInput}>
            Clement has been downgraded to spectator by Matthew
          </p>
          <p className={styles.pOrganisationInput}>
            Clement has been kicked by Matthew for community guideline
            violations
          </p>
        </Box>
      </SimpleGrid>

      <div className="flex justify-center max-w-4xl mx-auto mt-8">
        <Button
          colorScheme="red"
          className="mt-2 mr-24"
          onClick={deleteOrganisation}
        >
          Delete organisation
        </Button>
        <div className="ml-24">
          <Button colorScheme="gray" className="mt-2 mr-2">
            Cancel
          </Button>
          <Button colorScheme="blue" className="mt-2 ml-2">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};
