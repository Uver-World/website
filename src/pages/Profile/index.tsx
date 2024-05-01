import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createLicense,
  getLicenses,
  getOrganizations,
  loginWithToken,
  updateUsername,
} from "../../api/users";
import styles from "./styles/index.module.css";

type License = {
  unique_id: string;
  user_id: string;
  license: string;
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    unique_id: "",
    logins: [],
    group: "",
    authentication: {
      Credentials: {
        email: "",
        password: "",
        username: "",
        avatar: "",
      },
    },
    creation_date: "",
  });
  const [orgs, setOrgs] = useState([]);
  const [licenses, setLicenses] = useState<License[]>([]);
  const [usernameEditing, setUsernameEditing] = useState(false);
  const [tmpUsername, setTmpUsername] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    const getUser = async () => {
      const user = await loginWithToken(localStorage.getItem("token") || "");

      if (user.data.code && user.data.code !== 200) {
        alert(user.data.message);
        navigate("/login");
      }

      setUser(user.data);
      setTmpUsername(user.data.authentication.Credentials.username);
      getOrgs(user.data.unique_id);
      getLic(user.data.unique_id);
    };

    const getOrgs = async (id: string) => {
      const orgs = await getOrganizations(
        id,
        localStorage.getItem("token") || ""
      );

      setOrgs(orgs.data);
    };

    const getLic = async (id: string) => {
      const lic = await getLicenses(id);

      setLicenses(lic.data);
    };

    getUser();
  }, [navigate]);

  const newLicense = async () => {
    const lic = await createLicense(user.unique_id);

    setLicenses([...licenses, lic.data]);
  };

  const updateUser = async () => {
    setUsernameEditing(false);

    await updateUsername(localStorage.getItem("token") || "", tmpUsername);

    setUser({
      ...user,
      authentication: {
        ...user.authentication,
        Credentials: {
          ...user.authentication.Credentials,
          username: tmpUsername,
        },
      },
    });
  };

  return (
    <div className={styles.container}>
      <Box mx={10}>
        <Center>
          <img
            src={user.authentication.Credentials.avatar}
            alt="Notre équipe"
            className={styles.team}
          />
        </Center>
        <Center>
          {usernameEditing ? (
            <input
              type="text"
              defaultValue={tmpUsername}
              onChange={(e) => setTmpUsername(e.target.value)}
              onBlur={(e) => updateUser()}
            />
          ) : (
            <h1
              className={styles.title}
              onClick={() => setUsernameEditing(true)}
            >
              {user.authentication.Credentials.username}
            </h1>
          )}
        </Center>
        <SimpleGrid columns={3} mt={12} className="max-w-full mx-auto">
          <Box>
            <p className={styles.additionalText}>My organisations</p>

            {orgs.map((org: any, index) => (
              <div key={index}>
                <Button
                  className={styles.pOrgaInput}
                  onClick={() =>
                    navigate(`/admin/organisations/${org.unique_id}`)
                  }
                  style={{ maxWidth: "400px" }}
                >
                  {org.name}
                </Button>
              </div>
            ))}

            <div>
              <Link to="/admin/organisations" className="mt-6 underline">
                <p className={styles.additionalText}>see all organisations </p>
              </Link>
            </div>
          </Box>
          <Box>
            <p className={styles.additionalText}>My informations</p>
            <p className="mt-4 mb-2 ml-2">Email</p>
            <p className={styles.pInput}>
              {user.authentication.Credentials.email}
            </p>
            <p className="mt-4 mb-2 ml-2">License</p>
            {licenses.length === 0 && (
              <p className={styles.pInput}>No license found</p>
            )}
            <div className="flex flex-col mb-2 gap-y-1">
              {licenses.map((license: License) => (
                <p key={license.unique_id} className={styles.pInput}>
                  {license.license}
                </p>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.button} onClick={() => newLicense()}>
                Get a license
              </Button>
              {licenses.length > 0 ? (
                <Button className={styles.button} onClick={() => console.log("bravo frerot tu as téléchargé uverworld")}>
                  Download
                </Button>
              ) : null}
            </div>
          </Box>
          <Box>
            <Center>
              <p className={styles.additionalText}>Actions</p>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button
                  className={styles.button}
                  onClick={() => navigate("/prices")}
                >
                  <p className={styles.additionalText}>Reset password</p>
                </Button>
              </div>
            </Center>
            <Center>
              <div className={styles.addContainer}>
                <Button
                  className={styles.button}
                  onClick={() => navigate("/prices")}
                >
                  <p className={styles.additionalText}>Purchase license </p>
                </Button>
              </div>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Profile;
