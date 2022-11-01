import { useState } from 'react';
import { Icon } from '@iconify/react';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
import iconUpload from '@iconify/icons-ic/file-upload';
// material
import { Button, Typography, TextField, Stack, List, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';

import { Box, Grid, Container, LinearProgress } from '@mui/material';
import { varFadeInUp, varFadeInRight, MotionInView } from '../../animate';
// utils
import { fPercent } from '../../../utils/formatNumber';
import mockData from '../../../utils/mock-data';

// ----------------------------------------------------------------------

const LABEL = ['Development', 'Design', 'Marketing'];

const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
  label: LABEL[index],
  value: mockData.number.percent(index)
}));

const OPTIONS = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content'
];

export interface SearchHeaderProps {
  resultString: string;
  resultData: any;
}

const ResultView: React.FC<SearchHeaderProps> = ({
  resultString,
  resultData
}) => {

type ProgressItemProps = {
  progress: {
    label: string;
    value: number;
  };
};

function ProgressItem({ progress }: ProgressItemProps) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

  return (
    <Stack spacing={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h3">
                Result Summary
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'
                }}
              >
                {resultString !== "" ? resultString : "Result Wil be displayed here"}
              </Typography>
            </MotionInView>

            {resultString &&
             <Box sx={{ my: 5 }}>
                <MotionInView key={"Accuracy"} variants={varFadeInRight}>
                  <ProgressItem progress={{label: "Accuracy", value: 83.6}} />
                </MotionInView>
            </Box>}

            <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={iconUpload} width={24} height={24} />}
                
              >
                Save
              </Button>
            </MotionInView>
    </Stack>
  );
}

export default ResultView;