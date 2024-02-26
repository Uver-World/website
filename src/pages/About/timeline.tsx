import { StepIcon, StepNumber, StepStatus, useSteps, Stepper, Step, StepIndicator, Box, StepTitle, StepDescription, StepSeparator } from '@chakra-ui/react'

const steps = [
    { title: 'Brainstorming', description: 'Octobre 2022' },
    { title: 'Début du développement', description: 'Février 2023' },
    { title: 'Alpha', description: 'Janvier 2024' },
    { title: 'Beta ', description: 'Main 2024' },
    { title: 'Lancement de Uverworld', description: 'Juillet 2025' },
  ]
  
  export function TimeLine() {
    const { activeStep } = useSteps({
      index: 3,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep} className="mb-6" orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
