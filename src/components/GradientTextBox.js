import "./../global.css";
import "./GradientTextBox.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

function GradientTextBox(props) {
  const className = props.color + "-" + props.number;

  return (
    <Box className={"gradient-text-box " + className}>
      <Box className="gradient-text-box-content rows">
        <Typography
          className="gradient-text-box-number"
          variant="h3"
          color="primary"
        >
          {props.number}
        </Typography>
        <Typography
          className="gradient-text-box-title"
          variant="h5"
          color="primary"
        >
          <span className="gradient-text-box-title-text">{props.title}</span>
        </Typography>
        <Typography
          className="gradient-text-box-dash"
          variant="body"
          color="primary"
        >
          ——
        </Typography>
        <Typography
          className="gradient-text-box-body"
          variant="body"
          color="primary"
        >
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
}

export default GradientTextBox;
