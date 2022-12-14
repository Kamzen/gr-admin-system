import {
  Card,
  CardActionArea,
  Icon,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardCard = (props) => {
  const navigate = useNavigate();

  console.log(props)

  const theme = useTheme();

  return (
    <>
      <Card sx={{ border: `solid 1px ${theme.palette.secondary.main}` }}>
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            py: 5,
          }}
          onClick={() => {
            navigate(`/login`);
          }}
        >
          <Icon sx={{ fontSize: 60, mb: 1 }} />
          <Typography color="textPrimary">{'title'}</Typography>
        </CardActionArea>
      </Card>
    </>
  );
};

export default DashboardCard;
