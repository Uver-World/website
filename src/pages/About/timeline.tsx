import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  {
    title: "Octobre 2022",
    description:
      "Epitech Moonshot: réflexion autour du projet, définition des besoins et constitution de l'équipe",
  },
  {
    title: "Février 2023",
    description:
      "Epitech Experience: présentation au jury et public puis validation du projet",
  },
  {
    title: "Juillet 2023",
    description: "Premier prototype du logiciel avec rendu 3D",
  },
  {
    title: "Janvier 2024 ",
    description:
      "Alpha: première version du logiciel incluant les fonctionnalités de base",
  },
  {
    title: "Juin 2024",
    description:
      "Beta: version améliorée du logiciel avec ajout de nouvelles fonctionnalités",
  },
  {
    title: "Décembre 2024",
    description:
      "Correction de bugs et amélioration de l'interface utilisateur",
  },
  {
    title: "Février 2025",
    description:
      "Version finale du logiciel avec ajout de nouvelles fonctionnalités et déploiement auprès des utilisateurs",
  },
];

export function TimeLine() {
  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} className="mb-6" orientation="vertical">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
